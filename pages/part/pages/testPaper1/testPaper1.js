// pages/testPaper1/testPaper1.js
const db = wx.cloud.database();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      one: [{
          title: '1、以下哪个选项是女朋友的净身高？',
          list: [{
              value: 'A、158cm及以下',
              name: 'A',
              checked: false
            },
            {
              value: 'B、159cm-165cm',
              name: 'B',
              checked: false
            },
            {
              value: 'C、166cm-170cm',
              name: 'C',
              checked: false
            },
            {
              value: 'D、170cm以上',
              name: 'D',
              checked: false
            }
          ]
        },
        {
          title: '2、女朋友的脚脚是几码的？',
          list: [{
              value: 'A、35码及以下',
              name: 'A',
              checked: false
            },
            {
              value: 'B、36码',
              name: 'B',
              checked: false
            },
            {
              value: 'C、37码',
              name: 'C',
              checked: false
            },
            {
              value: 'D、38及以上',
              name: 'D',
              checked: false
            }
          ]
        },
        {
          title: '3、女朋友晚上十点半和你说她肚子饿了，此时你应该？',
          list: [{
              value: 'A、嘲笑她吃的真多',
              name: 'A',
              checked: false
            },
            {
              value: 'B、劝她正视自己的身材',
              name: 'B',
              checked: false
            },
            {
              value: 'C、给她点外卖',
              name: 'C',
              checked: false
            },
            {
              value: 'D、带她下楼吃夜宵',
              name: 'D',
              checked: false
            }
          ]
        },
        {
          title: '4、以下四款口红颜色中，女朋友最不喜欢的一个是？',
          list: [{
              value: 'A、棕红色',
              name: 'A',
              checked: false
            },
            {
              value: 'B、芭比粉',
              name: 'B',
              checked: false
            },
            {
              value: 'C、豆沙色',
              name: 'C',
              checked: false
            },
            {
              value: 'D、姨妈红色',
              name: 'D',
              checked: false
            }
          ],
          listId: null
        },
        {
          title: '5、以下哪个情形代表女朋友没有生气？',
          list: [{
              value: 'A、我没事',
              name: 'A',
              checked: false
            },
            {
              value: 'B、自己摔门而出',
              name: 'B',
              checked: false
            },
            {
              value: 'C、独自洗衣服',
              name: 'C',
              checked: false
            },
            {
              value: 'D、玩手机',
              name: 'D',
              checked: false
            }
          ]
        },
        {
          title: '6、女朋友生气了，你应该怎么做？',
          list: [{
              value: 'A、让她自己冷静冷静',
              name: 'A',
              checked: false
            },
            {
              value: 'B、抱住她安慰她',
              name: 'B',
              checked: false
            },
            {
              value: 'C、跟她讲道理，分析问题',
              name: 'C',
              checked: false
            },
            {
              value: 'D、比她更生气',
              name: 'D',
              checked: false
            }
          ]
        },
        {
          title: '7、女朋友和你说太冷了的时候你应该怎么做？',
          list: [{
              value: 'A、给她买杯热奶茶，烤红薯暖手',
              name: 'A',
              checked: false
            },
            {
              value: 'B、把她带到墙角处，因为那里有90度',
              name: 'B',
              checked: false
            },
            {
              value: 'C、嘲笑她说：哈哈哈，还好我穿得多',
              name: 'C',
              checked: false
            },
            {
              value: 'D、斥责她：为什么出来不多穿点',
              name: 'D',
              checked: false
            }
          ]
        },
        {
          title: '8、女朋友和你吵架了，下面哪句话能说？',
          list: [{
              value: 'A、行行行，都是我的错行了吧',
              name: 'A',
              checked: false
            },
            {
              value: 'B、你要这样想我也没办法',
              name: 'B',
              checked: false
            },
            {
              value: 'C、反正我已经道歉了，没啥好说的了',
              name: 'C',
              checked: false
            },
            {
              value: 'D、咱们先冷静下来好不好',
              name: 'D',
              checked: false
            }
          ]
        },
        {
          title: '9、女朋友再和你抱怨最近遇事不顺，你应该怎么做？',
          list: [{
              value: 'A、静静的听着，然后等说完了安抚她',
              name: 'A',
              checked: false
            },
            {
              value: 'B、频频打断说话，指责她的观点',
              name: 'B',
              checked: false
            },
            {
              value: 'C、与她一同吐槽自己的遭遇',
              name: 'C',
              checked: false
            },
            {
              value: 'D、劝她赶紧贴一张水逆退散符',
              name: 'D',
              checked: false
            }
          ]
        },
        {
          title: '10、你们在聊天时候还没有聊完，你有事需要离开一会，你应该？',
          list: [{
              value: 'A、赶紧结束对话，忙自己的事情',
              name: 'A',
              checked: false
            },
            {
              value: 'B、给小可爱发个信息，解释了再去',
              name: 'B',
              checked: false
            },
            {
              value: 'C、忙完了回来继续聊并解释',
              name: 'C',
              checked: false
            },
            {
              value: 'D、直接不回信息',
              name: 'D',
              checked: false
            }
          ]
        }

      ],
      two: [{
          name: '1、女朋友的手机号码：',
          value: '',
          type: 'number'
        },
        {
          name: '2、女朋友爱吃什么菜肴：',
          value: '',
          type: 'text'
        },
        {
          name: '3、女朋友最害怕的小动物：',
          value: '',
          type: 'text'
        },
        // {
        //   name: '4、第一次见面是哪年哪月：',
        //   value: '',
        //   type:'text'
        // },
        // {
        //   name: '5、女朋友的生日是哪天：',
        //   value: '',
        //   type:'text'
        // }

      ],
      three: [{
          name: '1、女朋友想养宠物 。',
          status: null
        },
        {
          name: '2、相比晴天，她更喜欢雨天 。',
          status: null
        },
        {
          name: '3、女朋友说自己最近胖了，你说不胖。',
          status: null
        },
        {
          name: '4、保留隐私，不告诉女朋友银行卡密码。',
          status: null
        },
        {
          name: '5、无论女朋友对不对都应该与其统一战线。',
          status: null
        }
      ],

    },
    resultList: {
      one: ['', '', '', '', '', '', '', '', '', ''],
      two: ['', '', '', '', ''],
      three: ['', '', '', '', '']
    }
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
  //选择
  selectOne: function (e) {
    let index = e.currentTarget.dataset.index;
    let indexs = e.currentTarget.dataset.indexs;
    const that = this;
    let data = that.data.formData.one[index].list;
    data.forEach(res => {
      res.checked = false
    })
    that.setData({
      [`formData.one[${index}].list`]: data,
      [`formData.one[${index}].list[${indexs}].checked`]: true,
      [`resultList.one[${index}]`]: e.currentTarget.dataset.value
    })
  },
  //选择见面
  bindDateChange(e) {
    const that = this;
    console.log(e)
    that.setData({
      [`resultList.two[3]`]: e.detail.value,
    })
  },
  //选择生日
  bindDateChange1(e) {
    const that = this;
    console.log(e)
    that.setData({
      [`resultList.two[4]`]: e.detail.value,
    })
  },
  //填空
  gapFilling(e) {
    const that = this;
    let index = e.currentTarget.dataset.index;
    that.setData({
      [`resultList.two[${index}]`]: e.detail.value
    })
  },
  //判断
  judge(e) {
    const that = this;
    let index = e.currentTarget.dataset.index;
    that.setData({
      [`formData.three[${index}].status`]: e.currentTarget.dataset.status,
      [`resultList.three[${index}]`]: e.currentTarget.dataset.status == 1 ? 1 : 2
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
          let resultList = that.data.resultList;
          wx.hideLoading()
          wx.navigateTo({
            url: `/pages/part/pages/placard1/placard1?one=${resultList.one}&two=${resultList.two}&three=${resultList.three}&id=${that.data.listId}&userImg=${imgUrl}`
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
  // 登录
  getUserInfo: function (e) {
    const that = this;
    let resultList = that.data.resultList;

    let oneArr = resultList.one.filter(res => {
      return res == ''
    })
    let twoArr = resultList.two.filter(res => {
      return res == ''
    })
    let threeArr = resultList.three.filter(res => {
      return res == ''
    })
    if (oneArr.length > 0) {
      wx.showToast({
        title: '选择题有遗漏，请填写',
        icon: 'none',
        duration: 1500
      })
    } else if (twoArr.length > 0) {
      wx.showToast({
        title: '填空题有遗漏，请填写',
        icon: 'none',
        duration: 1500
      })
    } else if (threeArr.length > 0) {
      wx.showToast({
        title: '判断题有遗漏，请填写',
        icon: 'none',
        duration: 1500
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

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that.setData({
      listId: options.id
    })
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