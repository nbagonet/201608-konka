<template lang="jade">
  #bgm
    audio#bgm-audio(src='../../../static/bgm.mp3' loop)
    .btn.play(v-show='isPlaying' @click='pause')
    .btn.pause(v-else @click='play')
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script>
export default {
  name: 'bgm',
  vuex: {
    getters: {
      autoPlay: state => state.BGMAutoPlay
    },
    actions: {}
  },
  components: {},
  data: function () {
    return {
      isPlaying: false
    }
  },
  methods: {
    play: function () {
      window.$('#bgm-audio')[0].play()
      this.$set('isPlaying', true)
    },
    pause: function () {
      window.$('#bgm-audio')[0].pause()
      this.$set('isPlaying', false)
    }
  },
  ready: function () {
    const _this = this

    if (this.autoPlay) {
      document.addEventListener('WeixinJSBridgeReady', function () {
        _this.play()
      })
      _this.play()
    }
  }
}
</script>
