const THREE = window.THREE
const $ = window.$

// const K3DObj = function () {
//   // 场景容器id
//   this.tarObjId = 'section2'
//
//   // 空白图片
//   this.blankPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAAAAAApWe5zwAAAAF0Uk5TAEDm2GYAAAAMSURBVHjaYmAACDAAAAIAAU9tWeEAAAAASUVORK5CYII='
//
//   // 渲染器尺寸（一般与窗口可视区域尺寸一致）
//   this.renderSize = {
//     w: $(window).width(),
//     h: $(window).height(),
//     update: function () {
//       this.w = $(window).width()
//       this.h = $(window).height()
//     }
//   }
//
//   // 盒子尺寸
//   this.boxSize = {
//     side: {
//       w: $(window).width() / 2,
//       h: $(window).width() / 2 * (2611 / 739) / 2
//     },
//     tb: {
//       w: ($(window).width() / 2) + ($(window).width() / 2) / Math.SQRT2 * 2,
//       h: ($(window).width() / 2) + ($(window).width() / 2) / Math.SQRT2 * 2
//     },
//     update: function () {
//       this.w = $(window).width() / 2
//       this.h = $(window).width() / 2 * (2611 / 739) / 2
//     }
//   }
//
//   // 镜头
//   this.camera = null
//   // 场景
//   this.scene = null
//   // 渲染器
//   this.renderer = null
//   // 控制器
//   this.controls = null
//   // 镜头朝向目标向量
//   this.target = new THREE.Vector3()
//   // 初始视角
//   this.lon = 90
//   this.lat = 0
//   this.phi = 0
//   this.theta = 0
//   // touche坐标
//   this.touchX = null
//   this.touchY = null
//
//   // 入场旋转加速度，越大转的越快
//   this.enterAcc = 30
//   // 入场旋转结束的速度点，需大于enterAcc
//   this.enterEndAcc = 1000
//   // 入场旋转结束时的减速度，越大减速用时越短
//   this.enterEndSpeed = 0.125
//
//   // 元件数据
//   this.items = [
//     {
//       tag: '正前',
//       name: 'bg0',
//       size: [ this.boxSize.side.w, this.boxSize.side.h ],
//       position: [ 0, 0, this.boxSize.side.w / 2 ],
//       rotation: [ 0, Math.PI, 0 ]
//     },
//     {
//       tag: '右前',
//       name: 'bg1',
//       size: [ this.boxSize.side.w, this.boxSize.side.h ],
//       position: [ -this.boxSize.side.w / 2 - this.boxSize.side.w / 2 / Math.SQRT2, 0, this.boxSize.side.w / 2 - this.boxSize.side.w / 2 / Math.SQRT2 ],
//       rotation: [ 0, Math.PI / (180 / 135), 0 ]
//     }
//   ]
//
//   // 初始化场景并渲染
//   this.initRenderder = function () {
//     const _this = this
//
//     // 初始化镜头
//     _this.camera = new THREE.PerspectiveCamera(125, _this.renderSize.w / _this.renderSize.h, 1, 1000)
//
//     // 初始化场景
//     _this.scene = new THREE.Scene()
//
//     // 将元件放入场景
//     _this.items.forEach(function (item) {
//       const _itemElm = document.createElement('img')
//       _itemElm.width = item.size[0] + 1 // 防止接缝不严
//       _itemElm.height = item.size[1]
//       _itemElm.src = _this.blankPic
//       _itemElm.setAttribute('data-tag', item.tag)
//       _itemElm.className = item.name
//
//       const _itemObj = new THREE.CSS3DObject(_itemElm)
//       _itemObj.position.fromArray(item.position)
//       _itemObj.rotation.fromArray(item.rotation)
//       _this.scene.add(_itemObj)
//     })
//
//     // 渲染场景
//     _this.renderer = new THREE.CSS3DRenderer()
//     _this.renderer.setSize(_this.renderSize.w, _this.renderSize.h)
//     document.getElementById(_this.tarObjId).appendChild(_this.renderer.domElement)
//
//     _this.clacTarget()
//     _this.camera.lookAt(_this.target)
//     _this.renderer.render(_this.scene, _this.camera)
//
//     // 入场旋转
//     _this.enterRotationAni()
//   }
//
//   // 计算camera.lookAt的target
//   this.clacTarget = function () {
//     const _this = this
//
//     _this.lat = Math.max(-90, Math.min(90, _this.lat))
//     _this.phi = THREE.Math.degToRad(90 - _this.lat)
//     _this.theta = THREE.Math.degToRad(_this.lon)
//
//     _this.target.x = Math.sin(_this.phi) * Math.cos(_this.theta)
//     _this.target.y = Math.cos(_this.phi)
//     _this.target.z = Math.sin(_this.phi) * Math.sin(_this.theta)
//   }
//
//   // 入场旋转
//   this.enterRotationAni = function () {
//     const _this = this
//
//     _this.lon += _this.enterAcc
//     _this.clacTarget()
//
//     // window.requestAnimationFrame(_this.enterRotationAni)
//
//     _this.camera.lookAt(_this.target)
//     _this.renderer.render(_this.scene, _this.camera)
//   }
// }
// console.log(K3DObj)

const _blank = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAAAAAApWe5zwAAAAF0Uk5TAEDm2GYAAAAMSURBVHjaYmAACDAAAAIAAU9tWeEAAAAASUVORK5CYII='

/**
 * 3D场景相关 begin
 */
let _winSize = []
const updateWinSize = () => {
  _winSize[0] = $(window).width() / 2
  _winSize[1] = _winSize[0] * (2611 / 739) / 2
}
const _sqrt2 = Math.SQRT2

const init3D = () => {
  updateWinSize()

  const _halfWin = _winSize[0] / 2
  const _tbSize = _winSize[0] + _winSize[0] / _sqrt2 * 2

  let camera
  let scene
  let renderer
  let controls
  const target = new THREE.Vector3()

  let lon = 190
  let lat = 0
  let phi = 0
  let theta = 0

  let touchX
  let touchY

  function init () {
    camera = new THREE.PerspectiveCamera(125, $(window).width() / $(window).height(), 1, 1000)
    controls = new THREE.DeviceOrientationControls(camera)
    scene = new THREE.Scene()

    // 背景 begin
    const sides = [{
      tag: '正前',
      name: 'bg0',
      size: [ _winSize[0], _winSize[1] ],
      position: [ 0, 0, _halfWin ],
      rotation: [ 0, Math.PI, 0 ]
    }, {
      tag: '右前',
      name: 'bg1',
      size: [ _winSize[0], _winSize[1] ],
      position: [ -_halfWin - _halfWin / _sqrt2, 0, _halfWin - _halfWin / _sqrt2 ],
      rotation: [ 0, Math.PI / (180 / 135), 0 ]
    }, {
      tag: '正右',
      name: 'bg2',
      size: [ _winSize[0], _winSize[1] ],
      position: [ -_halfWin - _winSize[0] / _sqrt2, 0, -_winSize[0] / _sqrt2 ],
      rotation: [ 0, Math.PI / (180 / 90), 0 ]
    }, {
      tag: '右后',
      name: 'bg3',
      size: [ _winSize[0], _winSize[1] ],
      position: [ -_halfWin - _halfWin / _sqrt2, 0, _halfWin - _halfWin / _sqrt2 - _winSize[0] / _sqrt2 - _winSize[0] ],
      rotation: [ 0, Math.PI / (180 / 45), 0 ]
    }, {
      tag: '正后',
      name: 'bg4',
      size: [ _winSize[0], _winSize[1] ],
      position: [ 0, 0, -_halfWin - _winSize[0] / _sqrt2 * 2 ],
      rotation: [ 0, 0, 0 ]
    }, {
      tag: '左后',
      name: 'bg5',
      size: [ _winSize[0], _winSize[1] ],
      position: [ _halfWin + _halfWin / _sqrt2, 0, _halfWin - _halfWin / _sqrt2 - _winSize[0] / _sqrt2 - _winSize[0] ],
      rotation: [ 0, -Math.PI / (180 / 45), 0 ]
    }, {
      tag: '正左',
      name: 'bg6',
      size: [ _winSize[0], _winSize[1] ],
      position: [ _halfWin + _winSize[0] / _sqrt2, 0, -_winSize[0] / _sqrt2 ],
      rotation: [ 0, -Math.PI / (180 / 90), 0 ]
    }, {
      tag: '左前',
      name: 'bg7',
      size: [ _winSize[0], _winSize[1] ],
      position: [ _halfWin + _halfWin / _sqrt2, 0, _halfWin - _halfWin / _sqrt2 ],
      rotation: [ 0, -Math.PI / (180 / 135), 0 ]
    }, {
      tag: '正上',
      name: 'bg8',
      size: [ _tbSize, _tbSize ],
      position: [ 0, _winSize[1] / 2, -_winSize[0] / _sqrt2 ],
      rotation: [ Math.PI / 2, 0, Math.PI ]
    }, {
      tag: '正下',
      name: 'bg9',
      size: [ _tbSize, _tbSize ],
      position: [ 0, -_winSize[1] / 2, -_winSize[0] / _sqrt2 ],
      rotation: [ -Math.PI / 2, 0, Math.PI ]
    }]
    for (var i = 0; i < sides.length; i++) {
      let side = sides[i]
      let element = document.createElement('img')
      element.width = side.size[0] + 1
      element.height = side.size[1] + 1
      element.src = _blank
      element.setAttribute('data-tag', side.tag)
      element.className = side.name

      let object = new THREE.CSS3DObject(element)
      object.position.fromArray(side.position)
      object.rotation.fromArray(side.rotation)
      scene.add(object)
    }
    // 背景 end

    // 云彩 begin
    const cloudSize = [ _winSize[0] * 0.7, _winSize[1] ]
    const halfCloudWidth = _halfWin * 0.7
    const clouds = [{
      tag: '云-正前',
      name: 'cloud0',
      size: [ cloudSize[0], _winSize[1] ],
      position: [ 0, 0, halfCloudWidth ],
      rotation: [ 0, Math.PI, 0 ]
    }, {
      tag: '云-右前',
      name: 'cloud1',
      size: [ cloudSize[0], _winSize[1] ],
      position: [ -halfCloudWidth - halfCloudWidth / _sqrt2, 0, halfCloudWidth - halfCloudWidth / _sqrt2 ],
      rotation: [ 0, Math.PI / (180 / 135), 0 ]
    }, {
      tag: '云-正右',
      name: 'cloud2',
      size: [ cloudSize[0], _winSize[1] ],
      position: [ -halfCloudWidth - cloudSize[0] / _sqrt2, 0, -cloudSize[0] / _sqrt2 ],
      rotation: [ 0, Math.PI / (180 / 90), 0 ]
    }, {
      tag: '云-右后',
      name: 'cloud3',
      size: [ cloudSize[0], _winSize[1] ],
      position: [ -halfCloudWidth - halfCloudWidth / _sqrt2, 0, halfCloudWidth - halfCloudWidth / _sqrt2 - cloudSize[0] / _sqrt2 - cloudSize[0] ],
      rotation: [ 0, Math.PI / (180 / 45), 0 ]
    }, {
      tag: '云-正后',
      name: 'cloud4',
      size: [ cloudSize[0], _winSize[1] ],
      position: [ 0, 0, -halfCloudWidth - cloudSize[0] / _sqrt2 * 2 ],
      rotation: [ 0, 0, 0 ]
    }, {
      tag: '云-左后',
      name: 'cloud5',
      size: [ cloudSize[0], _winSize[1] ],
      position: [ halfCloudWidth + halfCloudWidth / _sqrt2, 0, halfCloudWidth - halfCloudWidth / _sqrt2 - cloudSize[0] / _sqrt2 - cloudSize[0] ],
      rotation: [ 0, -Math.PI / (180 / 45), 0 ]
    }, {
      tag: '云-正左',
      name: 'cloud6',
      size: [ cloudSize[0], _winSize[1] ],
      position: [ halfCloudWidth + cloudSize[0] / _sqrt2, 0, -cloudSize[0] / _sqrt2 ],
      rotation: [ 0, -Math.PI / (180 / 90), 0 ]
    }, {
      tag: '云-左前',
      name: 'cloud7',
      size: [ cloudSize[0], _winSize[1] ],
      position: [ halfCloudWidth + halfCloudWidth / _sqrt2, 0, halfCloudWidth - halfCloudWidth / _sqrt2 ],
      rotation: [ 0, -Math.PI / (180 / 135), 0 ]
    }]
    for (var j = 0; j < clouds.length; j++) {
      let cloud = clouds[j]
      let cloudElm = document.createElement('img')
      cloudElm.width = cloud.size[0] + 1
      cloudElm.height = cloud.size[1] + 0
      cloudElm.src = _blank
      cloudElm.setAttribute('data-tag', cloud.tag)
      cloudElm.className = cloud.name

      let cloudObj = new THREE.CSS3DObject(cloudElm)
      cloudObj.position.fromArray(cloud.position)
      cloudObj.rotation.fromArray(cloud.rotation)
      scene.add(cloudObj)
    }
    // 云彩 end

    // 项目 begin
    const _items = [
      {
        tag: '体操-女-背景',
        name: 'item0-0',
        size: [ cloudSize[0] * 1.2, cloudSize[0] * 1.2 * 1986 / 1753 ],
        position: [ halfCloudWidth * 0.9 + cloudSize[0] * 0.9 / _sqrt2 + 20, 0, -cloudSize[0] * 0.9 / _sqrt2 + 20 ],
        rotation: [ 0, -Math.PI / (180 / 75), 0 ]
      }, {
        tag: '体操-女-人',
        name: 'item0-1',
        size: [ cloudSize[0] * 1.2, cloudSize[0] * 1.2 * 1986 / 1753 ],
        position: [ halfCloudWidth * 0.85 + cloudSize[0] * 0.85 / _sqrt2 + 20, 0, -cloudSize[0] * 0.85 / _sqrt2 + 20 ],
        rotation: [ 0, -Math.PI / (180 / 75), 0 ]
      }, {
        tag: '体操-男-0',
        name: 'item1-0',
        size: [ cloudSize[0] * 0.75, cloudSize[1] * 0.75 ],
        position: [ -halfCloudWidth * 0.75 - cloudSize[0] * 0.75 / _sqrt2, 0, -cloudSize[0] * 0.75 / _sqrt2 ],
        rotation: [ 0, Math.PI / (180 / 90), 0 ]
      }, {
        tag: '体操-男-1',
        name: 'item1-1',
        size: [ cloudSize[0] * 0.75, cloudSize[1] * 0.75 ],
        position: [ -halfCloudWidth * 0.75 - halfCloudWidth * 0.75 / _sqrt2, 0, halfCloudWidth * 0.75 - halfCloudWidth * 0.75 / _sqrt2 - cloudSize[0] * 0.75 / _sqrt2 - cloudSize[0] * 0.75 ],
        rotation: [ 0, Math.PI / (180 / 45), 0 ]
      }, {
        tag: '体操-男-2',
        name: 'item1-2',
        size: [ cloudSize[0] * 0.75, cloudSize[1] * 0.75 ],
        position: [ 0, 0, -halfCloudWidth * 0.75 - cloudSize[0] * 0.75 / _sqrt2 * 2 ],
        rotation: [ 0, 0, 0 ]
      }, {
        tag: '体操-男-3',
        name: 'item1-3',
        size: [ cloudSize[0] * 0.75, cloudSize[1] * 0.75 ],
        position: [ halfCloudWidth * 0.75 + halfCloudWidth * 0.75 / _sqrt2, 0, halfCloudWidth * 0.75 - halfCloudWidth * 0.75 / _sqrt2 - cloudSize[0] * 0.75 / _sqrt2 - cloudSize[0] * 0.75 ],
        rotation: [ 0, -Math.PI / (180 / 45), 0 ]
      }, {
        tag: '击剑&乒乓球',
        name: 'item2',
        size: [ cloudSize[1] * 0.72, _winSize[1] * 0.72 ],
        position: [ -halfCloudWidth * 0.65, 0, -halfCloudWidth * 0.55 - cloudSize[0] * 0.55 / _sqrt2 * 2 ],
        rotation: [ 0, Math.PI / (180 / 18), 0 ]
      }, {
        tag: '乒乓球',
        name: 'item4',
        size: [ cloudSize[1] * 0.5, _winSize[1] ],
        position: [ halfCloudWidth * 0.5, 0, -halfCloudWidth * 0.5 - cloudSize[0] * 0.5 / _sqrt2 * 2 ],
        rotation: [ 0, -Math.PI / (180 / 12.5), 0 ]
      }, {
        tag: '射击&举重',
        name: 'item3',
        size: [ cloudSize[0] * 0.7 * 1.5, cloudSize[1] * 0.7 ],
        position: [ -halfCloudWidth * 0.7 - cloudSize[0] * 0.7 / _sqrt2 + halfCloudWidth * 0.65, 0, -cloudSize[0] * 0.7 / _sqrt2 + halfCloudWidth ],
        rotation: [ 0, Math.PI / (180 / 110), 0 ]
      }, {
        tag: '羽毛球',
        name: 'item5',
        size: [ cloudSize[0], cloudSize[1] ],
        position: [ halfCloudWidth * 0.65 + cloudSize[0] * 0.65 / _sqrt2, 0, -cloudSize[0] * 0.65 / _sqrt2 ],
        rotation: [ 0, -Math.PI / (180 / 75), 0 ]
      }, {
        tag: '鹦鹉',
        name: 'item6',
        size: [ cloudSize[0] * 0.6, cloudSize[1] * 0.7 ],
        position: [ -halfCloudWidth * 1.2, 0, -halfCloudWidth * 0.65 - cloudSize[0] * 0.5 / _sqrt2 ],
        rotation: [ 0, Math.PI / (180 / 85), 0 ]
      }, {
        tag: '游泳',
        name: 'item7',
        size: [ cloudSize[0] * 0.72, cloudSize[1] ],
        position: [ halfCloudWidth * 0.3, 0, -halfCloudWidth * 0.35 - cloudSize[0] * 0.35 / _sqrt2 * 2 ],
        rotation: [ 0, Math.PI / (180 / 10), 0 ]
      }
    ]
    for (var _i0 = 0; _i0 < _items.length; _i0++) {
      const _item = _items[_i0]
      const _itemElm = document.createElement('img')
      _itemElm.width = _item.size[0] + 1
      _itemElm.height = _item.size[1] + 0
      _itemElm.src = _blank
      _itemElm.setAttribute('data-tag', _item.tag)
      _itemElm.className = _item.name

      const _itemObj = new THREE.CSS3DObject(_itemElm)
      _itemObj.position.fromArray(_item.position)
      _itemObj.rotation.fromArray(_item.rotation)
      scene.add(_itemObj)
    }
    // 项目 end

    // 渲染 begin
    renderer = new THREE.CSS3DRenderer()
    // renderer.setSize(_winSize[0], _winSize[1])
    renderer.setSize($(window).width(), $(window).height())
    document.getElementById('section2').appendChild(renderer.domElement)
    // 渲染 end

    // 窗口尺寸改变 begin
    $(window).on('resize', function (event) {
      onWindowResize()
    })
    // 窗口尺寸改变 end
  }

  function onWindowResize () {
    updateWinSize()

    camera.aspect = $(window).width() / $(window).height()
    camera.updateProjectionMatrix()

    renderer.setSize($(window).width(), $(window).height())
  }

  function onDocumentMouseDown (event) {
    event.preventDefault()

    $(document).on('mousemove', function (event) {
      onDocumentMouseMove(event)
    }).on('mouseup', function (event) {
      onDocumentMouseUp(event)
    })
  }

  function onDocumentMouseMove (event) {
    let movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0
    let movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0

    lon -= movementX * 0.1
    lat += movementY * 0.1
  }

  function onDocumentMouseUp (event) {
    $(document).off('mousemove mouseup')
  }

  function onDocumentTouchStart (event) {
    event.preventDefault()

    const touch = event.touches[0]

    touchX = touch.screenX
    touchY = touch.screenY
  }

  function onDocumentTouchMove (event) {
    event.preventDefault()

    const touch = event.touches[0]

    lon -= (touch.screenX - touchX) * 0.1
    lat += (touch.screenY - touchY) * 0.1

    touchX = touch.screenX
    touchY = touch.screenY
  }

  // ========== begin
  let _lon = 40
  function animate () {
    lon += _lon
    lat = Math.max(-90, Math.min(90, lat))
    phi = THREE.Math.degToRad(90 - lat)
    theta = THREE.Math.degToRad(lon)

    if (lon < 100) {
      window.requestAnimationFrame(animate)
    } else {
      window.requestAnimationFrame(animate2)
    }

    target.x = Math.sin(phi) * Math.cos(theta)
    target.y = Math.cos(phi)
    target.z = Math.sin(phi) * Math.sin(theta)

    camera.lookAt(target)

    renderer.render(scene, camera)
  }

  function animate2 () {
    if (_lon > 0) {
      _lon = _lon - 0.2
    } else {
      _lon = 0
    }
    lon += _lon
    lat = Math.max(-90, Math.min(90, lat))
    phi = THREE.Math.degToRad(90 - lat)
    theta = THREE.Math.degToRad(lon)

    window.requestAnimationFrame(animate2)

    target.x = Math.sin(phi) * Math.cos(theta)
    target.y = Math.cos(phi)
    target.z = Math.sin(phi) * Math.sin(theta)

    camera.lookAt(target)

    if (_lon <= 0) {
      // 移动相关事件 begin
      $(document).on('mousedown', function (event) {
        onDocumentMouseDown(event)
      }).on('touchstart', function (event) {
        onDocumentTouchStart(event)
      }).on('touchmove', function (event) {
        onDocumentTouchMove(event)
      })
      // 移动相关事件 end

      // controls.update(camera)
    }

    renderer.render(scene, camera)
  }
  // ========== end

  init()
  animate()
  console.log(controls)
}
/**
 * 3D场景相关 end
 */

export const init = ({ dispatch, state }) => {
  // 初始化3D场景
  init3D()
  // const test = new K3DObj()
  // test.initRenderder()
}
