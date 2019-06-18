// pages/message/approve/approve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 查看详情
  toDetail() {
    wx.navigateTo({
      url: '/pages/message/approve-detail/approve-detail'
    })
  },
  // 个人认证
  toValidation() {
    wx.navigateTo({
      url: '/pages/message/approve-validation/approve-validation'
    })
  }
})