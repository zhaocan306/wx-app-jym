// pages/index/message/message.js
import { messageList } from '../../../utils/common.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 设置数据
    getData() {
      this.setData({
        messageList: messageList
      })
    },
    // 编辑个人信息
    toEdit() {
      wx.navigateTo({
        url: '/pages/message/edit/edit'
      })
    }
  }
})
