const app = getApp();
Page({
  data: {
    CustomBar: app.globalData.CustomBar
  },
  // 手机号登录
  toLogin() {
    wx.navigateTo({
      url: '/pages/login/login/login'
    })
  }
})