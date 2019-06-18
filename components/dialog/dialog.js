// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: Boolean,
    title: {
      type: String,
      value: '取消订单'
    },
    content: {
      type: String,
      value: '是否取消订单?'
    }
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
    touchMove() {

    },
    hideModal() {
      this.triggerEvent('cancel')
    },
    showModal() {
      this.triggerEvent('confirm')
    }
  }
})
