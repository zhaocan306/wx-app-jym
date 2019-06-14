// components/clearInput/clearInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inputHint: {
      type: String,
      value: '搜索'
    },
    inputIcon: {
      type: String,
      value: 'search.png'
    },
    isPassword: {
      type: Boolean,
      value: false
    },
    confirmType: {
      type: String,
      value: "done"
    },
    inputValue: {
      type: String
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isClearShow: false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    inputListener(e){
      var value = e.detail.value;
      var self = this;
      if (!value) {
        self.setData({
          isClearShow: false
        });
      } else {
        self.setData({
          isClearShow: true
        });
      }
    },
    clearTap(){
      this.setData({
        isClearShow: false,
        inputValue: ''
      });
    }
  }
})
