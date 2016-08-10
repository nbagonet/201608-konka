<template lang="jade">
  #section1
    //- 过场闪光
    #section1-light

    //- 背景
    #section1-bg

    //- 电视机
    - for(var i=0;i<3;i++)
      div(id='section1-tv#{i}')
        .screen
        .tv
        .land

    //- 文字
    #section1-txt0
    #section1-txt1
</template>

<style lang="less">
@import './index.less';
</style>

<script>
import { init } from '../../vuex/actions/section1'

export default {
  name: 'section1',
  vuex: {
    getters: {},
    actions: {
      init
    }
  },
  components: {},
  data: function () {
    return {}
  },
  ready: function () {
    this.init()
  }
}
</script>
