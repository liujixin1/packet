// pages/placard1/placard1.js
import Card from '../../../../palette/card3';
const db = wx.cloud.database();
const app = getApp()
Page({

  imagePath: '',
  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg3.jpg",
    qrImg: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/qr.jpg',
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
  saveImage() {
    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.writePhotosAlbum']) {
          wx.showLoading({
            title: '海报保存中...',
            mask: true
          })
          console.log(that.imagePath,9999999)
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
                  success() {}
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
                      success() {}
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
    console.log(options)
    let form = {
      date: options.date,
      sex: options.sex,
      height: options.height,
      weight: options.weight,
      hobby: options.hobby,
      hobbyIndex: options.hobbyIndex,
      smoke: options.smoke,
      liquor: options.liquor
    }
    let dataArr = form.date.split('-');
    let arr = [];
    if (form.sex == 1) {
      arr[0] = '美女';
    } else {
      arr[0] = '帅哥';
    }
    arr[1] = `${dataArr[0]}年${dataArr[1]}月${dataArr[2]}日`;
    arr[2] = form.height;
    arr[3] = form.weight;
    arr[4] = form.hobby;
    arr[5] = form.smoke == 1 ? '从不吸烟' : '天天吸烟';
    arr[6] = form.liquor == 1 ? '从不喝酒' : '醉生梦死';
    let year = 80 + parseInt(dataArr[0]);
    let month = parseInt(dataArr[1])
    let day = 5 + parseInt(dataArr[2])
    if (form.hobbyIndex == 1 || form.hobbyIndex == 2) {
      year -= 5;
    }
    if (form.smoke == 2) {
      year -= 5;
    }
    if (form.liquor == 2) {
      year -= 5;
    }
    arr[7] = `${year}年${dataArr[1]}月${day}日`;
    arr[8] = String((year - 2020) * 12 + month); //月
    arr[9] = String(arr[8] * 30); //天
    arr[10] = String(arr[9] * 3);
    arr[11] = String(arr[8] * 30);
    arr[12] = String(arr[9] * 5); //屁
    let file = 1000;
    if (form.hobbyIndex == 1 || form.hobbyIndex == 2) {
      file -= 5 * 12 * 3;
    }
    if (form.smoke == 2) {
      file -= 5 * 12 * 3;
    }
    if (form.liquor == 2) {
      file -= 5 * 12 * 3;
    }
    arr[13] = String(file); //生活
    arr[14] = String(arr[9]); //梦

    // let arr = ["女士", "2020年01月19日", "120cm", "20kg", "夜夜笙歌", "天天吸烟", "醉生梦死", "2090年01月24日", '841', '25230', '75690', '25230', '26150', '640', '25230']

    // console.log(arr)
    arr[15] = app.globalData.screenHeight;
    arr[16] = options.userImg

    that.setData({
      formData: arr,
      dataId: options.id
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
          console.log(1)
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