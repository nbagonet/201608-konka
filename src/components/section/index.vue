<template lang="jade">
  section0(v-if='section === 0')
  section1(v-if='section === 1' transition='fade')
  section2(v-if='section === 2' transition='fade')
</template>

<style lang="less"></style>

<script>
import section0 from '../section0'
import section1 from '../section1'
import section2 from '../section2'

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
    section1,
    section2
  },
  data: function () {
    return {}
  },
  ready: function () {
    window.$('.loading').hide()
  }
}
</script>
