import { serviceList } from '../../../utils/common.js'
Component({
  properties: {

  },
  data: {
    cur_index: 1
  },
  methods: {
    // 获取数据
    getData() {
      this.setData({
        list: serviceList
      })
    },
    // 垂直导航栏切换
    chooseType(e) {
      const index = e.currentTarget.dataset.id;
      this.setData({
        cur_index: index
      })
    }
  }
})
