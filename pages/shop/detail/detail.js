// pages/shop/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    swiperList: [
      "/images/svg/Bitmap.svg", "/images/svg/Bitmap.svg", "/images/svg/Bitmap.svg"
    ],
    isCart: false,
    isSpecs: false
  },
  // 显示购物车
  onShowCart() {
    this.setData({
      isCart: !this.data.isCart
    })
  },
  // 隐藏购物车
  onHideCart() {
    this.setData({
      isCart: false
    })
  },
  // 选择商品规格
  chooseNorms() {
    this.setData({
      isSpecs: true
    })
  },
  /** 关闭规格弹窗 */
  cancelSpecs() {
    this.setData({
      isSpecs: false
    })
  },
  /** 确定选择规格 关闭弹窗 */
  confirmSpecs() {
    this.setData({
      isSpecs: false
    })
    console.log('点击了确定')
  }
})