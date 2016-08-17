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
  SET_KKJJ (state, status) {
    state.kkjj = status
  }
}

export default new Vuex.Store({
  modules: {},
  state,
  mutations
})
