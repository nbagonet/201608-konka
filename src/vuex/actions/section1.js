const JT = window.JT
const JTL = window.JTL

export const _tl = JTL.create()

export const init = ({ dispatch, state }) => {
  const $ = window.$
  const _wH = $(window).height()

  const _l = '#section1-light'
  const _bg = '#section1-bg'
  const _tv0 = '#section1-tv0'
  const _tv1 = '#section1-tv1'
  const _tv2 = '#section1-tv2'
  const _txt0 = '#section1-txt0'
  const _txt1 = '#section1-txt1'

  // 闪光 begin
  _tl.fromTo(_l, 0.5, {
    opacity: 1,
    z: 200
  }, {
    opacity: 0,
    ease: JT.Quad.Out
  })
  // 闪光 end

  // 背景 begin
  _tl.fromTo(_bg, 1, {
    opacity: 0,
    z: 1
  }, {
    opacity: 1,
    ease: JT.Quad.In
  })
  _tl.fromTo(_bg, 30, {
    scale: 1,
    opacity: 1
  }, {
    scale: 1.5,
    opacity: 1,
    yoyo: true,
    repeat: 'infinity',
    ease: JT.Sine.InOut
  }, '+=0.5')
  // 背景 end

  // 电视0 begin
  const _tv0Y = -$(_tv0).height()
  const _tv0Y2 = _wH - $(_tv0).offset().top - $(_tv0).height()
  JT.set(_tv0, {
    bottom: _tv0Y,
    z: 190
  })
  _tl.fromTo(_tv0, 1, {
    opacity: 0.5,
    bottom: _tv0Y
  }, {
    opacity: 1,
    bottom: _tv0Y2,
    ease: JT.Quart.In
  }, '+=1.5')
  _tl.fromTo(_tv0, 1, {
    y: -5
  }, {
    y: 5,
    yoyo: true,
    repeat: 'infinity'
  }, '+=2.5')
  // 电视0 end

  // 电视1 begin
  const _tv1Y = -$(_tv1).height()
  const _tv1Y2 = _wH - $(_tv1).offset().top - $(_tv1).height()
  JT.set(_tv1, {
    bottom: _tv1Y,
    z: 185,
    scaleX: 213 / 419,
    scaleY: 213 / 419
  })
  _tl.fromTo(_tv1, 1, {
    opacity: 0.5,
    bottom: _tv1Y
  }, {
    opacity: 1,
    bottom: _tv1Y2,
    ease: JT.Quart.In
  }, '+=1.8')
  _tl.fromTo(_tv1, 0.8, {
    y: -3
  }, {
    y: 3,
    yoyo: true,
    repeat: 'infinity'
  }, '+=2.8')
  // 电视1 end

  // 电视2 begin
  const _tv2Y = -$(_tv2).height()
  const _tv2Y2 = _wH - $(_tv2).offset().top - $(_tv2).height()
  JT.set(_tv2, {
    bottom: _tv2Y,
    z: 180,
    scaleX: 113 / 419,
    scaleY: 113 / 419
  })
  _tl.fromTo(_tv2, 1, {
    opacity: 0.5,
    bottom: _tv2Y
  }, {
    opacity: 1,
    bottom: _tv2Y2,
    ease: JT.Quart.In
  }, '+=1.3')
  _tl.fromTo(_tv2, 1.2, {
    y: -2
  }, {
    y: 2,
    yoyo: true,
    repeat: 'infinity'
  }, '+=2.3')
  // 电视2 end

  // 文字0 begin
  JT.set(_txt0, {
    z: 195,
    opacity: 0,
    scaleX: 0,
    scaleY: 0
  })
  _tl.fromTo(_txt0, 1, {
    opacity: 0,
    scaleX: 0,
    scaleY: 0
  }, {
    opacity: 1,
    scaleX: 2,
    scaleY: 2,
    ease: JT.Quad.InOut
  }, '+=2.6')
  _tl.fromTo(_txt0, 0.5, {
    scaleX: 2,
    scaleY: 2
  }, {
    scaleX: 1,
    scaleY: 1,
    ease: JT.Quad.InOut
  }, '+=3.6')
  // 文字0 end

  // 文字1 begin
  JT.set(_txt1, {
    z: 193,
    opacity: 0,
    scaleX: 0,
    scaleY: 0
  })
  _tl.fromTo(_txt1, 1, {
    opacity: 0,
    scaleX: 0,
    scaleY: 0
  }, {
    opacity: 1,
    scaleX: 2,
    scaleY: 2,
    ease: JT.Quad.InOut
  }, '+=3.3')
  _tl.fromTo(_txt1, 0.5, {
    scaleX: 2,
    scaleY: 2
  }, {
    scaleX: 1,
    scaleY: 1,
    ease: JT.Quad.InOut
  }, '+=4.3')
  // 文字1 end

  // 播放 begin
  _tl.play()
  // 播放 end
}
