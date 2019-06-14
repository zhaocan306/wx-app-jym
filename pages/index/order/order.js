import { toast } from '../../../utils/util.js';
let windowWidth = 0;
let itemWidth = 0;
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
    sliderOffset: 0,
    sliderOffsets: [],
    sliderLeft: 0,
    tabs: ["全部", "待付款", "待配送", "已配送", "已完成"],
    tab1Index: 0,
    list: [
      {
        name: '统一冰红茶4件商品',
        price: 3,
        status: 1,
        type: '待付款',
        time: '13:14:14',
        img: 'https://www.jiayouma2018.com/upload_file/f2e96c7fd43141ac914c61f73c5083bf.png'
      },
      {
        name: '统一冰红茶4件商品',
        price: 3,
        status: 2,
        type: '待配送',
        time: '13:14:14',
        img: 'https://www.jiayouma2018.com/upload_file/f2e96c7fd43141ac914c61f73c5083bf.png'
      },
      {
        name: '统一冰红茶4件商品',
        price: 3,
        status: 3,
        type: '已配送',
        time: '13:14:14',
        img: 'https://www.jiayouma2018.com/upload_file/f2e96c7fd43141ac914c61f73c5083bf.png'
      },
      {
        name: '统一冰红茶4件商品',
        price: 3,
        status: 4,
        type: '已完成',
        time: '13:14:14',
        img: 'https://www.jiayouma2018.com/upload_file/f2e96c7fd43141ac914c61f73c5083bf.png'
      }
    ],
    isShow: false,
    isLoad: false
  },
  methods: {
    /** 下拉刷新 */
    onPullDownRefresh() {
      this.setData({
        isLoad: true
      })
    },
    /** 停止下拉刷新 */
    stopPullDownRefresh() {
      this.setData({
        isLoad: false
      })
    },
    /** 计算偏移量 */
    clueOffset() {
      var that = this;
      wx.getSystemInfo({
        success: function (res) {
          itemWidth = Math.ceil(res.windowWidth / that.data.tabs.length);
          let tempArr = [];
          for (let i in that.data.tabs) {
            tempArr.push(itemWidth * i);
          }
          // tab 样式初始化
          windowWidth = res.windowWidth;
          that.setData({
            sliderLeft: (res.windowWidth / that.data.tabs.length - 25) / 2,
            sliderOffsets: tempArr,
            sliderOffset: 0
          });
        }
      });
    },
    /** 点击tabbar时,切换 */
    onTab1Click(event) {
      let index = event.currentTarget.dataset.index;
      this.setData({
        sliderOffset: this.data.sliderOffsets[index],
        tab1Index: index,
      })
    },
    /** swiper-item 的位置发生改变的时候 切换tabbar */
    swiperTran(event) {
      let dx = event.detail.dx;
      let index = event.currentTarget.dataset.index;
      if (dx > 0) { //----->
        if (index < this.data.tabs.length - 1) {   //最后一页不能---->
          let ratio = dx / windowWidth;   /*滑动比例*/
          let newOffset = ratio * itemWidth + this.data.sliderOffsets[index];
          this.setData({
            sliderOffset: newOffset,
          })
        }
      } else {  //<-----------
        if (index > 0) {    //最后一页不能<----
          let ratio = dx / windowWidth;   /*滑动比例*/
          let newOffset = ratio * itemWidth + this.data.sliderOffsets[index];
          this.setData({
            sliderOffset: newOffset,
          })
        }
      }
    },
    /** 动画结束时会触发 animationfinish 事件 */
    animationfinish(event) {
      this.setData({
        sliderOffset: this.data.sliderOffsets[event.detail.current],
        tab1Index: event.detail.current,
      })
    },
    /** 点击取消订单 显示弹窗 */
    clikCancelOrder() {
      this.setData({
        isShow: true
      })
    },
    /** 取消订单 关闭弹窗 */
    cancelOrder() {
      this.setData({
        isShow: false
      })
    },
    /** 确定取消订单 */
    confirmOrder() {
      this.setData({
        isShow: false
      })
      toast('订单已取消!')
    },
    /** 查看订单详情 */
    toDetail() {
      wx.navigateTo({
        url: '/pages/order/detail/detail'
      })
    },
    /** 申请售后 */
    clickService() {
      wx.navigateTo({
        url: '/pages/order/service/service'
      })
    },
    /** 评价 */
    clickAssess() {
      wx.navigateTo({
        url: '/pages/order/assess/assess'
      })
    }
  }
})
