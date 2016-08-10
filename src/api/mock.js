import Mock from 'mockjs'

// 初始化Mock
export const initMock = function () {
  const _host = window.location.hostname
  if (_host.indexOf('localhost') !== -1 || _host.indexOf('192.168.') !== -1 || window.location.href.indexOf('127.0.0.1') !== -1 || window.location.href.indexOf('github') !== -1) {
    // 配置Mock
    Mock.setup({
      timeout: '200-600'
    })

    // 模拟数据
    // ========

    Mock.mock(/\/api\/test/, 'get', {
      'status': {
        'code': 1000,
        'message': '成功'
      },
      'result': {
        //
      })

    // ========
  }
}
