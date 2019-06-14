// pages/service/complaint/complint.js
Component({
  properties: {

  },
  data: {
    complaintType: ["嘻嘻嘻", "哈哈哈", "呵呵呵"],
    type: 1,
    complaintContent: 0,
    day: '2019-06-04',
    time: '13:14'
  },
  methods: {
    /** 选择投诉日期 */
    DateChange(e) {
      this.setData({
        day: e.detail.value
      })
    },
    /** 选择投诉时间 */
    TimeChange(e) {
      this.setData({
        time: e.detail.value
      })
    },
    /** 选择投诉类型 */
    PickerChange(e) {
      this.setData({
        type: e.detail.value
      })
    }
  }
})
