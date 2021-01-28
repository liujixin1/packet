// pages/placard7/placard7.js
const db = wx.cloud.database();
import Card from '../../../../palette/card7';
const app = getApp()
Page({
  imagePath: '',
  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg7-2-1.jpg",
    bgImg1: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg7-2-2.jpg',
    bgImg2: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg7-2-3.png',
    num:35.9,
    numResult:"肥胖",
    numText:'体重超标太多,一定要控制饮食哦~',
    template: {},
    image: '',
    opType: true,
    show: false,
    dataCenter: null,
    dataId: null,
    userImg: ''
  },
  onImgOK(e) {
    this.imagePath = e.detail.path;
    this.setData({
      image: this.imagePath
    })
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

    that.setData({
      num: options.num,
      dataId: options.id,
      // userImg: options.userImg
    })
    if(options.num < 15){
      that.setData({
        numResult:'严重偏瘦',
        numText:'体重偏瘦太多,一定要加强营养哦~',
      })
    }else if(options.num >= 15 && options.num <=18.5){
      that.setData({
        numResult:'偏瘦',
        numText:'体重偏瘦,适量要加强营养哦~',
      })
    }else if(options.num > 18.5 && options.num <=24.9){
      that.setData({
        numResult:'标准',
        numText:'体重标准,合理控制饮食哦~',
      })
    }else if(options.num >= 25 && options.num <=29.9){
      that.setData({
        numResult:'超重',
        numText:'体重超标,要适量控制饮食哦~',
      })
    }else if(options.num >= 30){
      that.setData({
        numResult:"肥胖",
        numText:'体重超标太多,一定要控制饮食哦~'
      })
    }


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
      template: new Card().palette(that.data.num, that.data.numResult,that.data.numText)
    })
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