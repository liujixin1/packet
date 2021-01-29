// pages/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "",
    pop: true
  },
  // 登录
  getUserInfo: function (e) {
    const that = this;
    if (e.detail.errMsg == "getUserInfo:ok") {
      console.log(app.globalData)
      if (app.globalData.userInfo) {
        console.log(42432)
        app.login(e, function () {
          wx.navigateTo({
            url: `/pages/prize/prize`
          })
        });

      }else{
        console.log(1111)
      }


    }else{
      console.log(234324)
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    const that = this;
    that.setData({
      img: options.img,
    })
    setTimeout(() => {
      that.setData({
        pop: false
      })
      wx.hideLoading();
    }, 500)
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