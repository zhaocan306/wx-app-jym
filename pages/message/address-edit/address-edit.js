// pages/message/edit-address/edit-address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navName: '',
    sex: 1,
    region: [],
    isAddress: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type = options.type, name = '新增';
    if (type === 'edit') {
      name = '修改'
    }
    this.setData({
      navName: name
    })
  },
  // 选择性别
  toSex(e) {
    let type = e.currentTarget.dataset.type;
    this.setData({
      sex: type
    })
  },
  // 选择省市区
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },
  // 让详细地址输入框聚焦
  toAddress() {
    this.setData({
      isAddress: true
    })
  }
})