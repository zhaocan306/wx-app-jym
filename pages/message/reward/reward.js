// pages/message/reward/reward.js
import { toast } from '../../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    size: { //转盘大小可配置
      w: 620,
      h: 620
    },
    xiaojuedingArr: [
      {
        id: 0,
        option: '真心话大冒险？',
        awards: [
          {
            name: "张新发槟榔",
            color: '#3276FC'
          },
          {
            name: "湘潭铺子",
            color: '#55B9FB'
          },
          {
            name: "蓝色妖姬",
            color: '#3276FC'
          },
          {
            name: "叼嘴巴",
            color: '#55B9FB'
          },
          {
            name: "和成天下",
            color: '#3276FC'
          },
          {
            name: "口味王",
            color: '#55B9FB'
          },
          {
            name: "枸杞槟榔",
            color: '#3276FC'
          },
          {
            name: "天生有范",
            color: '#55B9FB'
          }   
        ]
      }
    ]
  },
  //接收当前转盘初始化时传来的参数
  getData(e) {
    this.setData({
      awardsConfig: e.detail,
    })
  },

  //接收当前转盘结束后的答案选项
  getAwards(e) {

    toast('恭喜您抽中了' + e.detail.s_awards + '一包！')
    this.setData({
      s_awards: e.detail.end ? "？" : e.detail.s_awards,
      share: e.detail.end ? true : false,
    })
  },

  //开始转
  startZhuan(e) {
    this.setData({
      zhuanflg: e.detail ? true : false
    })
  }
})