<template lang="jade">
  section0(v-if='section === 0')
  section1(v-if='section === 1')
</template>

<style lang="less"></style>

<script>
import section0 from '../section0'
import section1 from '../section1'

export default {
  name: 'sections',
  vuex: {
    getters: {
      section: state => state.section
    },
    actions: {}
  },
  components: {
    section0,
    section1
  },
  data: function () {
    return {}
  },
  ready: function () {
    window.$('.loading').hide()
  }
}
</script>
