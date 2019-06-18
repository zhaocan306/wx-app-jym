// pages/message/assess/assess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starCheckedImgUrl: "/images/svg/img_checked.svg",
    starUnCheckedImgUrl: "/images/svg/img_unchecked.svg"
  },
  toDetail() {
    wx.navigateTo({
      url: '/pages/order/detail/detail'
    })
  }
})