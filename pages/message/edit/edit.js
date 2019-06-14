// pages/message/edit/edit.js
import { editList } from '../../../utils/common.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sixList: ["男","女"],
    type: 0
  },
  onLoad(options) {
    this.setData({
      editList: editList
    })
  },
  // 点击修改
  toClickEdit(e) {
    const index = e.currentTarget.dataset.index;
    if(index === 1) {
      this.getEditHead()
    }
    if(index === 2) {
      wx.navigateTo({
        url: '/pages/message/edit-name/edit-name'
      })
    }
    if(index === 4) {
      wx.navigateTo({
        url: '/pages/message/edit-phone/edit-phone'
      })
    }
    if(index === 5) {
      wx.navigateTo({
        url: '/pages/message/edit-member/edit-member'
      })
    }
  },
  // 修改用户头像
  getEditHead() {
    wx.chooseImage({
      success:(res) => {
        console.log(res)
      }
    })
  },
  // 选择性别
  PickerChange(e) {
    this.setData({
      type: e.detail.value
    })
  }
})