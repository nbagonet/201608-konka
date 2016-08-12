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
import Resource from 'vue-resource'
Vue.use(Resource)
Vue.http.options.emulateJSON = true

// jQuery
import $ from '../node_modules/jquery/dist/jquery.slim'
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

import App from './App'
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
