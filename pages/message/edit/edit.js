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
      this.getEditName()
    }
    if(index === 4) {
      this.getEditPhone()
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
  // 修改用户昵称
  getEditName() {
    wx.navigateTo({
      url: '/pages/message/edit-name/edit-name'
    })
  },
  // 选择性别
  PickerChange(e) {
    this.setData({
      type: e.detail.value
    })
  },
  // 修改手机号码
  getEditPhone() {
    wx.navigateTo({
      url: '/pages/message/edit-phone/edit-phone'
    })
  }
})