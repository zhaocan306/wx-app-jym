import { toast } from '../../../utils/util.js';
Component({
  properties: {

  },
  data: {
    roomName: '',
    cleanType: ["嘻嘻嘻","哈哈哈","呵呵呵"],
    type: 1,
    day: '2019-06-04',
    time: '13:14'
  },
  methods: {
    /** 选择预约日期 */
    DateChange(e) {
      this.setData({
        day: e.detail.value
      })
    },
    /** 选择预约时间 */
    TimeChange(e) {
      this.setData({
        time: e.detail.value
      })
    },
    /** 选择打扫类型 */
    PickerChange(e) {
      this.setData({
        type: e.detail.value
      })
    },
    /** 点击预约打扫 */
    toCleaning() {
      if(!this.data.roomName) {
        toast('请填写房间号');
      }
    }
  }
})
