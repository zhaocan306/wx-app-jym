//创建并返回内部 audio 上下文 innerAudioContext 对象
const start = wx.createInnerAudioContext();
const mid = wx.createInnerAudioContext();
const stop = wx.createInnerAudioContext();

var app = getApp(), timer = null;

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   * 用于组件自定义设置   组件的对外属性
   */
  properties: {
    probability: {
      type: Boolean, // 概率开关，默认随机 false
      value: false
    },

    fastJuedin: {
      type: Boolean, // 快速转动转盘的开关，默认false
      value: false
    },

    repeat: {
      type: Boolean, // 重复抽取开关，默认false
      value: false
    },

    size: {
      type: Object, // 转盘大小，宽高单位rpx
    },

    zhuanpanArr: { // 可以切换的转盘选项, 支持多个
      type: Array,
      value: [
        {
          id: 0,
          option: '转盘的标题名称',
          awards: [
            {
              id: 0,
              name: "最多17个选项", // 选项名
              color: 'red',        // 选项的背景颜色
              probability: 0       // 概率
            },
            {
              id: 1,
              name: "选项最多填13字", // 超过9个字时字体会变小点
              color: 'green',
              probability: 0
            }
          ],
        }
      ]
    },
    // 限制：最多17个选项， 单个选项最多填10-13个字, 选项名称最多21个字
    awardsConfig: { // 默认的当前转盘选项 
      type: Object,
      value: {
        awards: [
          {
            id: 0,
            name: "最多17个选项",
            color: 'red',
            probability: 0
          },
          {
            id: 1,
            name: "选项最多填13字",
            color: 'green',
            probability: 0
          }
        ],
      }
    }
  },
  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染   
   */
  data: {
    animationData: {}, // 转盘动画
    zhuanflg: false,   // 转盘是否可以点击切换的标志位
    fastTime: 7600,    // 转盘快速转动的时间
    slowTime: 3900,    // 转盘慢速转动的时间
    block1: 'block',   // 转盘中心的图片标志位，用来显示隐藏
  },

  //组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
  created() {
    
  },

  // 组件生命周期函数，在组件实例进入页面节点树时执行
  attached() {
    this.setData({
      awardsConfig: this.data.zhuanpanArr[0]
    })
    this.initAdards();
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    //初始化数据
    initAdards() {
      var that = this, awardsConfig = that.data.awardsConfig;
      var t = awardsConfig.awards.length;  // 选项长度
      var e = 1 / t, i = 360 / t, r = i - 90;

      for (var g = 0; g < t; g++) {
        //当前下标 * 360/长度 + 90 - 360/长度/2
        awardsConfig.awards[g].item2Deg = g * i + 75 - i / 2 + "deg";
        awardsConfig.awards[g].item3Deg = g * i + 7.5 - i / 2 + "deg";
        awardsConfig.awards[g].afterDeg = r + "deg";
      }

      that.setData({
        turnNum: e, // 页面的单位是turn
        awardsConfig: awardsConfig,
      })

      that._change();//向父组件传出当前转盘的初始数据
    },

    //重置转盘
    reset() {
      var that = this, awardsConfig = that.data.awardsConfig;
      console.log(awardsConfig);
      var animation = wx.createAnimation({
        duration: 1,
        timingFunction: "linear"
      });
      that.animation = animation;
      animation.rotate(0).step(), app.runDegs = 0;

      that.setData({
        animationData: animation.export()
      })

      for (let x in awardsConfig.awards) {
        awardsConfig.awards[x].opacity = '1';
      }

      setTimeout(function () {
        that.setData({
          awardsConfig: awardsConfig,
        })

        that._myAwards(true);
      }, 300)
    },

    //父组件需要切换当前转盘的选项
    //如果有需要切换不同转盘的选项时，可以调用这方法
    //obj: 转盘的数据
    //flag: 当转盘在转动过程中的标志位，默认可不传
    switchZhuanpan(data, flag) {
      this.setData({
        awardsConfig: data,
        zhuanflg: false,
      })
      this.initAdards();

      if (flag) {
        this.reset();
        clearTimeout(timer);
        start.stop();
        mid.stop();
        stop.stop();
        wx.removeStorageSync('repeatArr');
      }
    },



    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件,过triggerEvent来给父组件传递信息的
    * 写法： this.triggerEvent('cancelEvent', { num: 1 })  // 可以将num通过参数的形式传递给父组件
    */

    // GO转盘开始转动
    _zhuan() {
      var that = this;
      var awardsConfig = that.data.awardsConfig;

      //>>> 是无符号移位运算符
      var r = Math.random() * awardsConfig.awards.length >>> 0, runNum = 8;


      /*=============不重复抽取=============*/
      if (that.data.repeat) {
        r = that._queryRepeat(r);
      } else {
        wx.removeStorageSync('repeatArr');

        console.log('是否开启了概率？？？', that.data.probability);
        //开启概率 probability这属性必须要传个ture
        if (that.data.probability) {
          r = that._openProbability();
        }
      }
      /*=============不重复抽取=============*/
      setTimeout(function () {

        //要转多少度deg
        app.runDegs = app.runDegs || 0, app.runDegs = app.runDegs + (360 - app.runDegs % 360) + (2160 - r * (360 / awardsConfig.awards.length));

        var animation = wx.createAnimation({
          duration: that.data.fastJuedin ? that.data.slowTime : that.data.fastTime,
          timingFunction: "ease"
        });
        that.animation = animation;

        //这动画执行的是差值 
        //如果第一次写rotate（360） 那么第二次再写rotate（360）将不起效果
        animation.rotate(app.runDegs).step(), 0 == r && (app.runDegs = 0);

        that.setData({
          animationData: animation.export(),
          zhuanflg: true,
        })

        that._setatZhuan(true);
      }, 100);

      timer = setTimeout(function () {

        that.setData({
          animationData: {},
          s_awards: awardsConfig.awards[r].name,//最终选中的结果
          awardsConfig: awardsConfig
        })

        that._myAwards(false);
        that._setatZhuan(false);
      }, that.data.fastJuedin ? that.data.slowTime : that.data.fastTime);
    },


    // 开启概率 
    // 传 1-100 的数 来设置选项的权重  
    // 传入0的话就永远摇不到这个选项
    _openProbability() {
      var that = this, awards = that.data.awardsConfig.awards, arr = [];
      //5, 5, 20, 10 ,30 ,30, 0
      for (let i in awards) {
        if (awards[i].probability != 0) {
          for (var x = 0; x < awards[i].probability; x++) {
            //把当前的概率数字 以当前选项下标的形式 都添加都空数组中，然后随机这个数组
            arr.push(i);
          }
        }
      }
      var s = Math.floor(Math.random() * arr.length);
      return arr[s];
    },

    //不重复抽取
    //r:随机数 当前选项进行随机
    _queryRepeat(r) {
      var that = this, flag = true, repeatArr = wx.getStorageSync('repeatArr'), repeatArr2 = [], awardsConfig = that.data.awardsConfig;
      if (that.isNull(repeatArr)) {
        repeatArr2.push(r), wx.setStorageSync('repeatArr', repeatArr2);
        return r;
      } else {
        var len = awardsConfig.awards.length, r = Math.random() * len >>> 0;
        for (let i in repeatArr) {
          if (r == repeatArr[i]) {
            flag = false;
            if (repeatArr.length == len) {
              wx.removeStorageSync('repeatArr');
              repeatArr2.push(r), wx.setStorageSync('repeatArr', repeatArr2);
              return r;
            } else {
              return that._queryRepeat();//递归调用
            }
          }
        }
        if (flag) {
          repeatArr.push(r), wx.setStorageSync('repeatArr', repeatArr);
          return r;
        }
      }
    },

    //初始化数据时向外传的参
    _change() {
      this.triggerEvent('myData', this.data.awardsConfig);// 向父组件传出当前决定的数组数据
    },

    //当前转盘的结果   e:转盘什么时候能点击的标志位
    _myAwards(e) {
      this.triggerEvent('myAwards',
        {
          s_awards: this.data.s_awards, end: e
        });
    },

    //转盘开始转动或者结速转动后的要传的值
    _setatZhuan(e) {
      this.triggerEvent('startZhuan', e); // 向父组件传出当前决定的数组数据
    },

  }
})