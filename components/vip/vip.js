// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: Boolean
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
    hideModal() {
      this.triggerEvent('cancel')
    },
    showModal() {
      this.triggerEvent('confirm')
    }
  }
})
