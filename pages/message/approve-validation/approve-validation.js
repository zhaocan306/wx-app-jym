// pages/message/approve-validation/approve-validation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sixList: ["男", "女"],
    type: ''
  },
  // 选择性别
  PickerChange(e) {
    this.setData({
      type: e.detail.value
    })
  },
  // 上传身份证
  upLoad() {
    wx.chooseImage({
      success: (res) => {

      }
    })
  }
})