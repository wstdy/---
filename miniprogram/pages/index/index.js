Page({
  data: {

  },
  onLoad() {
    this.backmusic()
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
