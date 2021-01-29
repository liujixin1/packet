const app = getApp()
Page({
  data: {
    rouletteData: {
      speed: 10,
      /**转盘速度 */
      award: [{
          level: '谢谢参与',
          prize: '奖品1'
        },
        {
          level: '谢谢参与',
          prize: '奖品2'
        },
        {
          level: '红包封面',
          prize: '奖品4'
        },
        {
          level: '谢谢参与',
          prize: '奖品3'
        },
        {
          level: '谢谢参与',
          prize: '奖品5'
        },
        {
          level: '红包封面',
          prize: '奖品6'
        },
      ],
      /**奖项内容 */
      fontColor: '#ffffff',
      /**文字颜色 */
      font: '14px Arial',
      bgOut: '#ffe774',
      /**外层 */
      bgMiddle: '#ffc046',
      /**中间层 */
      bgInner: ['#5abdb8', '#fdd890', '#90c9ff', '#5abdb8', '#fdd890', '#90c9ff'],
      speedDot: 1000,
      /**点切换速度 */
      dotColor: ['#ffffff', '#b1ffdd'],
      dotColor_1: ['#ffffff', '#b1ffdd'],
      dotColor_2: ['#b1ffdd', '#ffffff'],
      angel: 0 /**选择角度 */
    },
    lotteryNum: 2,
    start: true,
  },
  onLoad: function () {},
  getAngel(e) {
    var that = this;
    let lotteryNum = that.data.lotteryNum;
    let start = that.data.start;
    if (start) {
      console.log(1)
      if (lotteryNum > 0) {
        lotteryNum--;
        this.setData({
          angel: Math.floor(Math.random(1) * 120),
          /**传入的角度 */
          start: false,
          lotteryNum: lotteryNum,
        })
      } else {
        wx.showToast({
          title: '暂无抽奖机会啦~',
          icon: 'none'
        })
      }
    }

  },
  getPrize(e) {
    var that = this;
    console.log(2)
    let angel = that.data.angel;
    let options = that.data.rouletteData;
    let index = parseInt(that.data.angel / 60);

    console.log(index, 9999)
    wx.showToast({
      title: '再接再厉',
      image: '../../images/feel.png',
      duration: 2000,
      success: function (res) {
        that.setData({
          index: index,

          start: true,
          [`rouletteData.angel`]: 0
        })
      }
    })
  },
})