<template lang="jade">
  #section2
    //- 康康&佳佳
    .kangkang-jiajia(v-show='kkjj' transition='fade')
      a.skip(@click='skipKKJJ') 跳过&gt;&gt;

      .kangkang
      .jiajia

      //- 走路
      .walk
      //- 扭腰
      .shake
      //- 摇旗
      .shakeflag
      //- 歌词
      .lyrics
        - for(var i=0;i<=8;i++)
          div(class='lyrics-#{i}-0')
          div(class='lyrics-#{i}-1')
      //- 玩法
      .rules(@click='skip')

    //- 3D场景
    #s3D(v-show='shows3D')

    //- loading
    .qa-loading(v-show='qaLoading')
      .sk-circle
        - for(var i=1;i<=12;i++)
          div(class="sk-circle#{i} sk-child")
      .txt Loading...

    //- 答题游戏
    qagame(v-if='qaId')
</template>

<style lang="less">
@import './index2.less';
@import './sing.less';
@import './loading.less';
</style>

<script>
import { init, skip, skipKKJJ } from '../../vuex/actions/section2-new'

export default {
  name: 'section2',
  vuex: {
    getters: {
      qaLoading: state => state.qaLoading,
      kkjj: state => state.kkjj,
      qaId: state => state.qaId,
      qaNoChanceOpen: state => state.qaNoChanceOpen,
      qaChanceNum: state => state.qaChanceNum
    },
    actions: {
      init,
      skip,
      skipKKJJ
    }
  },
  computed: {
    shows3D: function () {
      if (this.qaId === 0) {
        return true
      } else if (this.qaNoChanceOpen) {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    qagame: (resolve) => {
      require(['../qa'], resolve)
    }
  },
  data: function () {
    return {}
  },
  ready: function () {
    this.init()
  }
}
</script>
