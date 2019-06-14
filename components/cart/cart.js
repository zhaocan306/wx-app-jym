// components/cart/cart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isCart:Boolean
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
    // 显示购物车
    onShowCart() {
      this.triggerEvent('show')
    },
    // 隐藏购物车
    onHideCart() {
      this.triggerEvent('hide')
    },
    // 结算
    Settlement() {
      this.triggerEvent('confirm')
    }
  }
})
