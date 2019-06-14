// pages/home/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: ["https://www.jiayouma2018.com/img/1.jpg", "https://www.jiayouma2018.com/img/2.jpg", "https://www.jiayouma2018.com/img/4.jpg"]
  },
  // 拨打电话
  toCall() {
    wx.makePhoneCall({
      phoneNumber: '0731-87892095'
    })
  }
})