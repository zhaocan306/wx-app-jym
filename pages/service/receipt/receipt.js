import { toast } from '../../../utils/util.js';
Component({
  properties: {

  },
  data: {
    receiptType: ["增值税专用发票","增值税普通发票"],
    receipt_price: '',
    receipt_head: '',
    receipt_num: '',
    remarks: '',
    type: 0
  },
  methods: {
    /** 选择发票类型 */
    PickerChange(e) {
      this.setData({
        type: e.detail.value
      })
    },
    /** 预约发票 */
    toReceipt() {
      if(!this.data.receipt_price) {
        toast('请输入发票金额')
        return
      }
      if (!this.data.receipt_head) {
        toast('请输入发票抬头')
        return
      }
      if (!this.data.receipt_num) {
        toast('请输入发票税号')
        return
      }
    }
  }
})
