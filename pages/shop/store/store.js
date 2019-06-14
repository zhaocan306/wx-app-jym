// pages/shop/shop.js
import { goods } from '../../../utils/goods.js'
import { getChangeString,changePrice } from "../../../utils/util.js"
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    category: [{
      name: "热销",
      id: "0"
    },
    {
      name: "饮料酒水",
      id: "1"
    },
    {
      name: "乳制品",
      id: "2"
    },
    {
      name: "快餐小吃",
      id: "9"
    },
    {
      name: "休闲零食",
      id: "3"
    },
    {
      name: "休闲娱乐",
      id: "5"
    },
    {
      name: "日常用品",
      id: "7"
    }],
    cur_index: 1,
    goods_list: [],
    VerticalNavTop: 0,
    isCart: false,
    isSpecs: false,
    isVip:false
  },
  onLoad(options) {

  },
  onShow() {
    // let goods_list = goods.map(item => {
    //   item.price = changePrice(item.price)
    //   return item
    // })
    this.data.category.forEach(item => {
      item.goods_list = [];
      goods.forEach(items => {
        if (items.name.length > 20) {
          items.name = getChangeString(items.name)
        }
        if (item.id == items.type) {
          item.goods_list.push(items)
        }
      })
    })
    this.setData({
      category: this.data.category
    })
  },
  //选择商品种类
  chooseType(e) {
    const index = e.currentTarget.dataset.id;
    this.setData({
      cur_index: index,
      MainCur: index,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = that.data.category;
    let tabHeight = 0;
    list.forEach(item => {
      let view = wx.createSelectorQuery().select("#main-" + item.id);
      view.fields({
        size: true
      }, data => {
        item.top = tabHeight;
        tabHeight = tabHeight + data.height;
        item.bottom = tabHeight;
      }).exec();
    })
    let scrollTop = e.detail.scrollTop + 20;
    list.forEach(items => {
      if (scrollTop > items.top && scrollTop < items.bottom) {
        that.setData({
          VerticalNavTop: (items.id - 1) * 50,
          cur_index: items.id
        })
        return false
      }
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
  },
  // 搜索框聚焦的时候
  searchFocus() {
    wx.navigateTo({
      url: '/pages/shop/search/search'
    })
  },
  // 结算
  Settlement() {
    this.setData({
      isVip:true
    })
  },
  // 点击充值
  confirmVip() {
    wx.navigateTo({
      url: '/pages/shop/order/order'
    })
    this.setData({
      isVip: false
    })
  },
  // 点击取消
  cancelVip() {
    this.setData({
      isVip: false
    })
  },
  // 跳转详情页
  toDetail() {
    wx.navigateTo({
      url: '/pages/shop/detail/detail'
    })
  }
})