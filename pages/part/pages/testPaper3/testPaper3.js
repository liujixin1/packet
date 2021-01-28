// pages/testPaper3/testPaper3.js
const db = wx.cloud.database();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg3.jpg",

    form: {
      date: '请选择出生时间',
      dateType: false,
      sex: 1,
      height: '请选择您的身高(cm)',
      weight: '请选择您的体重(kg)',
      weightType: false,
      heightType: false,
      hobby: '请选择饮食爱好',
      hobbyIndex: '',
      smoke: 1,
      liquor: 1
    },
    gender: [{
        name: '1',
        value: '女生',
        checked: 'true'
      },
      {
        name: '2',
        value: '男生',
        
      }
    ],
    height: [],
    weight: [],
    smoke: [{
        name: '1',
        value: '从不吸烟',
        checked: 'true'
      },
      {
        name: '2',
        value: '云里雾里'
      }
    ],
    liquor: [{
        name: '1',
        value: '从不喝酒',
        checked: 'true'
      },
      {
        name: '2',
        value: '醉生梦死'
      }
    ],
   
  },
  close: function () {
    this.setData({
      showActionsheet: false
    })
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
  //选择饮食爱好
  btnClick() {
    const that = this;
    wx.showActionSheet({
      itemList: ['荤素搭配', '大鱼大肉', '夜夜笙歌'],
      success(res) {
        console.log(res)
        switch (res.tapIndex) {
          case 0:
            that.setData({
              [`form.hobby`]: '荤素搭配',
              [`form.hobbyIndex`]: 1
            })
            break;
          case 1:
            that.setData({
              [`form.hobby`]: '大鱼大肉',
              [`form.hobbyIndex`]: 2
            })
            break;
          case 2:
            that.setData({
              [`form.hobby`]: '夜夜笙歌',
              [`form.hobbyIndex`]: 3
            })
            break;
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  //选择出生时间
  bindDateChange(e) {
    const that = this;
    console.log(e)
    that.setData({
      [`form.date`]: e.detail.value,
      [`form.dateType`]: true,

    })
  },
  //选择性别
  radioChange(e) {
    const that = this;
    that.setData({
      [`form.sex`]: e.detail.value
    })
    console.log(this.data.form.sex)
  },
  //选择身高
  bindHeightChange(e) {
    const that = this;
    console.log(e)
    that.setData({
      [`form.height`]: that.data.height[e.detail.value] + 'cm',
      [`form.heightType`]: true

    })
  },
  //选择体重
  bindWeightChange(e) {
    const that = this;
    that.setData({
      [`form.weight`]: that.data.weight[e.detail.value] + 'kg',
      [`form.weightType`]: true

    })
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
          let resultList = that.data.form;
          wx.hideLoading()
          wx.navigateTo({
            url: `/pages/part/pages/placard3/placard3?date=${resultList.date}&sex=${resultList.sex}&height=${resultList.height}&weight=${resultList.weight}&hobby=${resultList.hobby}&hobbyIndex=${resultList.hobbyIndex}&smoke=${resultList.smoke}&liquor=${resultList.liquor}&id=${that.data.listId}&userImg=${imgUrl}`
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
  hieghtSum() {
    let sum = [];
    for (let i = 120; i <= 200; i++) {
      sum.push(i)
    }
    return sum;
  },
  weightSum() {
    let sum = [];
    for (let i = 35; i <= 200; i++) {
      sum.push(i)
    }
    return sum;
  },
  smokeChange(e) {
    const that = this;
    that.setData({
      [`form.smoke`]: e.detail.value
    })
  },
  liquorChange(e) {
    const that = this;
    that.setData({
      [`form.liquor`]: e.detail.value
    })
  },
  // 登录
  getUserInfo: function (e) {
    const that = this;
    let resultList = that.data.form;
    console.log(resultList)

    if (e.detail.errMsg == "getUserInfo:ok") {
      wx.showLoading({
        title: '生成海报'
      })
      if (app.globalData.userInfo) {
        if (!resultList.dateType) {
          wx.showToast({
            title: '请选择出生日期',
            icon: 'none',
            duration: 1500
          })
        } else if (!resultList.heightType) {
          wx.showToast({
            title: '请选择身高',
            icon: 'none',
            duration: 1500
          })
        } else if (!resultList.weightType) {
          wx.showToast({
            title: '请选择体重',
            icon: 'none',
            duration: 1500
          })
        } else if (!resultList.hobbyIndex) {
          wx.showToast({
            title: '请选择饮食爱好',
            icon: 'none',
            duration: 1500
          })
        } else {
          that.getAvatarUrl(app.globalData.userInfo.avatarUrl)
        }
      } else {
        if (!resultList.dateType) {
          wx.showToast({
            title: '请选择出生日期',
            icon: 'none',
            duration: 1500
          })
        } else if (!resultList.heightType) {
          wx.showToast({
            title: '请选择身高',
            icon: 'none',
            duration: 1500
          })
        } else if (!resultList.weightType) {
          wx.showToast({
            title: '请选择体重',
            icon: 'none',
            duration: 1500
          })
        } else if (!resultList.hobbyIndex) {
          wx.showToast({
            title: '请选择饮食爱好',
            icon: 'none',
            duration: 1500
          })
        } else {
         
          app.login(e, function () {
            that.getAvatarUrl(app.globalData.userInfo.avatarUrl)
          });
        }
      }


    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    let heightSum = that.hieghtSum();
    let weightSum = that.weightSum();
    that.setData({
      weight: weightSum,
      height: heightSum,
      listId: options.id
    })
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 500)
    console.log(options)
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
    const that = this;
    return {
      title: that.data.dataCenter.name,
      imageUrl: that.data.dataCenter.img
    }
  }
})