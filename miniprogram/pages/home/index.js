const dayjs = require("dayjs");
Page({
  data: {
    showUploadTip: false,
    info: [
      { id: '1', title: '我与春风皆过客,你携秋水揽星河。' },
      { id: '2', title: '愿有岁月可回首,且以深情共白头。' },
      { id: '3', title: '三生有幸遇见你,纵使悲凉也是情。' },
      { id: '4', title: '即许一人以偏爱,愿尽余生之慷慨。' },
      { id: '5', title: '送给最喜欢的周佳佳' }
    ],
    array: [],
    date: dayjs().format('YYYY-MM-DD HH:mm:ss')
  },
  start() {
    console.log(new Date())
    let array = []
    let num = 1
    for (let i = 1; i < 100; i++) {
      array.push({ text: '我与春风皆过客,你携秋水揽星河。', color: '#e058d6', time: num })
      array.push({ text: '愿有岁月可回首,且以深情共白头。', color: '#4c3ade', time: num + 2 })
      array.push({ text: '三生有幸遇见你,纵使悲凉也是情。', color: '#ffe000', time: num + 4 })
      array.push({ text: '即许一人以偏爱,愿尽余生之慷慨。', color: '#00d0ff', time: num + 6 })
      array.push({ text: '送给最喜欢的周佳佳', color: '#ff0000', time: num + 8 })
      num = num + 10
    }
    this.setData({ array: array })
  },
  onShow() {
    setInterval(() => {
      this.setData({date: dayjs().format('YYYY-MM-DD HH:mm:ss')})
    }, 1000)
  }
})
