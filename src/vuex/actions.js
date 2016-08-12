// import { APIError, handleResponse } from '../api'

/**
 * 关闭Loading
 * @param  {string} selector 选择器
 */
const closeLoading = (selector) => {
  window.$(selector).hide()
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
    // debug: true,
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

export {
  closeLoading,
  getWXInfo,
  setWXShare
}
