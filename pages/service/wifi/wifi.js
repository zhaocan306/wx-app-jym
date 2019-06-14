import { toast } from '../../../utils/util.js';
Component({
  properties: {

  },
  data: {
    roomName: '6-603',
    wifiName: '家有马',
    wifiPassword: '88888888'
  },
  methods: {
    /** 复制wifi密码 */
    toCopyWifi() {
      wx.setClipboardData({
        data: this.data.wifiPassword,
      })
    },
    /** 连接wifi */
    connected() {
      let self = this;
      wx.connectWifi({
        SSID: '111',
        BSSID: '111',
        password: self.data.wifiPassword,
        success: (res) => {
          toast('wifi连接成功')
        },
        fail: (e) => {
          toast('wifi连接失败')
        }
      })
    }
  }
})
