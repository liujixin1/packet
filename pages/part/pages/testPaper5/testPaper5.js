// pages/part//pages/testPaper5/testPaper5.js
const db = wx.cloud.database();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg5.jpg",
    bgImg1: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg5_2.png',
    nameList: ['王', '李', '张', '刘', '陈', '杨', '黄', '赵', '吴', '周', '徐', '孙', '马', '朱', '胡', '林', '郭', '何', '高', '罗', '郑', '梁', '谢', '宋', '唐', '许', '邓', '冯', '韩', '曹', '曾', '彭', '萧', '蔡', '潘', '田', '董', '袁', '于', '余'],
    name: '王',
    setInter: '',
    nameArr: [],
    start: false
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
  // 登录
  getUserInfo: function (e) {
    const that = this;
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
  },
 
  // 定时器
  nameCarousel() {
    const that = this;
    let arr = that.data.nameList;
    let len = arr.length - 1;
    let sum = 0;
    that.data.setInter = setInterval(() => {
      if (sum == len) {
        sum = 0
      }
      that.setData({
        name: arr[sum]
      })
      sum++;
    }, 50)
  },
  //开启
  start() {
    const that = this;
    that.setData({
      start: !that.data.start
    })
    that.nameCarousel()
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
        let keepname = 'userImg/'+time + '.' + fileExt;
        wx.cloud.uploadFile({
          cloudPath: keepname,
          filePath: tempFilePaths, // 文件路径
        }).then(e => {

          let imgUrl = that.transitionImg(e.fileID)
          wx.hideLoading()
          wx.navigateTo({
            url: `/pages/part/pages/placard5/placard5?name=${that.data.name}&id=${that.data.listId}&userImg=${imgUrl}`
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
  // 暂停
  pause() {
    const that = this;
    let arr = that.data.nameArr;
    arr.push(that.data.name)
    that.setData({
      start: !that.data.start,
      nameArr: arr
    })
    clearInterval(that.data.setInter)
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
    that.getData(options.id)
    that.nameCarousel()
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
  onlaunch: function () {

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
    const that = this;
    return {
      title: that.data.dataCenter.name,
      imageUrl: that.data.dataCenter.img
    }
  }
})