// import { APIError, handleResponse } from '../api'
// const $ = window.$

/**
 * 关闭Loading
 * @param  {string} selector 选择器
 */
const closeLoading = (selector) => {
  window.$(selector).hide()
}

/**
 * 获取微信jssdk需要的一些内容
 * @param  {object} component 组件对象
 */
const getWXInfo = (component) => {
  const _port = 'http://happymove.ovpp.cn/weixin/api/getticketjson?url=' + encodeURIComponent(window.location.href)

  // component.$http.jsonp(_port, { jsonp: 'jsoncallback' })
  // .then(function (response) {
  //   configWX(response.data)
  // })

  window.$.ajax({
    url: _port,
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    data: {}
  })
  .done(function (data) {
    // console.log(data)
    configWX(data)
  })
}

/**
 * 配置微信jssdk
 * @param  {object} data 配置数据
 */
const configWX = (data) => {
  const _appId = data.appId
  const _timestamp = data.timestamp
  const _nonceStr = data.nonceStr
  const _signature = data.signature

  window.wx.config({
    // debug: true,
    appId: _appId,
    timestamp: _timestamp,
    nonceStr: _nonceStr,
    signature: _signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
  })
}

/**
 * 配置微信分享内容
 * @param  {object} conf 分享配置
 */
const setWXShare = ({ dispatch, state }) => {
  window.wx.ready(function () {
    window.wx.onMenuShareTimeline({
      title: '劲速电视免费送，爱我你怕了吗？',
      desc: '劲速电视免费送，爱我你怕了吗？',
      link: window.location.href,
      imgUrl: window.siteUrl + '/images/share/share.jpg',
      success: function () {
        addChance({ dispatch, state })
        // dispatch('RESET_QA')
      },
      cancel: function () {}
    })

    window.wx.onMenuShareAppMessage({
      title: '爱我你怕了吗？',
      desc: '劲速电视免费送，爱我你怕了吗？',
      link: window.location.href,
      imgUrl: window.siteUrl + '/images/share/share.jpg',
      type: 'link',
      dataUrl: '',
      success: function () {
        addChance({ dispatch, state })
        // dispatch('RESET_QA')
      },
      cancel: function () {}
    })
  })
}

const addChance = ({ dispatch, state }) => {
  const _type = state.qaId
  const _port = window.localDebug ? '/static/add_chance.json' : window.siteUrl + '/api/question/add_chance'
  dispatch('SET_QA_LOADING', true)
  // window.alert('测试分享回调，给问题id ' + _type + ' 加机会')
  window.$.ajax({
    url: _port,
    type: 'GET',
    dataType: 'json',
    data: {type: _type}
  })
  .done(function (data) {
    dispatch('SET_QA_LOADING', false)
    if (data.status.code === 1000) {
      // TODO: 是否需要提示？
      // window.alert('加机会成功')
    } else {
      // TODO：是否需要报错？
      window.alert(data.status.message)
    }
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    // TODO：是否需要报错？
    window.alert('未知错误')
  })
}

export {
  closeLoading,
  getWXInfo,
  setWXShare
}
