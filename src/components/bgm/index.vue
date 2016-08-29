<template lang="jade">
  #bgm(v-show='!kkjj')
    audio#bgm-audio(src='../../../static/bgm0.mp3' preload loop)
    //- audio#song-audio(src='../../../static/song.mp3' preload)
    .btn.play(@click='pause')
    .btn.pause(style="display:none" @click='play')
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script>
export default {
  name: 'bgm',
  vuex: {
    getters: {
      section: state => state.section,
      kkjj: state => state.kkjj
    },
    actions: {}
  },
  components: {},
  data: function () {
    return {}
  },
  methods: {
    play: function () {
      document.getElementById('bgm-audio').play()
      document.querySelector('.play').style.display = ''
      document.querySelector('.pause').style.display = 'none'
    },
    pause: function () {
      document.getElementById('bgm-audio').pause()
      document.querySelector('.play').style.display = 'none'
      document.querySelector('.pause').style.display = ''
    }
  },
  ready: function () {
    const _this = this
    // document.getElementById('bgm-audio').src = '../../../static/bgm0.mp3'
    document.addEventListener('WeixinJSBridgeReady', function () {
      _this.play()
    })
    _this.play()
  }
}
</script>
