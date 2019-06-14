import { serviceType } from '../../../utils/common.js'
Component({
  properties: {
    // serviceType: serviceType
  },
  data: {

  },
  methods: {
    getData() {
      this.setData({
        serviceType: serviceType
      })
    },
    // 去往超市页面
    toShopping() {
      wx.navigateTo({
        url: '/pages/shop/store/store'
      })
    }
  }
})
