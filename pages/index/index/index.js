const app = getApp();
Page({
  data: {
    PageCur: 'home'
  },
  onLoad() {

  },
  onShow() {

  },
  onPullDownRefresh() {
    if (this.data.PageCur === 'order') {
      this.selectComponent("#orders").onPullDownRefresh();
      setTimeout(() => {
        this.selectComponent("#orders").stopPullDownRefresh();
        wx.stopPullDownRefresh();
      }, 1000)
    } else {
      setTimeout(() => {
        wx.stopPullDownRefresh();
      }, 50)
    }
  },
  // 切换tabbar
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
    if (e.currentTarget.dataset.cur === 'order') {
      this.selectComponent("#orders").clueOffset();
    }
    if (e.currentTarget.dataset.cur === 'shop') {
      this.selectComponent("#shops").getData();
    }
    if (e.currentTarget.dataset.cur === 'message') {
      this.selectComponent("#messages").getData();
    }
  },
  // 跳转到个人页面
  toMessage() {
    this.setData({
      PageCur: 'message'
    })
  },
  // 跳转到商店页面
  toShopping() {
    wx.navigateTo({
      url: '/pages/shop/home/home',
    })
  }
})