// Vue
import Vue from 'vue'
Vue.config.devtools = true
Vue.config.debug = true
if (!Vue.config.debug) {
  // console.log = function () {}
}

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// Vue-Resource
// import Resource from 'vue-resource'
// Vue.use(Resource)
// Vue.http.options.emulateJSON = true

// jQuery
import $ from '../node_modules/jquery/dist/jquery'
window.$ = $

// CSS Tween
// import CT from './plugin/csstween/csstween'
// window.CT = CT

// Three.js
// import THREE from 'three'
// window.THREE = THREE
// import { initTHREECSS3D } from './plugin/three/CSS3DRenderer'
// import { initDeviceOrientationControls } from './plugin/three/DeviceOrientationControls'
// initTHREECSS3D()
// initDeviceOrientationControls()

if (window.location.href.indexOf('localhost') !== -1 || window.location.href.indexOf('192.168.') !== -1 || window.location.href.indexOf('_debug=true') !== -1 || window.location.href.indexOf('github') !== -1) {
  window.localDebug = true
}
if (window.location.hostname.indexOf('201608konka.ovpp.cn') !== -1) {
  window.siteUrl = 'http://201608konka.ovpp.cn'
} else {
  window.siteUrl = 'http://201608konka.alltosun.net'
}

import App from './App'
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
