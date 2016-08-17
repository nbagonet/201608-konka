<template lang="jade">
  #section2
    //- 康康&佳佳
    .kangkang-jiajia(v-show='kkjj' transition='fade')
      .kangkang
      .jiajia
      //- 歌词
      .lyrics
        - for(var i=0;i<=8;i++)
          div(class='lyrics-#{i}-0')
          div(class='lyrics-#{i}-1')

    //- 3D场景
    #s3D

    //- loading
    .qa-loading(v-show='qaLoading' transition='fade')
      .sk-circle
        - for(var i=1;i<=12;i++)
          div(class="sk-circle#{i} sk-child")
      .txt Loading...
</template>

<style lang="less">
@import './index2.less';
@import './sing.less';
@import './loading.less';
</style>

<script>
import { init } from '../../vuex/actions/section2-new'

export default {
  name: 'section2',
  vuex: {
    getters: {
      qaLoading: state => state.qaLoading,
      kkjj: state => state.kkjj
    },
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
