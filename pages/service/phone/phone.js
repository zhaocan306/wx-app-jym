// pages/service/phone/poone.js
Component({
  properties: {

  },
  data: {
    phone: '88888888'
  },
  methods: {
    /** 拨打电话 */
    toPhone() {
      wx.makePhoneCall({
        phoneNumber: this.data.phone
      })
    }
  }
})
