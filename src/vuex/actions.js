// import { APIError, handleResponse } from '../api'

/**
 * 关闭Loading
 * @param  {string} selector 选择器
 */
const closeLoading = (selector) => {
  document.querySelector(selector).style.display = 'none'
}

/**
 * 获取微信jssdk需要的一些内容
 * @param  {object} component 组件对象
 */
const getWXInfo = (component) => {
  const _port = 'http://happymove.ovpp.cn/weixin/api/getticketjson?url=' + encodeURIComponent(window.location.href)

  component.$http.jsonp(_port, { jsonp: 'jsoncallback' })
  .then(function (response) {
    configWX(response.data)
  })
}

/**
 * 配置微信jssdk
 * @param  {object} data 配置数据
 */
const configWX = (data) => {
  const _appId = data.appId
  const _timestamp = data.timestamp
  const _nonceStr = data.nonceStr
  const _signature = data.signature

  window.wx.config({
    debug: false,
    appId: _appId,
    timestamp: _timestamp,
    nonceStr: _nonceStr,
    signature: _signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
  })
}

/**
 * 配置微信分享内容
 * @param  {object} conf 分享配置
 */
const setWXShare = (conf) => {
  console.log('设置微信分享内容：', conf)
  window.wx.onMenuShareTimeline({
    title: conf.title,
    desc: conf.desc,
    link: conf.link,
    imgUrl: conf.imgUrl,
    success: function () {},
    cancel: function () {}
  })

  window.wx.onMenuShareAppMessage({
    title: conf.title,
    desc: conf.desc,
    link: conf.link,
    imgUrl: conf.imgUrl,
    type: 'link',
    dataUrl: '',
    success: function () {},
    cancel: function () {}
  })
}

// const JT = window.JT
// const JTL = window.JTL
//
// const setAniTimeline = () => {
//   const t1 = JTL.create()
//   t1.fromTo(
//     '#section0-bg',
//     30,
//     {
//       opacity: 1,
//       scaleX: 1,
//       scaleY: 1
//     },
//     {
//       opacity: 0.8,
//       scaleX: 1.2,
//       scaleY: 1.2,
//       repeat: 9999,
//       yoyo: true,
//       ease: JT.Quad.InOut,
//       onUpdate: function () {
//         // console.log(this.curVars)
//       }
//     }
//   )
//   return t1
// }
//
// const playAni = () => {
//   setAniTimeline().play()
// }

export {
  closeLoading,
  getWXInfo,
  setWXShare
  // playAni
}
