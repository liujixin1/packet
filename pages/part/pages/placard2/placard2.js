// pages/placard1/placard1.js
import Card from '../../../../palette/card2';
const db = wx.cloud.database();
const app = getApp()
Page({

  imagePath: '',
  /**
   * 页面的初始数据
   */
  data: {
    template: {},
    image: '',
    opType: true,
    formData: {
      one: [],
      two: [],
      three: [],
      height: '',
      oneName: '灵魂年龄',
      twoName: '恋爱年龄',
      twoName: '外在年龄',
      userImg: ''
    },
    bgImg: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg2.jpg",
    qrImg: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/qr.jpg',
    show: false,
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
                      app.putData(that.data.dataId, that.data.dataCenter)
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
                          app.putData(that.data.dataId, that.data.dataCenter)
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
  switchData(arr) {
    const that = this;
    switch (arr[0]) {
      case '0':
        that.setData({
          [`formData.one`]: ['能陪你风花雪月也能陪你细水长流', '吃吧喝好没烦恼自己开心最重要'],
          [`formData.oneAge`]: '29岁',
        })
        break;
      case '1':
        that.setData({
          [`formData.one`]: ['对恋人掏心掏肺对朋友尽心尽力', '比起轰轰烈烈更喜欢细水长流'],
          [`formData.oneAge`]: '32岁',
        })
        break;
      case '2':
        that.setData({
          [`formData.one`]: ['爱吃吃爱喝喝没事不往心里搁', '偶尔有些小性子但非常容易哄'],
          [`formData.oneAge`]: '18岁',
        })
        break;
      case '3':
        that.setData({
          [`formData.one`]: ['确认过眼神是三岁都嫌多的人', '碰到喜欢的人就不自觉的撒娇'],
          [`formData.oneAge`]: '35岁',
        })
        break;
    }
    switch (arr[1]) {
      case '0':
        that.setData({
          [`formData.two`]: ['有时候很倔九头牛都拉不回来', '什么都能扛什么都能刚', '身上有一股迷之亲和力', '做事干净利落从不拖泥带水'],
          [`formData.twoAge`]: '22岁',
        })
        break;
      case '1':
        that.setData({
          [`formData.two`]: ['知晓世间险恶仍然保持初心', '表面小骄傲内心真软萌', '身上有一股迷之亲和力', '有点小骄傲不喜欢凑热闹'],
          [`formData.twoAge`]: '24岁',
        })
        break;
      case '2':
        that.setData({
          [`formData.two`]: ['看的很通透努力过糊涂', '不说漂亮话只做有心事', '特别低调沉稳的行动派', '对认定的事非常执着'],
          [`formData.twoAge`]: '20岁',
        })
        break;
      case '3':
        that.setData({
          [`formData.two`]: ['有能力爱自己有余力爱别人', '外在很年轻敢想敢做', '走开！别打扰我修仙', '眼睛里有星辰和大海'],
          [`formData.twoAge`]: '16岁',
        })
        break;
    }
    switch (arr[2]) {
      case '0':
        that.setData({
          [`formData.three`]: ['想要恋人100%的关心', '不善表达但待人温柔', '气质淡雅让人很舒服', '闷声干大事低调发财', '笑容气场一样闪亮', '野心不大你和天下'],
          [`formData.threeAge`]: '36岁',
        })
        break;
      case '1':
        that.setData({
          [`formData.three`]: ['佛系拼搏佛系生活', '表面可爱内心很皮', '随便一穿就很好看', '有时候会为爱犯傻', '爱我你就哄哄我呀', '日常逗比充满朝气'],
          [`formData.threeAge`]: '35岁',

        })
        break;
      case '2':
        that.setData({
          [`formData.three`]: ['喜欢你就想粘着你', '心中有一份小天真', '美丽暖心宝宝', '气质干净外表纯洁', '外表高冷内心温柔', '聊天全靠表情包'],
          [`formData.threeAge`]: '27岁',

        })
        break;
      case '3':
        that.setData({
          [`formData.three`]: ['笑起来像个宝宝', '开心才是最重要', '恋爱选我我超甜', '气场强大大佬的坐姿', '外表透露着温和', '一颗赤诚之心待人'],
          [`formData.threeAge`]: '31岁',
        })
        break;
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.showLoading({
      title: '生成海报',
    })
    let arr = options.center.split(',');

    that.switchData(arr)
    that.setData({
      dataId: options.id,
      [`formData.height`]: app.globalData.screenHeight,
      [`formData.userImg`]: options.userImg,

    })
    setTimeout(() => {
      that.setData({
        show: true
      })
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