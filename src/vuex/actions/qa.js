import { init3D } from './section2-new'

export const openRules = ({ dispatch, state }, status) => {
  dispatch('SET_QA_RULES_OPEN', status)
}

export const openShare = ({ dispatch, state }, status) => {
  dispatch('SET_QA_SHARE_OPEN', status)
}

export const openNoChance = ({ dispatch, state }, status) => {
  dispatch('SET_QA_NOCHANCE_OPEN', status)
  if (!status) {
    // dispatch('RESET_QA')
    back3D({ dispatch, state })
  }
}

export const setProgress = ({ dispatch, state }, step) => {
  $('.qa-main input[type="radio"]').prop('checked', false)
  dispatch('SET_QA_PROGRESS', step)

  if (step === 0) {
    countDown({ dispatch, state })
  }
}

const $ = window.$

const checkChanceNumber = ({ dispatch, state }, cb) => {
  const _qaId = state.qaId
  const _port = window.localDebug ? '/static/get_question_num.json' : window.siteUrl + '/api/question/get_question_num'
  // const _port = '/static/get_question_num.json'

  $.ajax({
    url: _port,
    type: 'GET',
    dataType: 'json',
    data: { type: _qaId }
  })
  .done(function (data) {
    // if (data.status.code === 1000) {
    // 更新机会数
    dispatch('SET_QA_CHANCE_NUM', data.result.num)
    // 结束loading
    dispatch('SET_QA_LOADING', false)
    // 机会数<=0时，显示无机会提示
    if (data.result.num <= 0) {
      dispatch('SET_QA_NOCHANCE_OPEN', true)
    }
    // callback
    if (typeof cb === 'function') {
      cb.call(this, { dispatch, state })
    }
    // } else {
    //   window.alert('错误: ' + data.status.message + ', 请刷新页面重试。')
    //   dispatch('SET_QA_LOADING', false)
    // }
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    window.alert('获取数据错误，请刷新页面重试。')
    console.log(jqXHR, textStatus, errorThrown)
    dispatch('SET_QA_LOADING', false)
  })
}

export const getQList = ({ dispatch, state }) => {
  // 检查机会数 begin
  checkChanceNumber({ dispatch, state }, function () {
    if (state.qaChanceNum > 0) {
      // 请求问题列表 begin
      const _qaId = state.qaId
      const _port = window.localDebug ? '/static/get_question_list.json' : window.siteUrl + '/api/question/get_question_list'
      // const _port = '/static/get_question_list.json'
      dispatch('SET_QA_LOADING', true)
      $.ajax({
        url: _port,
        type: 'GET',
        dataType: 'json',
        data: { type: _qaId }
      })
      .done(function (data) {
        if (data.status.code === 1000) {
          // 写入数据
          dispatch('SET_QA_LIST', data.result)
          dispatch('SET_QA_LOADING', false)
        } else {
          window.alert(data.status.code)
          window.alert(data.status.message)
          dispatch('SET_QA_LOADING', false)
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        window.alert('获取题目数据错误，请刷新页面重试。')
        console.log(jqXHR, textStatus, errorThrown)
        dispatch('SET_QA_LOADING', false)
      })
      // 请求问题列表 end
    }
  })
  // 检查机会数 end
}

const coverN2L = (number) => {
  if (number === 0) {
    return 'A'
  } else if (number === 1) {
    return 'B'
  } else if (number === 2) {
    return 'C'
  } else if (number === 3) {
    return 'D'
  } else {
    return 'Z'
  }
}

export const addAnswer = ({ dispatch, state }, index, id, answer) => {
  dispatch('ADD_QA_ANSWER', index, id, answer)

  // 用户选择的答案
  const userSelectAnswer = coverN2L(answer)
  // 正确答案
  const correctAnswer = state.qaList[index].answer_select

  if (userSelectAnswer !== correctAnswer) {
    postAnswers({ dispatch, state })
    console.log('回答错误')
    window.clearInterval(window.__qaCountDown)
    console.log('倒计时结束。')
  } else if (state.qaProgress >= 9) {
    // 提交数据
    postAnswers({ dispatch, state })
    console.log('回答完毕')
    window.clearInterval(window.__qaCountDown)
    console.log('倒计时结束。')
  }
}

export const postAnswers = ({ dispatch, state }, tag) => {
  const _port = window.localDebug ? '/static/get_question_code.json' : window.siteUrl + '/api/question/get_question_code'
  // const _port = '/static/get_question_code.json'
  const _qaId = state.qaId

  let _answer = ''
  for (var i = 0; i < state.qaAnswer.length; i++) {
    _answer += state.qaAnswer[i]
  }

  // data不能为空
  if (_answer === '') {
    _answer = 'nodata'
  }

  let _data = {
    type: _qaId,
    data: _answer
  }

  // 超时标识
  if (tag === 'timeout') {
    _data.timeout = 'timeout'
  }

  dispatch('SET_QA_LOADING', true)

  $.ajax({
    url: _port,
    type: window.localDebug ? 'GET' : 'POST',
    dataType: 'json',
    data: _data
  })
  .done(function (data) {
    // if (data.status.code === 1000) {
    // window.alert('codestatus: ' + data.result.codestatus)
    // window.alert('status.code: ' + data.status.code)
    // window.alert('status.message: ' + data.status.message)
    if (data.result.codestatus < 7) {
      // 更新答题结果
      dispatch('UPDATE_RESULT', {
        code: data.result.code,
        codestatus: data.result.codestatus
      })
    } else {
      window.alert('未知错误，请刷新页面重试。')
    }
    // 关loading
    dispatch('SET_QA_LOADING', false)
    // } else {
    //   window.alert('错误: ' + data.status.message + ', 请刷新页面重试。')
    //   dispatch('SET_QA_LOADING', false)
    // }
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    window.alert('提交答案出错，请刷新页面重新答题。')
    // window.alert(textStatus)
    // window.alert(errorThrown)
    console.log(jqXHR, textStatus, errorThrown)
    dispatch('SET_QA_LOADING', false)
  })
}

export const back3D = ({ dispatch, state }) => {
  dispatch('RESET_QA')
  console.log(state.qaId)
  window.touch3D = false
  window.bind3DEvt = false
  document.getElementById('s3D').innerHTML = ''
  init3D()
}

export const countDown = ({ dispatch, state }) => {
  const _total = state.qaTime
  window.__qaCountDownTime = _total

  window.__qaCountDown = setInterval(function () {
    window.__qaCountDownTime -= 1
    if (window.__qaCountDownTime >= 0 && state.qaProgress <= 9) {
      dispatch('UPDATE_QA_TIME', window.__qaCountDownTime)
      console.log('倒计时中: ' + window.__qaCountDownTime)
    }
    if (window.__qaCountDownTime < 0 && state.qaProgress < 9) {
      window.clearInterval(window.__qaCountDown)
      postAnswers({ dispatch, state }, 'timeout')
      console.log('倒计时结束，已超时。')
    }
  }, 1000)
}
