/** 时间转换 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/** 当商品名过长的时候,将多余的替换成省略号 */
const getChangeString = str => {
  var obj = str.substring(0,20);
  return obj + '...'
}

/** 封装微信弹框 */
const toast = (title = '', icon = 'none') => {
  wx.showToast({
    title,
    icon,
    duration: 3000
  })
}

/** 价格转换 */
const changePrice = price => {
  var reg = /.*\..*/;
  if(reg.test(price)) {
    return price + '00'
  }
  return price + '.00'
}

module.exports = {
  formatTime: formatTime,
  getChangeString,
  toast,
  changePrice
}
