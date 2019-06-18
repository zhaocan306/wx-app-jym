// pages/message/address/address.js
import { toast } from '../../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    title: '删除地址',
    content: '是否删除该地址?',
    list:[
      {
        name: '赵某某',
        sex: '男士',
        phone: '88888888888',
        address: '湖南省长沙市雨花区井湾子街道中意一路'
      },
      {
        name: '赵某某',
        sex: '男士',
        phone: '88888888888',
        address: '湖南省长沙市雨花区井湾子街道中意一路'
      },
      {
        name: '赵某某',
        sex: '男士',
        phone: '88888888888',
        address: '湖南省长沙市雨花区井湾子街道中意一路'
      },
      {
        name: '赵某某',
        sex: '男士',
        phone: '88888888888',
        address: '湖南省长沙市雨花区井湾子街道中意一路'
      },
      {
        name: '赵某某',
        sex: '男士',
        phone: '88888888888',
        address: '湖南省长沙市雨花区井湾子街道中意一路'
      }, {
        name: '赵某某',
        sex: '男士',
        phone: '88888888888',
        address: '湖南省长沙市雨花区井湾子街道中意一路'
      },
      {
        name: '赵某某',
        sex: '男士',
        phone: '88888888888',
        address: '湖南省长沙市雨花区井湾子街道中意一路'
      }
    ]
  },
  // 新增地址
  add() {
    wx.navigateTo({
      url: "/pages/message/address-edit/address-edit?type=add"
    })
  },
  // 修改地址
  edit() {
    wx.navigateTo({
      url: "/pages/message/address-edit/address-edit?type=edit"
    })
  },
  // 删除地址
  remove() {
    this.setData({
      isShow: true
    })
  },
  // 取消删除地址
  cancelRemove() {
    this.setData({
      isShow: false
    })
  },
  // 确定删除地址
  confirmRemove() {
    this.setData({
      isShow: false
    })
    toast('地址已删除！')
  }
})