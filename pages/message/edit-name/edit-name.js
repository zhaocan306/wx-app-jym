// pages/message/edit-name/edit-name.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 修改用户头像
  toEditHead() {
    wx.chooseImage({
      success:(res) => {

      }
    })
  }
})