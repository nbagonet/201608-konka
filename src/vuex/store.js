import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  // 当前场景id
  section: 2,
  // 自动播放bgm
  BGMAutoPlay: false
}

const mutations = {
  // 改变当前场景id
  SET_SECTION_ID (state, id) {
    state.section = id
  }
}

export default new Vuex.Store({
  modules: {},
  state,
  mutations
})
