const JT = window.JT
const JTL = window.JTL

export const timeline = JTL.create()

export const init = () => {
  const $ = window.$
  const _bg = '#section0-bg'
  const _tracks = '#section0-tracks'
  const _p0 = '#section0-plane0'
  const _p1 = '#section0-plane1'
  const _p2 = '#section0-plane2'
  const _p3 = '#section0-plane3'
  const _p4 = '#section0-plane4'
  const _p5 = '#section0-plane5'
  const _p6 = '#section0-plane6'
  const _p7 = '#section0-plane7'
  const _p8 = '#section0-plane8'
  const _h0 = '#section0-people0'
  const _h1 = '#section0-people1'
  const _u = '#section0-ufo'
  const _ul = '#section0-ufo-light'
  const _ulin = '#section0-ufo-light-inner'
  const _t0 = '#section0-txt0'
  const _t1 = '#section0-txt1'
  const _g0 = '#section0-glass0'
  const _g1 = '#section0-glass1'

  // 背景 begin
  JT.set(_tracks, { opacity: 1 })
  timeline.fromTo(_bg, 30, {
    scale: 1,
    opacity: 1
  }, {
    scale: 1.5,
    opacity: 1,
    yoyo: true,
    repeat: 'infinity',
    ease: JT.Quad.InOut
  })
  // 背景 end

  // 星球0 begin
  let _p0Y = -($(_p0).height())
  JT.set(_p0, {
    opacity: 1,
    y: _p0Y
  })
  timeline.fromTo(_p0, 0.5, {
    y: _p0Y
  }, {
    y: 0,
    ease: JT.Bounce.Out
  }, '+=.5')
  timeline.fromTo(_p0, 0.5, {
    y: 5
  }, {
    y: -5,
    yoyo: true,
    repeat: 'infinity'
  }, '+=.5')
  // 星球0 end

  // 星球1 begin
  let _p1Y = -($(_p1).height() + $(_p1).offset().top)
  JT.set(_p1, {
    opacity: 1,
    y: _p1Y
  })
  timeline.fromTo(_p1, 0.6, {
    y: _p1Y
  }, {
    y: 0,
    ease: JT.Bounce.Out
  }, '+=.5')
  timeline.fromTo(_p1, 0.5, {
    y: 5
  }, {
    y: -5,
    yoyo: true,
    repeat: 'infinity'
  }, '+=.5')
  // 星球1 end

  // 星球2 begin
  let _p2X = $(window).width() - $(_p2).offset().left
  JT.set(_p2, {
    opacity: 1,
    x: _p2X
  })
  timeline.fromTo(_p2, 1, {
    x: _p2X
  }, {
    x: 0,
    ease: JT.Back.InOut
  }, '+=.4')
  timeline.fromTo(_p2, 10, {
    rotationZ: 0
  }, {
    rotationZ: -360,
    repeat: 'infinity'
  }, '+=0')
  // 星球2 end

  // 星球3 begin
  let _p3X = $(window).width() - $(_p3).offset().left
  JT.set(_p3, {
    opacity: 1,
    x: _p3X
  })
  timeline.fromTo(_p3, 1, {
    x: _p3X
  }, {
    x: 0,
    ease: JT.Bounce.Out
  }, '+=.2')
  timeline.fromTo(_p3, 0.5, {
    y: -3
  }, {
    y: 3,
    yoyo: true,
    repeat: 'infinity'
  }, '+=.2')
  // 星球3 end

  // 星球4 begin
  timeline.fromTo(_p4, 0.5, {
    opacity: 0
  }, {
    opacity: 1,
    ease: JT.Circ.In
  }, '+=.2')
  timeline.fromTo(_p4, 0.4, {
    y: -3
  }, {
    y: 3,
    yoyo: true,
    repeat: 'infinity'
  }, '+=.2')
  // 星球4 end

  // 星球5 begin
  let _p5Y = $(window).height() - $(_p5).offset().top
  JT.set(_p5, {
    opacity: 1,
    y: _p5Y
  })
  timeline.fromTo(_p5, 0.7, {
    y: _p5Y
  }, {
    y: 0,
    ease: JT.Bounce.Out
  }, '+=.2')
  timeline.fromTo(_p5, 0.55, {
    y: -3
  }, {
    y: 3,
    yoyo: true,
    repeat: 'infinity'
  }, '+=.2')
  // 星球5 end

  // 星球6 begin
  let _p6Y = $(window).height() - $(_p6).offset().top
  JT.set(_p6, {
    opacity: 1,
    y: _p6Y
  })
  timeline.fromTo(_p6, 0.4, {
    y: _p6Y,
    rotationZ: 0
  }, {
    y: 0,
    rotationZ: 30,
    ease: JT.Sine.In
  }, '+=.25')
  timeline.fromTo(_p6, 0.4 * 12, {
    rotationZ: 30
  }, {
    rotationZ: 360 + 30,
    repeat: 'infinity'
  }, '+=.05')
  // 星球6 end

  // 星球7 begin
  timeline.fromTo(_p7, 2, {
    opacity: 0.5
  }, {
    opacity: 1,
    yoyo: true,
    repeat: 'infinity',
    ease: JT.Sine.InOut
  }, '+=.5')
  // 星球7 end

  // 星球8 begin
  let _p8Y = $(window).height() - $(_p8).offset().top
  let _p8X = $(window).height() - $(_p8).offset().left
  JT.set(_p8, {
    opacity: 1,
    x: _p8X,
    y: _p8Y
  })
  timeline.fromTo(_p8, 0.5, {
    y: _p8Y,
    x: _p8X
  }, {
    y: 0,
    x: 0,
    ease: JT.Sine.In
  }, '+=.2')
  timeline.fromTo(_p8, 120, {
    rotationZ: 0
  }, {
    rotationZ: 360,
    repeat: 'infinity'
  }, '+=.2')
  // 星球8 end

  // 文字0 begin
  JT.set(_t0, {
    opacity: 0,
    scaleX: 0,
    scaleY: 0
  })
  timeline.fromTo(_t0, 1, {
    opacity: 0,
    scaleX: 0,
    scaleY: 0
  }, {
    opacity: 1,
    scaleX: 2,
    scaleY: 2,
    ease: JT.Quad.InOut
  }, '+=.5')
  timeline.fromTo(_t0, 0.5, {
    scaleX: 2,
    scaleY: 2
  }, {
    scaleX: 1,
    scaleY: 1,
    ease: JT.Quad.InOut
  }, '+=1.6')
  // 文字0 end

  // 文字1 begin
  JT.set(_t1, {
    opacity: 0,
    scaleX: 0,
    scaleY: 0
  })
  timeline.fromTo(_t1, 1, {
    opacity: 0,
    scaleX: 0,
    scaleY: 0
  }, {
    opacity: 1,
    scaleX: 2,
    scaleY: 2,
    ease: JT.Quad.InOut
  }, '+=1')
  timeline.fromTo(_t1, 0.5, {
    scaleX: 2,
    scaleY: 2
  }, {
    scaleX: 1,
    scaleY: 1,
    ease: JT.Quad.InOut
  }, '+=2.1')
  // 文字1 end

  // 人物0 begin
  let _h0X = $(window).width() - $(_h0).offset().left
  let _h0Y = $(window).height() - $(_h0).offset().top
  JT.set(_h0, {
    opacity: 1,
    x: _h0X,
    y: _h0Y
  })
  timeline.fromTo(_h0, 1, {
    x: _h0X,
    y: _h0Y
  }, {
    x: 0,
    y: 0,
    ease: JT.Bounce.Out
  }, '+=.5')
  // 人物0 end

  // 人物1 begin
  let _h1X = $(window).width() - $(_h1).offset().left
  let _h1Y = $(window).height() - $(_h1).offset().top
  JT.set(_h1, {
    opacity: 1,
    x: _h1X,
    y: _h1Y
  })
  timeline.fromTo(_h1, 1, {
    x: _h1X,
    y: _h1Y
  }, {
    x: 0,
    y: 0,
    ease: JT.Bounce.Out
  }, '+=.7')
  // 人物1 end

  // ufo begin
  JT.set(_u, {
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
    rotationZ: 0
  })
  timeline.fromTo(_u, 0.5, {
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
    rotationZ: 0
  }, {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    rotationZ: -25,
    ease: JT.Sine.In
  }, '+=2')
  timeline.fromTo(_u, 3, {
    scaleX: 1,
    scaleY: 1,
    rotationZ: -25
  }, {
    scaleX: 1.1,
    scaleY: 1.1,
    rotationZ: -35,
    yoyo: true,
    repeat: 'infinity'
  }, '+=2.5')
  // ufo end

  // ufo光 begin
  let _ulinH = $(_ulin).height()
  JT.set(_ul, {
    opacity: 1,
    rotationZ: -30
  })
  JT.set(_ulin, {
    opacity: 0,
    height: 0
  })
  timeline.fromTo(_ulin, 1, {
    opacity: 0,
    height: 0
  }, {
    opacity: 1,
    height: _ulinH,
    ease: JT.Sine.In
  }, '+=2.7')
  // ufo光 end

  // 眼镜 begin
  timeline.fromTo(_g0, 1, {
    opacity: 0
  }, {
    opacity: 1
  }, '+=3')
  timeline.fromTo(_g1, 1, {
    opacity: 0
  }, {
    opacity: 1
  }, '+=3')
  // 眼镜 end

  // 播放 begin
  timeline.play()
  // 播放 end
}
