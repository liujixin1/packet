// pages/part//pages/testPaper6/testPaper6.js
const db = wx.cloud.database();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg6-1-1.jpg",
    userMax: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg6-1-2.png",
    userMin: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg6-1-3.png",
    xin: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg6-1-4.png",
    title:'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg6-1-5.png',
    listId: "",
    dataCenter: '',
    manName: '',
    woManName: ''
  },
  getData(id) {
    const that = this;
    wx.showLoading({
      title: '加载中...'
    })
    db.collection('test').doc(id).get().then(res => {
      setTimeout(() => {
        wx.hideLoading()
      }, 500)
      that.setData({
        dataCenter: res.data
      })
    })
  },
  //输入男生名字
  bindMan:function(e){
   const that = this;
   that.setData({
     manName: e.detail.value
   })
  },
  //输入女生名字
  bindWoMan: function (e) {
    const that = this;
    that.setData({
      woManName: e.detail.value
    })
  },
  // 登录
  getUserInfo: function (e) {
    const that = this;
    if (!that.data.manName) {
      wx.showModal({
        content: '请输入男生姓名',
        showCancel: false,
      })
    } else {
      console.log(that.data.woManName,11111)
      if (!that.data.woManName) {
        wx.showModal({
          content: '请输入女生姓名',
          showCancel: false,
        })
      } else {
        if (e.detail.errMsg == "getUserInfo:ok") {
          wx.showLoading({
            title: '生成海报'
          })
          if (app.globalData.userInfo) {
            that.getAvatarUrl(app.globalData.userInfo.avatarUrl)
          } else {
            app.login(e, function () {
              that.getAvatarUrl(app.globalData.userInfo.avatarUrl)
            });
          }
        }
      }
    }

  },
  //头像链接转换
  transitionImg(src) {
    let top = 'cloud://home-520bf8.686f-home-520bf8-1255630290/';
    let imgUrl = src.split(top);
    return 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/' + imgUrl[1];
  },
  getAvatarUrl(avatarUrl) {
    const that = this;
    //获取图片信息
    wx.getImageInfo({
      src: avatarUrl,
      success: function (res) {
        //上传图片
        const tempFilePaths = res.path;
        //声明图片名字为时间戳和随机数拼接成的，尽量确保唯一性
        let time = Date.now() + parseInt(Math.random() * 999) + parseInt(Math.random() * 2222);
        //拓展名
        var fileExt = tempFilePaths.replace(/.+\./, "");
        //拼接成图片名
        let keepname = 'userImg/' + time + '.' + fileExt;
        wx.cloud.uploadFile({
          cloudPath: keepname,
          filePath: tempFilePaths, // 文件路径
        }).then(e => {

          let imgUrl = that.transitionImg(e.fileID)
          wx.hideLoading()
          wx.navigateTo({
            url: `/pages/part/pages/placard6/placard6?manName=${that.data.manName}&woManName=${that.data.woManName}&id=${that.data.listId}&userImg=${imgUrl}`
          })
        }).catch(error => {
          // handle error
        })

      },
      fail: function (srev) {
        console.log(srev);
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that.setData({
      listId: options.id
    })
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 500)
    // that.getData(options.id)
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