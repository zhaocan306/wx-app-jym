import { toast } from '../../../utils/util.js';
Component({
  properties: {

  },
  data: {
    reimbursementType: ["嘻嘻嘻", "哈哈哈", "呵呵呵"],
    type: 1,
    day: '2019-06-04',
    time: '13:14',
    reimbursement_content: '',
    reimbursement_room: '',
    people: ''
  },
  methods: {
    /** 选择报修日期  */
    DateChange(e) {
      this.setData({
        day: e.detail.value
      })
    },
    /** 选择报修时间  */
    TimeChange(e) {
      this.setData({
        time: e.detail.value
      })
    },
    /** 选择报修类型  */
    PickerChange(e) {
      this.setData({
        type: e.detail.value
      })
    },
    /** 提交报修  */
    toReimbursement() {
      if(!this.data.reimbursement_content) {
        toast('请填写报修内容')
        return
      }
      if (!this.data.reimbursement_room) {
        toast('请填写报修房间')
        return
      }
      if (!this.data.people) {
        toast('请填写联系人')
        return
      }
    }
  }
})
