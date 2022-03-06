const dayjs = require("dayjs");
Page({
  data: {
    list: [
      { class: 'item-up' },
      { class: 'item-down' },
      { class: 'item-left' },
      { class: 'item-right' },
      { class: 'item-before' },
      { class: 'item-after' },
    ],
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  },
  getTime() {
    let start = dayjs('2022-02-08 22:14:00').valueOf()
    let end = dayjs(new Date()).valueOf()
    let num = end - start;
    //天数
    var days = Math.floor(num / (24 * 3600 * 1000))
    //计算出小时数 
    var leave1 = num % (24 * 3600 * 1000)  //计算天数后剩余的毫秒数 
    var hours = Math.floor(leave1 / (3600 * 1000))
    //计算相差分钟数 
    var leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数 
    var minutes = Math.floor(leave2 / (60 * 1000))
    //计算相差秒数 
    var leave3 = leave2 % (60 * 1000)   //计算分钟数后剩余的毫秒数 
    var seconds = Math.round(leave3 / 1000)
    return {
      days, hours, minutes, seconds
    }
  },
  onLoad() {
    this.getTime()
    setInterval(() => {
      const { days, hours, minutes, seconds } = this.getTime()
      this.setData({ day: days, hour: hours, minute: minutes, second: seconds })
    }, 1000)
  },
  backmusic() {
    let back = wx.getBackgroundAudioManager()
    player()
    function player() {
      back.title = "好有意思";   // 必须要有一个title
      back.src = "http://link.hhtjim.com/163/20953761.mp3";
      back.onEnded(() => {
        player()
      })
    }
  },
})
