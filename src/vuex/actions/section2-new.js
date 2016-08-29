import store from '../store.js'

const THREE = window.THREE
const $ = window.$

const _blank = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAAAAAApWe5zwAAAAF0Uk5TAEDm2GYAAAAMSURBVHjaYmAACDAAAAIAAU9tWeEAAAAASUVORK5CYII='

/**
 * 3D场景相关 begin
 */
let _winSize = []
const updateWinSize = () => {
  _winSize[0] = $(window).width()
  _winSize[1] = $(window).height()
}
// const _sqrt2 = Math.SQRT2

export const init3D = () => {
  updateWinSize()

  let camera
  let scene
  let renderer
  let controls
  // const target = new THREE.Vector3()

  // let lon = 245
  // let lat = 5
  // let phi = 0
  // let theta = 0

  // let touchX
  // let touchY

  function init () {
    camera = new THREE.PerspectiveCamera(100, $(window).width() / $(window).height(), 1, 1000)
    controls = new THREE.DeviceOrientationControls(camera)
    scene = new THREE.Scene()

    // 场景元件 begin
    // 元件宽度
    const itemWidth = _winSize[1] * (297 / 2611)
    // 元件高度
    const itemHeight = _winSize[1]
    // 类圆柱正多边形边数
    const itemNum = 20
    // 类圆柱正多边形边心距
    const itemDistance = function (width) {
      return width / 2 / Math.tan(180 / itemNum * 0.017453293)
    }

    /**
     * 计算栅格偏移
     * @param {number} n 栅格总数
     * @param {number} h 边心距
     * @param {number} k 栅格索引值，从0开始
     */
    const calcOffset = function (n, h, k) {
      let x = 0
      let y = 0
      let z = 0
      let r = 0

      const a = 2 * Math.PI / n
      r = -Math.PI / (180 / (180 - 360 / itemNum * (k + 1)))

      x = h * Math.sin(a * (k + 1))
      y = h * 0.15
      z = h * Math.cos(a * (k + 1))

      return {
        idx: k,
        x: x,
        y: y,
        z: z,
        r: r
      }
    }

    const items = []
    for (let j = 0; j < itemNum; j++) {
      // 背景 begin
      let bgWidth = itemWidth * 1.0
      let bgItemDistance = itemDistance(bgWidth)
      let bg = {
        tag: '背景' + -(j - itemNum),
        name: 'bg_' + -(j - itemNum),
        size: [ bgWidth, itemHeight ],
        position: [ calcOffset(itemNum, bgItemDistance, j).x, calcOffset(itemNum, bgItemDistance, j).y, calcOffset(itemNum, bgItemDistance, j).z ],
        rotation: [ 0, calcOffset(itemNum, bgItemDistance, j).r, 0 ]
      }
      items.push(bg)
      // 背景 end
      // // 项目0 begin
      // if (-(j - itemNum) >= 14 && -(j - itemNum) <= 20) {
      //   let x0Width = itemWidth * 0.90
      //   let x0ItemDistance = itemDistance(x0Width)
      //   let x0 = {
      //     tag: '项目0_' + -(j - itemNum),
      //     name: 'x0_' + -(j - itemNum),
      //     size: [ x0Width, itemHeight ],
      //     position: [ calcOffset(itemNum, x0ItemDistance, j).x, calcOffset(itemNum, x0ItemDistance, j).y, calcOffset(itemNum, x0ItemDistance, j).z ],
      //     rotation: [ 0, calcOffset(itemNum, x0ItemDistance, j).r, 0 ]
      //   }
      //   items.push(x0)
      // }
      // // 项目0 end
      // // 项目1 begin
      // if (-(j - itemNum) >= 4 && -(j - itemNum) <= 17) {
      //   let x1Width = itemWidth * 0.85
      //   let x1ItemDistance = itemDistance(x1Width)
      //   let x1 = {
      //     tag: '项目1_' + -(j - itemNum),
      //     name: 'x1_' + -(j - itemNum),
      //     size: [ x1Width, itemHeight ],
      //     position: [ calcOffset(itemNum, x1ItemDistance, j).x, calcOffset(itemNum, x1ItemDistance, j).y, calcOffset(itemNum, x1ItemDistance, j).z ],
      //     rotation: [ 0, calcOffset(itemNum, x1ItemDistance, j).r, 0 ]
      //   }
      //   items.push(x1)
      // }
      // // 项目1 end
      // // 项目2 begin
      // if (-(j - itemNum) >= 6 && -(j - itemNum) <= 15) {
      //   let x2Width = itemWidth * 0.8
      //   let x2ItemDistance = itemDistance(x2Width)
      //   let x2 = {
      //     tag: '项目2_' + -(j - itemNum),
      //     name: 'x2_' + -(j - itemNum),
      //     size: [ x2Width, itemHeight ],
      //     position: [ calcOffset(itemNum, x2ItemDistance, j).x, calcOffset(itemNum, x2ItemDistance, j).y, calcOffset(itemNum, x2ItemDistance, j).z ],
      //     rotation: [ 0, calcOffset(itemNum, x2ItemDistance, j).r, 0 ]
      //   }
      //   items.push(x2)
      // }
      // // 项目2 end
      // // 项目3 begin
      // if (-(j - itemNum) >= 0 && -(j - itemNum) <= 8) {
      //   let x3Width = itemWidth * 0.95
      //   let x3ItemDistance = itemDistance(x3Width)
      //   let x3 = {
      //     tag: '项目3_' + -(j - itemNum),
      //     name: 'x3_' + -(j - itemNum),
      //     size: [ x3Width, itemHeight ],
      //     position: [ calcOffset(itemNum, x3ItemDistance, j).x, calcOffset(itemNum, x3ItemDistance, j).y, calcOffset(itemNum, x3ItemDistance, j).z ],
      //     rotation: [ 0, calcOffset(itemNum, x3ItemDistance, j).r, 0 ]
      //   }
      //   items.push(x3)
      // }
      // // 项目3 end
      // // 项目4 begin
      // if (-(j - itemNum) >= 3 && -(j - itemNum) <= 8) {
      //   let x4Width = itemWidth * 0.80
      //   let x4ItemDistance = itemDistance(x4Width)
      //   let x4 = {
      //     tag: '项目4_' + -(j - itemNum),
      //     name: 'x4_' + -(j - itemNum),
      //     size: [ x4Width, itemHeight ],
      //     position: [ calcOffset(itemNum, x4ItemDistance, j).x, calcOffset(itemNum, x4ItemDistance, j).y, calcOffset(itemNum, x4ItemDistance, j).z ],
      //     rotation: [ 0, calcOffset(itemNum, x4ItemDistance, j).r, 0 ]
      //   }
      //   items.push(x4)
      // }
      // // 项目4 end
      // // 项目5 begin
      // if (-(j - itemNum) >= 1 && -(j - itemNum) <= 9) {
      //   let x5Width = itemWidth * 0.75
      //   let x5ItemDistance = itemDistance(x5Width)
      //   let x5 = {
      //     tag: '项目5_' + -(j - itemNum),
      //     name: 'x5_' + -(j - itemNum),
      //     size: [ x5Width, itemHeight ],
      //     position: [ calcOffset(itemNum, x5ItemDistance, j).x, calcOffset(itemNum, x5ItemDistance, j).y, calcOffset(itemNum, x5ItemDistance, j).z ],
      //     rotation: [ 0, calcOffset(itemNum, x5ItemDistance, j).r, 0 ]
      //   }
      //   items.push(x5)
      // }
      // // 项目5 end
      // // 项目6 begin
      // if ((-(j - itemNum) >= 6 && -(j - itemNum) <= 10) || (-(j - itemNum) >= 12 && -(j - itemNum) <= 19)) {
      //   let x6Width = itemWidth * 0.65
      //   let x6ItemDistance = itemDistance(x6Width)
      //   let x6 = {
      //     tag: '项目6_' + -(j - itemNum),
      //     name: 'x6_' + -(j - itemNum),
      //     size: [ x6Width, itemHeight ],
      //     position: [ calcOffset(itemNum, x6ItemDistance, j).x, calcOffset(itemNum, x6ItemDistance, j).y, calcOffset(itemNum, x6ItemDistance, j).z ],
      //     rotation: [ 0, calcOffset(itemNum, x6ItemDistance, j).r, 0 ]
      //   }
      //   items.push(x6)
      // }
      // // 项目6 end
      // // 项目6 begin
      // if (-(j - itemNum) >= 10 && -(j - itemNum) <= 17) {
      //   let x7Width = itemWidth * 0.60
      //   let x7ItemDistance = itemDistance(x7Width)
      //   let x7 = {
      //     tag: '项目7_' + -(j - itemNum),
      //     name: 'x7_' + -(j - itemNum),
      //     size: [ x7Width, itemHeight ],
      //     position: [ calcOffset(itemNum, x7ItemDistance, j).x, calcOffset(itemNum, x7ItemDistance, j).y, calcOffset(itemNum, x7ItemDistance, j).z ],
      //     rotation: [ 0, calcOffset(itemNum, x7ItemDistance, j).r, 0 ]
      //   }
      //   items.push(x7)
      // }
      // // 项目6 end
      // 击剑点击区 begin
      if (-(j - itemNum) === 9) {
        let x2ClickWidth = itemWidth * 2
        let x2ClickItemDistance = itemDistance(x2ClickWidth)
        let x2Click = {
          tag: '击剑点击区',
          name: 'click_jijian',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.35, calcOffset(itemNum, x2ClickItemDistance, j).y * 1.2, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.23 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        let x2ClickTxt = {
          tag: '击剑点击区文字',
          name: 'click_jijian_txt',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.35, calcOffset(itemNum, x2ClickItemDistance, j).y * 1.2, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.27 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        items.push(x2Click)
        items.push(x2ClickTxt)
      }
      // 击剑点击区 end
      // 乒乓球点击区 begin
      if (-(j - itemNum) === 12) {
        let x2ClickWidth = itemWidth * 2
        let x2ClickItemDistance = itemDistance(x2ClickWidth)
        let x2Click = {
          tag: '乒乓球点击区',
          name: 'click_pingpang',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.35, calcOffset(itemNum, x2ClickItemDistance, j).y * 1.6, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.25 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        let x2ClickTxt = {
          tag: '乒乓球点击区文字',
          name: 'click_pingpang_txt',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.35, calcOffset(itemNum, x2ClickItemDistance, j).y * 1.6, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.26 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        items.push(x2Click)
        items.push(x2ClickTxt)
      }
      // 乒乓球点击区 end
      // 跳水点击区 begin
      if (-(j - itemNum) === 13) {
        let x2ClickWidth = itemWidth
        let x2ClickItemDistance = itemDistance(x2ClickWidth)
        let x2Click = {
          tag: '跳水点击区',
          name: 'click_tiaoshui',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.55, calcOffset(itemNum, x2ClickItemDistance, j).y * 0.3, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.52 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        let x2ClickTxt = {
          tag: '跳水点击区文字',
          name: 'click_tiaoshui_txt',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.55, calcOffset(itemNum, x2ClickItemDistance, j).y * 0.3, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.53 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        items.push(x2Click)
        items.push(x2ClickTxt)
      }
      // 跳水点击区 end
      // 游泳点击区 begin
      if (-(j - itemNum) === 14) {
        let x2ClickWidth = itemWidth
        let x2ClickItemDistance = itemDistance(x2ClickWidth)
        let x2Click = {
          tag: '游泳点击区',
          name: 'click_youyong',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.55, calcOffset(itemNum, x2ClickItemDistance, j).y * -2.0, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.52 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        let x2ClickTxt = {
          tag: '游泳点击区',
          name: 'click_youyong_txt',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.55, calcOffset(itemNum, x2ClickItemDistance, j).y * -2.0, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.53 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        items.push(x2Click)
        items.push(x2ClickTxt)
      }
      // 游泳点击区 end
      // 体操点击区 begin
      if (-(j - itemNum) === 16) {
        let x2ClickWidth = itemWidth * 2
        let x2ClickItemDistance = itemDistance(x2ClickWidth)
        let x2Click = {
          tag: '体操点击区',
          name: 'click_ticao',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.28, calcOffset(itemNum, x2ClickItemDistance, j).y * 1.6, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.30 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        let x2ClickTxt = {
          tag: '体操点击区文字',
          name: 'click_ticao_txt',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.30, calcOffset(itemNum, x2ClickItemDistance, j).y * 1.6, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.31 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        items.push(x2Click)
        items.push(x2ClickTxt)
      }
      // 体操点击区 end
      // 羽毛球点击区 begin
      if (-(j - itemNum) === 19) {
        let x2ClickWidth = itemWidth * 2
        let x2ClickItemDistance = itemDistance(x2ClickWidth)
        let x2Click = {
          tag: '羽毛球点击区',
          name: 'click_yumaoqiu',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.26, calcOffset(itemNum, x2ClickItemDistance, j).y * -1.0, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.15 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        let x2ClickTxt = {
          tag: '羽毛球点击区文字',
          name: 'click_yumaoqiu_txt',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.25, calcOffset(itemNum, x2ClickItemDistance, j).y * -0.9, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.16 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        items.push(x2Click)
        items.push(x2ClickTxt)
      }
      // 羽毛球点击区 end
      // 举重点击区 begin
      if (-(j - itemNum) === 5) {
        let x2ClickWidth = itemWidth * 2
        let x2ClickItemDistance = itemDistance(x2ClickWidth)
        let x2Click = {
          tag: '举重点击区',
          name: 'click_juzhong',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.25, calcOffset(itemNum, x2ClickItemDistance, j).y * -1.2, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.25 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        let x2ClickTxt = {
          tag: '举重点击区文字',
          name: 'click_juzhong_txt',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.25, calcOffset(itemNum, x2ClickItemDistance, j).y * -1.2, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.26 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        items.push(x2Click)
        items.push(x2ClickTxt)
      }
      // 举重点击区 end
      // 射击点击区 begin
      if (-(j - itemNum) === 6) {
        let x2ClickWidth = itemWidth * 2
        let x2ClickItemDistance = itemDistance(x2ClickWidth)
        let x2Click = {
          tag: '射击点击区',
          name: 'click_sheji',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.25, calcOffset(itemNum, x2ClickItemDistance, j).y * 1.2, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.25 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        let x2ClickTxt = {
          tag: '射击点击区文字',
          name: 'click_sheji_txt',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.26, calcOffset(itemNum, x2ClickItemDistance, j).y * 1.2, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.26 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        items.push(x2Click)
        items.push(x2ClickTxt)
      }
      // 射击点击区 end
      // 综合点击区 begin
      if (-(j - itemNum) === 10) {
        let x2ClickWidth = itemWidth * 2
        let x2ClickItemDistance = itemDistance(x2ClickWidth)
        let x2Click = {
          tag: '综合点击区',
          name: 'click_zonghe',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.25, calcOffset(itemNum, x2ClickItemDistance, j).y * -0.3, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.20 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        let x2ClickTxt = {
          tag: '综合点击区文字',
          name: 'click_zonghe_txt',
          size: [ x2ClickWidth, x2ClickWidth * 0.5 ],
          position: [ calcOffset(itemNum, x2ClickItemDistance, j).x * 0.25, calcOffset(itemNum, x2ClickItemDistance, j).y * -0.3, calcOffset(itemNum, x2ClickItemDistance, j).z * 0.21 ],
          rotation: [ 0, calcOffset(itemNum, x2ClickItemDistance, j).r, 0 ]
        }
        items.push(x2Click)
        items.push(x2ClickTxt)
      }
      // 综合点击区 end
    }

    for (var i = 0; i < items.length; i++) {
      let item = items[i]
      let element = document.createElement('img')
      element.width = item.size[0] + 1
      element.height = item.size[1] + 1
      element.src = _blank
      element.setAttribute('data-tag', item.tag)
      element.className = item.name

      let object = new THREE.CSS3DObject(element)
      object.position.fromArray(item.position)
      object.rotation.fromArray(item.rotation)
      scene.add(object)
    }
    // 场景元件 end

    // 渲染 begin
    renderer = new THREE.CSS3DRenderer()
    renderer.setSize(_winSize[0], _winSize[1])
    document.getElementById('s3D').innerHTML = ''
    document.getElementById('s3D').appendChild(renderer.domElement)
    // renderer.render(scene, camera)
    animate2()
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

  // function onDocumentMouseDown (event) {
  //   event.preventDefault()
  //
  //   $(document).on('mousemove', function (event) {
  //     onDocumentMouseMove(event)
  //   }).on('mouseup', function (event) {
  //     onDocumentMouseUp(event)
  //   })
  // }
  //
  // function onDocumentMouseMove (event) {
  //   let movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0
  //   let movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0
  //
  //   lon -= movementX * 0.1
  //   lat += movementY * 0.1
  // }
  //
  // function onDocumentMouseUp (event) {
  //   $(document).off('mousemove mouseup')
  // }

  window.touch3D = false
  // function onDocumentTouchStart (event) {
  //   event.preventDefault()
  //
  //   const touch = event.touches[0]
  //
  //   touchX = touch.screenX
  //   touchY = touch.screenY
  //
  //   window.touch3D = false
  // }

  // function onDocumentTouchMove (event) {
  //   event.preventDefault()
  //
  //   const touch = event.touches[0]
  //
  //   lon -= (touch.screenX - touchX) * 0.1
  //   lat += (touch.screenY - touchY) * 0.1
  //
  //   touchX = touch.screenX
  //   touchY = touch.screenY
  //
  //   window.touch3D = true
  // }

  function onDocumentTouchEnd (event) {
    // event.preventDefault()
    // 触发点 begin
    if (!window.touch3D) {
      let touchedClass = event.target.className
      switch (touchedClass) {
        // 击剑
        case 'click_jijian':
          console.log('击剑')
          changeQA(5, true)
          break
        // 乒乓球
        case 'click_pingpang':
          console.log('乒乓球')
          changeQA(8, true)
          break
        // 跳水
        case 'click_tiaoshui':
          console.log('跳水')
          changeQA(3, true)
          break
        // 游泳
        case 'click_youyong':
          console.log('游泳')
          changeQA(10, true)
          break
        // 体操
        case 'click_ticao':
          console.log('体操')
          changeQA(4, true)
          break
        // 羽毛球
        case 'click_yumaoqiu':
          console.log('羽毛球')
          changeQA(9, true)
          break
        // 射击
        case 'click_sheji':
          console.log('射击')
          changeQA(2, true)
          break
        // 举重
        case 'click_juzhong':
          console.log('举重')
          changeQA(1, true)
          break
        // 综合
        case 'click_zonghe':
          console.log('综合')
          changeQA(6, true)
          break
      }
    }
    // 触发点 end
  }

  // ========== begin
  // let _lon = 40
  function animate2 () {
    // if (_lon > 0) {
    //   _lon = _lon - 0.25
    // } else {
    //   _lon = 0
    // }
    // lon += _lon
    // lon += 0
    // lat = Math.max(-15, Math.min(15, lat))
    // phi = THREE.Math.degToRad(90 - lat)
    // theta = THREE.Math.degToRad(lon)

    window.requestAnimationFrame(animate2)

    // target.x = Math.sin(phi) * Math.cos(theta)
    // target.y = Math.cos(phi)
    // target.z = Math.sin(phi) * Math.sin(theta)
    //
    // camera.lookAt(target)

    // 安卓X5内核不使用重力感应 begin
    // if (navigator.userAgent.indexOf('MQQBrowser') > -1) {
    //   if (!window.bind3DEvt) {
    //     $(document).on('touchstart', function (event) {
    //       onDocumentTouchStart(event)
    //     }).on('touchmove', function (event) {
    //       onDocumentTouchMove(event)
    //     }).on('touchend', function (event) {
    //       onDocumentTouchEnd(event)
    //     })
    //     window.bind3DEvt = true
    //   }
    // } else {
    if (!window.bind3DEvt) {
      $(document).on('touchend', function (event) {
        onDocumentTouchEnd(event)
      })
      window.bind3DEvt = true
    }
    controls.update()
    // }
    // 安卓X5内核不使用重力感应 end

    renderer.render(scene, camera)
  }
  // ========== end

  init()
  // console.log(controls)
}
/**
 * 3D场景相关 end
 */

/**
 * 显示答题组件
 * @param  {[type]} id     [description]
 * @param  {[type]} status [description]
 * @return {[type]}        [description]
 */
const changeQA = (id, status) => {
  store.dispatch('SET_QA_LOADING', status)
  store.dispatch('SET_QA_ID', id)
}

export const skip = () => {
  store.dispatch('SET_KKJJ', false)
  $('#song-audio')[0].pause()

  $('#bgm-audio')[0].play()
  $('.play').show()
  $('.pause').hide()

  // 初始化3D场景
  init3D()
}

export const skipKKJJ = () => {
  $('#song-audio')[0].pause()
  $('.rules').fadeIn('fast', function () {
    setTimeout(() => {
      skip()
    }, 5000)
  })
}

/**
 * 卡拉OK效果
 * @return {[type]} [description]
 */
const kalaok = () => {
  const JT = window.JT
  const JTL = window.JTL
  const _tl = JTL.create()
  const _ww = $(window).width()

  function genLyrics (obj1, obj2, time, delay, cb) {
    let _x = (_ww - $(obj1).width()) / 2
    _tl.to(obj1, 0, {
      opacity: 1,
      x: _x
    }, '+=' + delay)
    _tl.fromTo(obj2, time, {
      opacity: 1,
      width: 0,
      x: _x
    }, {
      opacity: 1,
      x: _x,
      width: $(obj2).width(),
      onEnd: function () {
        JT.set(obj1, { opacity: 0 })
        JT.set(obj2, { opacity: 0 })
        if (typeof cb === 'function') {
          cb.call(this)
        }
      }
    }, '+=' + delay)
  }

  genLyrics('.lyrics-0-0', '.lyrics-0-1', 5.41, 0)
  genLyrics('.lyrics-1-0', '.lyrics-1-1', 2.65, (5.41 + 10.96))
  genLyrics('.lyrics-2-0', '.lyrics-2-1', 2.95, (5.41 + 10.96 + 2.65))
  genLyrics('.lyrics-3-0', '.lyrics-3-1', 2.99, (5.41 + 10.96 + 2.65 + 2.95))
  genLyrics('.lyrics-4-0', '.lyrics-4-1', 3.78, (5.41 + 10.96 + 2.65 + 2.95 + 2.99))
  genLyrics('.lyrics-5-0', '.lyrics-5-1', 2.33, (5.41 + 10.96 + 2.65 + 2.95 + 2.99 + 3.78))
  genLyrics('.lyrics-6-0', '.lyrics-6-1', 3.34, (5.41 + 10.96 + 2.65 + 2.95 + 2.99 + 3.78 + 2.33))
  genLyrics('.lyrics-7-0', '.lyrics-7-1', 2.88, (5.41 + 10.96 + 2.65 + 2.95 + 2.99 + 3.78 + 2.33 + 3.34))
  genLyrics('.lyrics-8-0', '.lyrics-8-1', 3.06, (5.41 + 10.96 + 2.65 + 2.95 + 2.99 + 3.78 + 2.33 + 3.34 + 2.88), function () {
    // 隐藏康康佳佳
    setTimeout(() => {
      // store.dispatch('SET_KKJJ', false)
      // $('#song-audio')[0].pause()
      //
      // $('#bgm-audio')[0].play()
      // $('.play').show()
      // $('.pause').hide()
      //
      // // 初始化3D场景
      // init3D()

      $('.rules').fadeIn('fast', function () {
        setTimeout(() => {
          skip()
        }, 5000)
      })
    }, (42.5 - (5.41 + 10.96 + 2.65 + 2.95 + 2.99 + 3.78 + 2.33 + 3.34 + 2.88 + 3.06)) * 1000)
  })

  // 跳舞 begin
  _tl.fromTo('.walk', 5.41, {
    x: 0
  }, {
    x: -_ww / 2 - $('.walk').width() / 2,
    onEnd: function () {
      $('.walk').hide()
      JT.set('.shake', { opacity: 1 })
    }
  }, '+=0')
  _tl.fromTo('.shake', 0.01, {
    opacity: 1
  }, {
    opacity: 0,
    display: 'none'
  }, '+=16.37')
  _tl.fromTo('.kangkang', 0.01, {
    opacity: 0
  }, {
    opacity: 1
  }, '+=16.37')
  _tl.fromTo('.jiajia', 0.01, {
    opacity: 0
  }, {
    opacity: 1
  }, '+=16.37')
  _tl.fromTo('.shakeflag', 0.01, {
    opacity: 0
  }, {
    opacity: 1
  }, '+=28.74')
  _tl.fromTo('.kangkang', 0.01, {
    opacity: 1
  }, {
    opacity: 0
  }, '+=28.74')
  _tl.fromTo('.jiajia', 0.01, {
    opacity: 1
  }, {
    opacity: 0
  }, '+=28.74')
  // 跳舞 end

  // 停止背景音乐
  $('#bgm-audio')[0].pause()
  $('.play').hide()
  $('.pause').show()

  // 播放歌曲
  $('#song-audio')[0].play()

  // 歌词动画
  _tl.play()
}

export const init = ({ dispatch, state }) => {
  // 初始化3D场景
  // init3D()

  // 更换背景音乐
  // $('#bgm-audio')[0].src = '../../../static/bgm1.mp3'
  // if (document.querySelector('.play').style.display !== 'none') {
  //   $('#bgm-audio')[0].play()
  // }

  // 显示康康佳佳
  store.dispatch('SET_KKJJ', true)

  // 卡拉OK效果
  kalaok()
  // console.log(kalaok)
}
