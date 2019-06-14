// pages/login/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
  },
  toLogin() {
    wx.navigateTo({
      url: '/pages/login/login/login'
    })
  }
})