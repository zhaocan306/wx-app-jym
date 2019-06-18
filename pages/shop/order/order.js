// pages/shop/order/order.js
import { deliveryList } from '../../../utils/common.js'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    isCart:false,
    isDelivery:false
  },
  onShow() {
    this.setData({
      deliveryList: deliveryList
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
  // 显示配送时间弹窗
  onShowDelivery() {
    this.setData({
      isDelivery: true
    })
  },
  // 隐藏配送时间弹窗
  onHideDelivery() {
    this.setData({
      isDelivery: false
    })
  },
  // 选择配送时间
  toDelivery(e) {
    let code = e.currentTarget.dataset.code;
    let list = deliveryList.map(item => {
      if(item.code == code) {
        item.type = true
      } else {
        item.type = false
      }
      return item
    })
    this.setData({
      deliveryList: list
    })
  },
  // 查看电子发票
  toReceipt() {
    wx.navigateTo({
      url: '/pages/shop/receipt/receipt'
    })
  },
  touchMove() {
    
  }
})