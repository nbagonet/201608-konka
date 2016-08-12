const THREE = window.THREE
const $ = window.$
const _blank = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAAAAAApWe5zwAAAAF0Uk5TAEDm2GYAAAAMSURBVHjaYmAACDAAAAIAAU9tWeEAAAAASUVORK5CYII='

// const viewScale = 1
let _winSize = []
const updateWinSize = () => {
  // _winSize[0] = $(window).width() * viewScale + 1
  // _winSize[1] = $(window).height() * viewScale + 1
  _winSize[0] = $(window).width()
  _winSize[1] = _winSize[0] * (2611 / 739)
}
const _sqrt2 = Math.SQRT2

const init3D = () => {
  updateWinSize()

  const _halfWin = _winSize[0] / 2
  const _tbSize = _winSize[0] + _winSize[0] / _sqrt2 * 2

  let camera
  let scene
  let renderer
  // let controls
  const target = new THREE.Vector3()

  let lon = 245
  let lat = 0
  let phi = 0
  let theta = 0

  let touchX
  let touchY

  function init () {
    camera = new THREE.PerspectiveCamera(50, _winSize[0] / _winSize[1], 1, 1000)
    // controls = new THREE.DeviceOrientationControls(camera)
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
    const clouds = [{
      tag: '云-正前',
      name: 'cloud0',
      size: [ _winSize[0], _winSize[1] ],
      position: [ 0, 0, _halfWin ],
      rotation: [ 0, Math.PI, 0 ]
    }, {
      tag: '云-右前',
      name: 'cloud1',
      size: [ _winSize[0], _winSize[1] ],
      position: [ -_halfWin - _halfWin / _sqrt2, 0, _halfWin - _halfWin / _sqrt2 ],
      rotation: [ 0, Math.PI / (180 / 135), 0 ]
    }, {
      tag: '云-正右',
      name: 'cloud2',
      size: [ _winSize[0], _winSize[1] ],
      position: [ -_halfWin - _winSize[0] / _sqrt2, 0, -_winSize[0] / _sqrt2 ],
      rotation: [ 0, Math.PI / (180 / 90), 0 ]
    }, {
      tag: '云-右后',
      name: 'cloud3',
      size: [ _winSize[0], _winSize[1] ],
      position: [ -_halfWin - _halfWin / _sqrt2, 0, _halfWin - _halfWin / _sqrt2 - _winSize[0] / _sqrt2 - _winSize[0] ],
      rotation: [ 0, Math.PI / (180 / 45), 0 ]
    }, {
      tag: '云-正后',
      name: 'cloud4',
      size: [ _winSize[0], _winSize[1] ],
      position: [ 0, 0, -_halfWin - _winSize[0] / _sqrt2 * 2 ],
      rotation: [ 0, 0, 0 ]
    }, {
      tag: '云-左后',
      name: 'cloud5',
      size: [ _winSize[0], _winSize[1] ],
      position: [ _halfWin + _halfWin / _sqrt2, 0, _halfWin - _halfWin / _sqrt2 - _winSize[0] / _sqrt2 - _winSize[0] ],
      rotation: [ 0, -Math.PI / (180 / 45), 0 ]
    }, {
      tag: '云-正左',
      name: 'cloud6',
      size: [ _winSize[0], _winSize[1] ],
      position: [ _halfWin + _winSize[0] / _sqrt2, 0, -_winSize[0] / _sqrt2 ],
      rotation: [ 0, -Math.PI / (180 / 90), 0 ]
    }, {
      tag: '云-左前',
      name: 'cloud7',
      size: [ _winSize[0], _winSize[1] ],
      position: [ _halfWin + _halfWin / _sqrt2, 0, _halfWin - _halfWin / _sqrt2 ],
      rotation: [ 0, -Math.PI / (180 / 135), 0 ]
    }]
    for (var j = 0; j < clouds.length; j++) {
      let cloud = clouds[j]
      let cloudElm = document.createElement('img')
      cloudElm.width = cloud.size[0] + 2
      cloudElm.height = cloud.size[1] + 2
      cloudElm.src = _blank
      cloudElm.setAttribute('data-tag', cloud.tag)
      cloudElm.className = cloud.name

      let cloudObj = new THREE.CSS3DObject(cloudElm)
      cloudObj.position.fromArray(cloud.position)
      cloudObj.rotation.fromArray(cloud.rotation)
      // scene.add(cloudObj)
    }
    // 云彩 end

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

    // 移动相关事件 begin
    $(document).on('mousedown', function (event) {
      onDocumentMouseDown(event)
    }).on('touchstart', function (event) {
      onDocumentTouchStart(event)
    }).on('touchmove', function (event) {
      onDocumentTouchMove(event)
    })
    // 移动相关事件 end
  }

  function onWindowResize () {
    updateWinSize()

    camera.aspect = _winSize[0] / _winSize[1]
    camera.updateProjectionMatrix()

    renderer.setSize(_winSize[0], _winSize[1])
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

  function animate () {
    window.requestAnimationFrame(animate)

    lon += 0
    lat = Math.max(-90, Math.min(90, lat))
    phi = THREE.Math.degToRad(90 - lat)
    theta = THREE.Math.degToRad(lon)

    target.x = Math.sin(phi) * Math.cos(theta)
    target.y = Math.cos(phi)
    target.z = Math.sin(phi) * Math.sin(theta)

    camera.lookAt(target)
    // controls.update(camera)

    renderer.render(scene, camera)
  }

  init()
  animate()
}

export const init = ({ dispatch, state }) => {
  // 初始化3D场景
  init3D()
}
