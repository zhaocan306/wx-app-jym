Page({
  data: {
    swiperList: ["https://www.jiayouma2018.com/img/1.jpg", "https://www.jiayouma2018.com/img/2.jpg", "https://www.jiayouma2018.com/img/4.jpg"],
    cardCur: 0
  },
  // 轮播图切换
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // 拨打电话
  toCall() {
    wx.makePhoneCall({
      phoneNumber: '0731-87892095'
    })
  }
})