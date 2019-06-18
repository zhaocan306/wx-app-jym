// pages/message/steward/steward.js
let windowWidth = 0;
let itemWidth = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sliderOffset: 0,
    sliderOffsets: [],
    sliderLeft: 0,
    tabs: ["房间打扫", "预约发票", "投诉吐槽", "工程保修", "生活缴费"],
    tab1Index: 0,
    list: [
      {
        code: 0,
        room: '6-232',
        time: '12-25 12:01',
        type: '清洁浴室、更换被套'
      },
      {
        code: 1,
        time: '12-25 12:01',
        type: '增值税普通发票',
        price: 256,
        head: '湖南睿点酒店管理有限公司',
        number: '328888888',
        remarks: '金额150、106分开开两张'
      },
      {
        code: 2,
        time: '12-25 12:01',
        type: '硬件设施',
        content: '酒店空调制冷效果差'
      },
      {
        code: 3,
        type: '硬件设备报修',
        content: '水龙头漏水',
        time: '12-25 12:02',
        room: '6-232',
        phone: '186732728299'
      },
      {
        code: 4,
        unit: '维也纳国际酒店',
        id: '13265',
        cleanTime: '12-25 12:02',
        address: '德思勤A71207',
        price: 268,
        time: '12-25 12:02'
      },
      {
        code: 0,
        room: '6-232',
        time: '12-25 12:01',
        type: '清洁浴室、更换被套'
      },
      {
        code: 0,
        room: '6-232',
        time: '12-25 12:01',
        type: '清洁浴室、更换被套'
      },
      {
        code: 0,
        room: '6-232',
        time: '12-25 12:01',
        type: '清洁浴室、更换被套'
      },
      {
        code: 0,
        room: '6-232',
        time: '12-25 12:01',
        type: '清洁浴室、更换被套'
      },
      {
        code: 0,
        room: '6-232',
        time: '12-25 12:01',
        type: '清洁浴室、更换被套'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.clueOffset();
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
})