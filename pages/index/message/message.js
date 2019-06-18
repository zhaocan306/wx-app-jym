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
    },
    // 跳转至会员页面
    toMember() {
      wx.navigateTo({
        url: '/pages/message/edit-member/edit-member'
      })
    },
    // 跳转到我的钱包
    toWallet() {
      wx.navigateTo({
        url: '/pages/message/wallet/wallet'
      })
    },
    // 跳转到优惠券页面
    toCoupons() {
      wx.navigateTo({
        url: '/pages/message/coupons/coupons'
      })
    },
    toDetail(e) {
      const type = e.currentTarget.dataset.type,url = '';
      if( type === 1) {
        wx.navigateTo({
          url: '/pages/message/reward/reward'
        })
      }
      if(type === 2) {
        wx.navigateTo({
          url: '/pages/message/address/address'
        })
      }
      if( type === 3) {
        wx.navigateTo({
          url: '/pages/message/service/service'
        })
      }
      if( type === 4) {
        wx.navigateTo({
          url: '/pages/message/approve/approve'
        })
      }
      if (type === 5) {
        wx.navigateTo({
          url: '/pages/message/bank/bank'
        })
      }
      if(type === 6) {
        wx.navigateTo({
          url: '/pages/message/password_reback/password_reback'
        })
      }
      if (type === 7) {
        wx.navigateTo({
          url: '/pages/message/assess/assess'
        })
      }
      if (type === 8) {
        wx.navigateTo({
          url: '/pages/message/steward/steward'
        })
      }
    }
  }
})
