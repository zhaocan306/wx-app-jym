// pages/order/assess/assess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starCheckedImgUrl: "/images/svg/img_checked.svg",
    starUnCheckedImgUrl: "/images/svg/img_unchecked.svg",
    starMap: ["非常差","差","一般","好","非常好"],
    evaluations: [
      {
        id: 0,
        name: "服务评价",
        star: 0,
        note: ""
      },
      {
        id: 1,
        name: "配送评价",
        star: 0,
        note: ""
      },
      {
        id: 2,
        name: "商品评价",
        star: 0,
        note: ""
      }
    ]
  },
  chooseStar(e) {
    const index = e.currentTarget.dataset.index;
    const star = e.target.dataset.star;
    let evaluations = this.data.evaluations;
    let evaluation = evaluations[index];
    evaluation.star = star;
    evaluation.note = this.data.starMap[star - 1]
    this.setData({
      evaluations: evaluations
    })
  }
})