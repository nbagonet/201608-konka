<template lang="jade">
  #section2
</template>

<style lang="less">
@import './index2.less';
</style>

<script>
import { init } from '../../vuex/actions/section2-new'

export default {
  name: 'section2',
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
