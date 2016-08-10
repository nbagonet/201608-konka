<template lang="jade">
  section0
</template>

<style lang="less">
@import './App.less';
</style>

<script>
import store from './vuex/store'
import { closeLoading } from './vuex/actions.js'

import section0 from './components/section0'

export default {
  name: 'app',
  store,
  vuex: {
    getters: {},
    actions: {}
  },
  components: {
    section0
  },
  data: function () {
    return {}
  },
  ready: function () {
    // 关闭loading
    setTimeout(() => {
      closeLoading('.loading')
    }, 500)

    // 获取微信jssdk配置信息
    // getWXInfo(this)

    // let camera
    // let scene
    // let renderer
    // // var geometry, material, mesh
    // let target = new window.THREE.Vector3()
    //
    // let lon = 90
    // let lat = 0
    // let phi = 0
    // let theta = 0
    //
    // let touchX
    // let touchY
    //
    // function init () {
    //   camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
    //
    //   scene = new window.THREE.Scene()
    //
    //   var sides = [
    //     {
    //       url: 'textures/cube/Bridge2/posx.jpg',
    //       position: [ -512, 0, 0 ],
    //       rotation: [ 0, Math.PI / 2, 0 ]
    //     },
    //     {
    //       url: 'textures/cube/Bridge2/negx.jpg',
    //       position: [ 512, 0, 0 ],
    //       rotation: [ 0, -Math.PI / 2, 0 ]
    //     },
    //     {
    //       url: 'textures/cube/Bridge2/posy.jpg',
    //       position: [ 0, 512, 0 ],
    //       rotation: [ Math.PI / 2, 0, Math.PI ]
    //     },
    //     {
    //       url: 'textures/cube/Bridge2/negy.jpg',
    //       position: [ 0, -512, 0 ],
    //       rotation: [ -Math.PI / 2, 0, Math.PI ]
    //     },
    //     {
    //       url: 'textures/cube/Bridge2/posz.jpg',
    //       position: [ 0, 0, 512 ],
    //       rotation: [ 0, Math.PI, 0 ]
    //     },
    //     {
    //       url: 'textures/cube/Bridge2/negz.jpg',
    //       position: [ 0, 0, -512 ],
    //       rotation: [ 0, 0, 0 ]
    //     }
    //   ]
    //
    //   for (var i = 0; i < sides.length; i++) {
    //     var side = sides[i]
    //
    //     var element = document.createElement('img')
    //     element.width = 1026 // 2 pixels extra to close the gap.
    //     element.src = side.url
    //
    //     var object = new window.THREE.CSS3DObject(element)
    //     object.position.fromArray(side.position)
    //     object.rotation.fromArray(side.rotation)
    //     scene.add(object)
    //   }
    //
    //   renderer = new window.THREE.CSS3DRenderer()
    //   renderer.setSize(window.innerWidth, window.innerHeight)
    //   document.body.appendChild(renderer.domElement)
    //
    //   //
    //
    //   document.addEventListener('mousedown', onDocumentMouseDown, false)
    //   document.addEventListener('mousewheel', onDocumentMouseWheel, false)
    //
    //   document.addEventListener('touchstart', onDocumentTouchStart, false)
    //   document.addEventListener('touchmove', onDocumentTouchMove, false)
    //
    //   window.addEventListener('resize', onWindowResize, false)
    // }
    //
    // function onWindowResize () {
    //   camera.aspect = window.innerWidth / window.innerHeight
    //   camera.updateProjectionMatrix()
    //
    //   renderer.setSize(window.innerWidth, window.innerHeight)
    // }
    //
    // function onDocumentMouseDown (event) {
    //   event.preventDefault()
    //
    //   document.addEventListener('mousemove', onDocumentMouseMove, false)
    //   document.addEventListener('mouseup', onDocumentMouseUp, false)
    // }
    //
    // function onDocumentMouseMove (event) {
    //   var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0
    //   var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0
    //
    //   lon -= movementX * 0.1
    //   lat += movementY * 0.1
    // }
    //
    // function onDocumentMouseUp (event) {
    //   document.removeEventListener('mousemove', onDocumentMouseMove)
    //   document.removeEventListener('mouseup', onDocumentMouseUp)
    // }
    //
    // function onDocumentMouseWheel (event) {
    //   camera.fov -= event.wheelDeltaY * 0.05
    //   camera.updateProjectionMatrix()
    // }
    //
    // function onDocumentTouchStart (event) {
    //   event.preventDefault()
    //
    //   var touch = event.touches[ 0 ]
    //
    //   touchX = touch.screenX
    //   touchY = touch.screenY
    // }
    //
    // function onDocumentTouchMove (event) {
    //   event.preventDefault()
    //
    //   var touch = event.touches[0]
    //
    //   lon -= (touch.screenX - touchX) * 0.1
    //   lat += (touch.screenY - touchY) * 0.1
    //
    //   touchX = touch.screenX
    //   touchY = touch.screenY
    // }
    //
    // function animate () {
    //   window.requestAnimationFrame(animate)
    //
    //   lon += 0.1
    //   lat = Math.max(-85, Math.min(85, lat))
    //   phi = window.THREE.Math.degToRad(90 - lat)
    //   theta = window.THREE.Math.degToRad(lon)
    //
    //   target.x = Math.sin(phi) * Math.cos(theta)
    //   target.y = Math.cos(phi)
    //   target.z = Math.sin(phi) * Math.sin(theta)
    //
    //   camera.lookAt(target)
    //
    //   renderer.render(scene, camera)
    // }
    //
    // init()
    // animate()
  }
}
</script>
