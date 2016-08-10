<template lang="jade">
  #section0
    //- 背景
    #section0-bg

    //- 轨迹
    #section0-tracks

    //- 星球
    - for(var i=0;i<9;i++)
      div(id='section0-plane#{i}')

    //- 人物
    - for(var i=0;i<2;i++)
      div(id='section0-people#{i}')

    //- UFO
    #section0-ufo
    #section0-ufo-light: #section0-ufo-light-inner

    //- 眼镜
    #section0-glass0
    #section0-glass1

    //- 文字
    #section0-txt0
    #section0-txt1

    //- 过场闪光
    #section0-light
</template>

<style lang="less">
@import './index.less';
</style>

<script>
import { init } from '../../vuex/actions/section0'

export default {
  name: 'section0',
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
