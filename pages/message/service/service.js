// pages/message/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /** 拨打电话 */
  toPhone() {
    wx.makePhoneCall({
      phoneNumber: '8888888888'
    })
  },
  /** 跳转到订单详情 */
  toDetail() {
    wx.navigateTo({
      url: '/pages/order/detail/detail'
    })
  }
})