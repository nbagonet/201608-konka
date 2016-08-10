/**
 * 处理接口返回值
 * @param  {array}    response 接口返回值
 * @param  {function} success  返回成功(code === 1000)时的处理函数，此函数接收一个参数，参数值为接口返回值中的result字段内容
 * @param  {function} failed   返回失败(code !== 1000)时的处理函数，此函数接收一个参数，参数值为整个接口返回值，同时还将alert出错误信息
 */
export function handleResponse (response, success, failed) {
  var d = response.data
  var e = d.status
  var c = e.code
  var m = e.message
  var r = d.result

  // console.log(response.data.status.code)

  if (Number(e.code) === 1000) {
    if (typeof success === 'function') {
      success.call(this, r)
    } else {
      console.log(response)
    }
  } else {
    console.log(c + '\n' + m)
    if (typeof failed === 'function') {
      failed.call(this, e)
    }
  }
}

/**
 * 控制台输出接口错误
 * @param  {string} url     接口url
 * @param  {string} code    状态码
 * @param  {string} message 错误信息
 */
export function APIError (url, code, message) {
  console.error('[接口错误]\n接口地址：' + url + '\n错误码：' + code + '\n错误信息：' + message)
}
