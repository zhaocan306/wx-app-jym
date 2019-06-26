Page({
  data: {
    cardCur: 0,
    swiperList: [
      "/images/svg/Bitmap.svg", "/images/svg/Bitmap.svg", "/images/svg/Bitmap.svg"
    ],
    isCart: false,
    isSpecs: false
  },
  // 轮播图切换
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
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