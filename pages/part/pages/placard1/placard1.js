// pages/placard1/placard1.js
import Card from '../../../../palette/card1';
const db = wx.cloud.database();
const app = getApp()
Page({

  imagePath: '',
  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg1.jpg",
    qrImg: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/qr.jpg',
    correctImg:'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg1-2-1.png',
    errImg:'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg1-2-2.png',

    template: {},
    image: '',
    opType: true,
    formData: {
      one: [],
      two: [],
      three: []
    },
    sohw: false,
    dataCenter: null,
    dataId: null
  },
  onImgOK(e) {
    this.imagePath = e.detail.path;
    this.setData({
      image: this.imagePath
    })
  },
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
                      wx.switchTab({
                        url: '/pages/index/index'
                      })
                    }
                  })
                }

              },
              fail(err) {
                wx.hideLoading()
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
                          wx.switchTab({
                            url: '/pages/index/index'
                          })
                        }
                      })
                    }

                  },
                  fail(err) {
                    wx.hideLoading()
                    console.log(err)
                  }
                })
              }, 5000)
            },
            fail() {
              that.setData({
                opType: false
              })
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

    let one = options.one;
    let two = options.two;
    let three = options.three
    // let one = "A,D,C,D,C,B,D,B,B,C";
    // let two = "13079221320,werw,werewrw,2020-01-22,2020-01-22";
    // let three = "1,2,1,2,1"
    that.setData({
      [`formData.one`]: one.split(','),
      [`formData.two`]: two.split(','),
      [`formData.three`]: three.split(','),
      [`formData.userImg`]: options.userImg
    })
    let phone = this.data.formData.two[0];
    that.setData({
      [`formData.two[0]`]: that.encryptPhone(phone),
      dataId: options.id
    })

    setTimeout(() => {
      that.setData({
        show: true
      })
    }, 2000)
    that.getData(options.id)

  },
  //手机号加密
  encryptPhone(phone) {
    let arr = phone.split('');
    arr[3] = '*'
    arr[4] = '*'
    arr[5] = '*'
    arr[6] = '*'
    let phoneStr = arr.join('');
    return phoneStr;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const that = this;
    that.setData({
      template: new Card().palette(that.data.formData),
    });
    setTimeout(() => {
      wx.hideLoading()
    }, 1000)
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