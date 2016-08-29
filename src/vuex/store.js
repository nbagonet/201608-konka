import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  // 当前场景id
  section: 0,
  // 答题loading
  qaLoading: false,
  // 当前开启的答题序号
  qaId: 0,
  // 当前答题进度
  qaProgress: -1,
  // 答题规则
  qaRulesOpen: false,
  // 分享浮层
  qaShareOpen: false,
  // 无机会提示浮层
  qaNoChanceOpen: false,
  // 答题机会数
  qaChanceNum: 0,
  // 答题时间
  qaTime: 90,
  // 问题列表
  qaList: [],
  // 用户选择的答案
  qaAnswer: ['', '', '', '', '', '', '', '', '', ''],
  // 答题结果
  qaResult: {
    codestatus: 0,
    code: ''
  },
  // 康康佳佳
  kkjj: false
}

const mutations = {
  // 改变当前场景id
  SET_SECTION_ID (state, id) {
    state.section = id
  },
  // 设置答题loading状态
  SET_QA_LOADING (state, status) {
    state.qaLoading = status
  },
  // 设置当前开启的答题序号
  SET_QA_ID (state, id) {
    state.qaId = id
  },
  // 设置答题进度
  SET_QA_PROGRESS (state, step) {
    state.qaProgress = step
  },
  // 更新问题列表数据
  SET_QA_LIST (state, data) {
    state.qaList = data
  },
  // 更新答题时间
  UPDATE_QA_TIME (state, time) {
    state.qaTime = time
  },
  // 更新答案
  ADD_QA_ANSWER (state, index, id, answer) {
    console.log(index, id, answer)
    let _answer = ''
    if (answer === 0) {
      _answer = 'A'
    } else if (answer === 1) {
      _answer = 'B'
    } else if (answer === 2) {
      _answer = 'C'
    } else if (answer === 3) {
      _answer = 'D'
    }
    state.qaAnswer.$set(index, _answer)
  },
  // 更新答题结果
  UPDATE_RESULT (state, result) {
    state.qaResult.code = result.code
    state.qaResult.codestatus = result.codestatus
  },
  SET_QA_RULES_OPEN (state, status) {
    state.qaRulesOpen = status
  },
  SET_QA_SHARE_OPEN (state, status) {
    state.qaShareOpen = status
  },
  SET_QA_NOCHANCE_OPEN (state, status) {
    state.qaNoChanceOpen = status
  },
  SET_QA_CHANCE_NUM (state, number) {
    state.qaChanceNum = number
  },
  RESET_QA (state) {
    window.clearInterval(window.__qaCountDown)
    state.qaLoading = false
    state.qaId = 0
    state.qaProgress = -1
    state.qaRulesOpen = false
    state.qaShareOpen = false
    state.qaNoChanceOpen = false
    state.qaChanceNum = 0
    state.qaTime = 90
    state.qaList = []
    state.qaAnswer = ['', '', '', '', '', '', '', '', '', '']
    state.qaResult.codestatus = 0
    state.qaResult.code = ''
  },
  SET_KKJJ (state, status) {
    state.kkjj = status
  }
}

export default new Vuex.Store({
  modules: {},
  state,
  mutations
})
