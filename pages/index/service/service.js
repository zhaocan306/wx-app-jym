// pages/service/service.js
Component({
  properties: {

  },
  data: {
    cur_index: 1,
    list: [
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
    ],
  },
  methods: {
    chooseType(e) {
      const index = e.currentTarget.dataset.id;
      this.setData({
        cur_index: index
      })
    }
  }
})
