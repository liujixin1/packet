// pages/index/index.js
const db = wx.cloud.database();
const time = require('../../utils/util.js');
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    banner: [],
    page: 0,
    // status: null,
    isEnd: false
  },
  toArticleDetail(e) {
    const id = e.currentTarget.dataset.id;
    const status = e.currentTarget.dataset.status;
    const itemid = e.currentTarget.dataset.itemid;
    // console.log(e,111111)
    switch(itemid){
      case '1':
        wx.navigateTo({
          url: `/pages/part/pages/testPaper1/testPaper1?id=${id}`
        })
        break;
        case '2':
          wx.navigateTo({
            url: `/pages/part/pages/details/details?id=${id}&itemid=${itemid}`
          })
        break;
        case '3':
          wx.navigateTo({
            url: `/pages/part/pages/testPaper3/testPaper3?id=${id}`
          })
        break;
        case '4':
          wx.navigateTo({
            url: `/pages/part/pages/testPaper4/testPaper4?id=${id}`
          })
        break;
        case '5':
        wx.navigateTo({
          url: `/pages/part/pages/testPaper5/testPaper5?id=${id}`
        })
        break;
      case '6':
        wx.navigateTo({
          url: `/pages/part/pages/testPaper6/testPaper6?id=${id}`
        })
        break;
      case '7':
        wx.navigateTo({
          url: `/pages/part/pages/testPaper7/testPaper7?id=${id}`
        })
        break;
        case '8':
        wx.navigateTo({
          url: `/pages/part/pages/testPaper8/testPaper8?id=${id}`
        })
        break;
      default:
        wx.showModal({
          content: '功能开发中，敬请期待！',
          showCancel: false,
        })

    }
  },
  getData() {
    const that = this;
    that.setData({
      page:0
    })
    let PAGE = 5;
    let page = 0;
    wx.showLoading({
      title: '加载中...',
    })
    db.collection('test').where({
      show: true
    }).skip(page * PAGE).limit(PAGE).orderBy('date', 'desc').get().then(res => {
      wx.hideLoading();
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
      res.data.forEach(res => {
        res.date = time.formatTime(res.date)
      })
      that.setData({
        listData: res.data,
        isEnd: false,
        // status: 1
      })
    })
    db.collection('test').where({
      banner: true,
      show: true
    }).orderBy('date', 'desc').get().then(res => {
      that.setData({
        banner: res.data
      })
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that.setData({
      navH: app.globalData.navHeight
    })
    that.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {

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
    const that = this;
    that.setData({
      page: 0
    })
    wx.showNavigationBarLoading()
    that.getData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const that = this;
    if (!that.data.isEnd) {
      wx.showLoading({
        title: '加载中...',
      })
    }
    let page = that.data.page;
    page++;
    const PAGE = 5;
    // if (that.data.status == 1) {
      db.collection('test').where({
        show: true
      }).skip(page * PAGE).limit(PAGE).orderBy('date', 'desc').get().then(res => {
        wx.hideLoading();
        wx.stopPullDownRefresh();
        wx.hideNavigationBarLoading();
        if (res.data.length == 0) {
          that.setData({
            isEnd: true
          })
        } else {
          const listData = that.data.listData;
          res.data.forEach(res => {
            res.date = time.formatTime(res.date);
            listData.push(res)
          })
          that.setData({
            page,
            listData
          })
        }
      })
    // } else if (that.data.status == 0) {
    //   db.collection('articleLists').skip(page * PAGE).limit(PAGE).orderBy('date', 'desc').get().then(res => {
    //     wx.hideLoading();
    //     wx.stopPullDownRefresh();
    //     wx.hideNavigationBarLoading();
    //     if (res.data.length == 0) {
    //       that.setData({
    //         isEnd: true
    //       })
    //     } else {
    //       const listData = that.data.listData;
    //       res.data.forEach(res => {
    //         res.date = time.formatTime(res.date);
    //         listData.push(res)
    //       })
    //       that.setData({
    //         page,
    //         listData
    //       })
    //     }

    //   })
    // }


  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})