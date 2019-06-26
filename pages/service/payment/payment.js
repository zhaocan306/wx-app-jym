const app = getApp();
Page({
  data: {
    CustomBar: app.globalData.CustomBar
  },
  onLoad(option) {
    this.setData({
      title: option.title
    })
  }
})