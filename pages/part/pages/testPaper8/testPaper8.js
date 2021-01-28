// pages/part//pages/testPaper8/testPaper8.js
const db = wx.cloud.database();
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trophy: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-1.png",
    btn1: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-3.png",
    btn2: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-2.png",
    vs: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-4.png",
    one: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-5.png",
    two: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-6.png",
    three: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-7.png",
    leftHeight: 50,
    rightHeight: 50,
    popText: '',
    timeBool: false,
    bool: false,
    dataCenter: null,
    dataId: null,
    timeImgList: [
      'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-7.png',
      'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-6.png',
      'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-5.png',
    ],
    timeImg: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg8-1-7.png'
  },
  //再来一局
  renewal() {
    const that = this;
    that.setData({
      timeBool: true,
      bool: false,
      popText: '',
      leftHeight: 50,
      rightHeight: 50,

    })
    that.timeFun()
  },
  //返回首页
  goIndex() {
    const that = this;
    app.putData(that.data.dataId, that.data.dataCenter)
  },
  leftBtn() {
    const that = this;
    if (that.data.leftHeight == 100) {
      that.setData({
        bool: true,
        popText: '红方获胜'
      })
    } else {
      that.setData({
        leftHeight: that.data.leftHeight + 5,
        rightHeight: that.data.rightHeight - 5,
      })
    }

  },
  rightBtn() {
    const that = this;
    if (that.data.rightHeight == 100) {
      that.setData({
        bool: true,
        popText: '蓝方获胜'
      })
    } else {
      that.setData({
        leftHeight: that.data.leftHeight - 5,
        rightHeight: that.data.rightHeight + 5,
      })
    }

  },
  //获取数据
  getData(id) {
    const that = this;
    db.collection('test').doc(id).get().then(res => {
      that.setData({
        dataCenter: res.data
      })
    })
  },
  timeFun() {
    const that = this;
    that.setData({
      timeBool: true
    })
    let index = 0;
    let time = setInterval(() => {
      index += 1;
      if (index == 3) {
        that.setData({
          timeImg: that.data.timeImgList[0],
          timeBool: false
        })
        clearInterval(time)

      } else {
        that.setData({
          timeImg: that.data.timeImgList[index],

        })
      }

    }, 1000)


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    setTimeout(() => {
      that.timeFun()
    }, 2000)
    that.setData({
      dataId: options.id,
    })
    that.getData(options.id)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})