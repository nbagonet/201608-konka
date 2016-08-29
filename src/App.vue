<template lang="jade">
  bgm
  sections
</template>

<style lang="less">
@import './App.less';
// @import './components/section2/index2.less';
</style>

<script>
import store from './vuex/store'
import { getWXInfo, setWXShare } from './vuex/actions.js'

export default {
  name: 'app',
  store,
  vuex: {
    getters: {},
    actions: { getWXInfo, setWXShare }
  },
  components: {
    bgm: (resolve) => {
      require(['./components/bgm'], resolve)
    },
    sections: (resolve) => {
      require(['./components/section'], resolve)
    }
  },
  data: function () {
    return {}
  },
  ready: function () {
    // 获取微信jssdk配置信息
    this.getWXInfo(this)
    this.setWXShare()
  }
}
</script>
