const app = getApp()

const request = (url, options) => {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${app.globalData.host}${url}`,
      method: options.method,
      data: options.data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // 成功之后
      success(request) {
        wx.hideLoading()
        resolve(request.data)
      },
      // 失败之后
      fail(error) {
        wx.hideLoading()
        wx.showToast({
          title: '服务器异常',
          icon: "none",
          duration: 1500
        })
      },
      // 结束之后
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}

const get = (url, options = {}) => {
  return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
  return request(url, { method: 'POST', data: options })
}

module.exports = {
  get,
  post
}