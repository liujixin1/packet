// pages/placard1/placard1.js
const db = wx.cloud.database();
import Card from '../../../../palette/card4';
const app = getApp()
Page({
  imagePath: '',
  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg4.jpg",
    bgCenterImg: [
      'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg4_center1.png',
      'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg4_center2.png',
      'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg4_center3.png',
      'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg4_center4.png',
      'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg4_center5.png'
    ],

    template: {},
    image: '',
    opType: true,
    formData: [],
    show: false,
    dataCenter: null,
    dataId: null
  },
  onImgOK(e) {
    this.imagePath = e.detail.path;
    this.setData({
      image: this.imagePath
    })
    console.log(e);
  },

  //保存图片
  saveImage() {
    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.writePhotosAlbum']) {
          wx.showLoading({
            title: '海报保存中...',
            mask: true
          })
          setTimeout(() => {
            var pic = that.imagePath
            wx.saveImageToPhotosAlbum({
              filePath: pic,
              success: function (res) {
                wx.hideLoading()
                if (res.errMsg == "saveImageToPhotosAlbum:ok") {
                  wx.showModal({
                    content: '海报保存成功，快去分享吧',
                    showCancel: false,
                    success() {
                      app.putData(that.data.dataId, that.data.dataCenter)
                    }
                  })
                }

              },
              fail(err) {
                wx.hideLoading()
                wx.showModal({
                  content: '海报保存失败，请重新保存海报',
                  showCancel: false,
                })
                console.log(err)
              }
            })
          }, 5000)
        } else {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              wx.showLoading({
                title: '海报保存中...',
                mask: true
              })
              setTimeout(() => {
                var pic = that.imagePath
                wx.saveImageToPhotosAlbum({
                  filePath: pic,
                  success: function (res) {
                    wx.hideLoading()
                    if (res.errMsg == "saveImageToPhotosAlbum:ok") {
                      wx.showModal({
                        content: '海报保存成功，快去分享吧',
                        showCancel: false,
                        success() {
                          app.putData(that.data.dataId, that.data.dataCenter)
                        }
                      })
                    }

                  },
                  fail(err) {
                    wx.hideLoading()
                    wx.showModal({
                      content: '海报保存失败，请重新保存海报',
                      showCancel: false,
                    })
                    console.log(err)
                  }
                })
              }, 5000)
            },
            fail() {
              that.setData({
                opType: false
              })
              console.log(123123)
            }
          })

        }
      }
    })
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.showLoading({
      title: '生成海报',
    })

    let arr = [];
    arr[0] = Math.floor(Math.random() * 5);
    arr[1] = that.data.bgCenterImg;
    that.setData({
      formData: arr,
      dataId: options.id
    })
    setTimeout(() => {
      that.setData({
        show: true
      })
      wx.hideLoading()
    }, 2000)
    that.getData(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const that = this;
    that.setData({
      template: new Card().palette(that.data.formData),
    });

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.writePhotosAlbum']) {
          that.setData({
            opType: true
          })
        } else {
          console.log(2)
        }
      }
    })
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

  }
})