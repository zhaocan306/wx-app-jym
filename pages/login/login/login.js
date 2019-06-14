// pages/login/login/login.js
import { toast } from '../../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCode: true,
    isColor: false,
    isCodes: true,
    count: 60,
    timeOut: '',
    phone: '',
    code: ''
  },
  /** 监控手机号输入框 */
  bindChangePhone(e) {
    this.data.phone = e.detail.value;
    if(e.detail.value) {
      if (this.data.code) {
        this.data.isCodes = false;
      } else {
        this.data.isCodes = true;
      }
      this.setData({
        isCodes: this.data.isCodes,
        isColor: true
      })
      return
    }
    this.setData({
      isColor: false
    })
  },
  /** 监控验证码输入框 */
  bindChangeCode(e) {
    this.data.code = e.detail.value;
    if (e.detail.value) {
      if (this.data.phone) {
        this.data.isCodes = false;
      } else {
        this.data.isCodes = true;
      }
      this.setData({
        isCodes: this.data.isCodes
      })
      return
    }
    this.setData({
      isCodes: true
    })
  },
  // 发送验证码
  getCode() {
    let self = this;
    this.setData({
      isCode: false
    })
    this.data.timeOut = setInterval(() => {
      self.data.count--;
      self.setData({
        count: self.data.count
      })
      if (self.data.count <= 0) {
        self.clearTimeOut()
      }
    }, 1000);
    toast('验证码已发送');
  },
  // 清除定时器
  clearTimeOut() {
    if (!this.data.isCode) {
      this.setData({
        isCode: true,
        count: 60
      })
      this.data.isCode = true;
      this.data.count = 60;
      clearInterval(this.data.timeOut)
    }
  },
  toIndex() {
    wx.navigateTo({
      url: '/pages/index/index/index'
    })
  }
})