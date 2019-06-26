// pages/service/pay/pay.js
Component({
  properties: {

  },
  data: {

  },
  methods: {
    // 跳转到缴费页面
    toPlaying(e) {
      let title = e.currentTarget.dataset.type
      wx.navigateTo({
        url: '/pages/service/payment/payment?title=' + title,
      })
    }
  }
})
