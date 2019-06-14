// pages/order/service/service.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    cleanType: ["嘻嘻嘻", "哈哈哈", "呵呵呵"],
    type:0
  },
  /** 选择问题类型 */
  PickerChange(e) {
    this.setData({
      type: e.detail.value
    })
  },
})