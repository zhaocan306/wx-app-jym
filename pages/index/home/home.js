// pages/home/home.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    cardCur: 0,
    img_urls: ["https://www.jiayouma2018.com/img/1.jpg", "https://www.jiayouma2018.com/img/2.jpg","https://www.jiayouma2018.com/img/4.jpg"],
    isHotel: false,
    isFacilities: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 轮播图切换
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
    // 显示酒店商圈介绍
    toShowHotel() {
      this.setData({
        isHotel: !this.data.isHotel
      })
    },
    // 显示配套设施介绍
    toShowFacilities() {
      this.setData({
        isFacilities: !this.data.isFacilities
      })
    },
    // 查看酒店的详情
    toDetail() {
      wx.navigateTo({
        url: '/pages/home/detail/detail'
      })
    },
    // 查看个人信息
    toMessage() {
      this.triggerEvent('message')
    }
  }
})
