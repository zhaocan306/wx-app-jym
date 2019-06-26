const serviceType = [
  {
    title: '美食',
    list: [
      {
        title: '便利超市',
        icon: '/images/svg/ico_tuofeng_shangdian.svg'
      },
      {
        title: '外卖',
        icon: '/images/svg/ico_tuofeng_food.svg'
      },
      {
        title: '送餐服务',
        icon: '/images/svg/ico_tuofeng_waimai.svg'
      },
      {
        title: '水果',
        icon: '/images/svg/ico_tuofeng_shuiguo.svg'
      }
    ]
  },
  {
    title: '住宿',
    list: [
      {
        title: '酒店',
        icon: '/images/svg/ico_tuofeng_hotel.svg'
      },
      {
        title: '民宿',
        icon: '/images/svg/ico_tuofeng_minsu.svg'
      },
      {
        title: '钟点房',
        icon: '/images/svg/ico_tuofeng_zhongdianf.svg'
      }
    ]
  },
  {
    title: '服务',
    list: [
      {
        title: '干洗',
        icon: '/images/svg/ico_tuofeng_ganxi.svg'
      },
      {
        title: '跑腿',
        icon: '/images/svg/ico_tuofeng_log.svg'
      }
    ]
  },
  {
    title: '娱乐',
    list: [
      {
        title: 'KTV',
        icon: '/images/svg/ico_tuofeng_ktv.svg'
      },
      {
        title: '棋牌',
        icon: '/images/svg/ico_tuofeng_qipai.svg'
      },
      {
        title: '电影',
        icon: '/images/svg/ico_tuofeng_movie.svg'
      }
    ]
  }
]
const deliveryList = [
  {
    title: '即时送达 默认15分钟送达',
    price: '(1元配送费)',
    type: true,
    code: 1
  },
  {
    title: '5分钟送达',
    price: '(5元配送费)',
    type: false,
    code: 2
  },
  {
    title: '10分钟送达',
    price: '(2元配送费)',
    type: false,
    code: 3
  }
]
const messageList = [
  {
    name: '幸运大转盘',
    type: 1,
    img: '/images/svg/ico_my_luck.svg'
  },
  {
    name: '我的地址',
    type: 2,
    img: '/images/svg/ico_my_dizhi.svg'
  },
  {
    name: '售后服务',
    type: 3,
    img: '/images/svg/ico_my_service.svg'
  },
  {
    name: '个人认证',
    type: 4,
    img: '/images/svg/ico_my_renzheng.svg'
  },
  {
    name: '绑定银行卡',
    type: 5,
    img: '/images/svg/ico_my_card.svg'
  },
  {
    name: '设置支付密码',
    type: 6,
    img: '/images/svg/ico_my_password.svg'
  },
  {
    name: '我的评价',
    type: 7,
    img: '/images/svg/ico_my_com.svg'
  },
  {
    name: '管家服务',
    type: 8,
    img: '/images/svg/ico_my_window.svg'
  }
]
const editList = [
  {
    type: 1,
    name: '头像',
    img: '/images/png/head.png'
  },
  {
    type: 2,
    name: '昵称',
    content: '家有马'
  },
  {
    type: 3,
    name: '性别',
    content: '男'
  },
  {
    type: 4,
    name: '手机',
    content: '修改手机号码'
  },
  {
    type: 5,
    name: '会员等级',
    content: '普通会员'
  }
]
const serviceList = [
  {
    name: "获取WIFI",
    id: 1,
    iconPath: '/images/svg/icon_service_wifi_default.svg',
    selectedIconPath: '/images/svg/icon_service_wifi.svg'
      },
  {
    name: "电话呼叫",
    id: 2,
    iconPath: '/images/svg/icon_service_tel_default.svg',
    selectedIconPath: '/images/svg/icon_service_tel.svg'
      },
  {
    name: "房间打扫",
    id: 3,
    iconPath: '/images/svg/icon_service_clean_default.svg',
    selectedIconPath: '/images/svg/icon_service_clean.svg'
      },
  {
    name: "预约发票",
    id: 4,
    iconPath: '/images/svg/icon_service_ticket_default.svg',
    selectedIconPath: '/images/svg/icon_service_ticket.svg'
      },
  {
    name: "投诉吐槽",
    id: 5,
    iconPath: '/images/svg/icon_service_complaint_default.svg',
    selectedIconPath: '/images/svg/icon_service_complaint.svg'
      },
  {
    name: "工程报修",
    id: 6,
    iconPath: '/images/svg/icon_service_wifi_repair_default.svg',
    selectedIconPath: '/images/svg/icon_service_wifi_repair.svg'
      },
  {
    name: "生活缴费",
    id: 7,
    iconPath: '/images/svg/icon_service_pay_default.svg',
    selectedIconPath: '/images/svg/icon_service_pay.svg'
      },
  {
    name: "订房管理",
    id: 8,
    iconPath: '/images/svg/icon_service_room_default.svg',
    selectedIconPath: '/images/svg/icon_service_room.svg'
      },
  {
    name: "租赁管理",
    id: 9,
    iconPath: '/images/svg/icon_service_clean_rent_default.svg',
    selectedIconPath: '/images/svg/icon_service_clean_rent.svg'
      }
]
export {
  serviceType,
  deliveryList,
  messageList,
  editList,
  serviceList
}