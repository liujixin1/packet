const app = getApp()
export default class LastMayday {
  palette(e) {
    return ({
      width: '750rpx',
      height: '1334rpx',
      views: [
        bg1(e),
        avatar(e[16]),
        name(),
        text(`亲爱的          您好！`, 510, '#ffffff', 30),
        text(`得知您                             降临地球！`, 570, '#ffffff', 30),
        text(`您身高              ，体重         `, 630, '#ffffff', 30),
        text(`您平时                 ，                ，               `, 690, '#ffffff', 30),
        text(`您大概能活到                             哦！`, 750, '#ffffff', 30),
        text(`您的生命大概还剩          月，             天`, 810, '#ffffff', 30),
        text(`您大约要吃              顿饭！`, 870, '#ffffff', 30),
        text(`您大约要洗              次澡！`, 930, '#ffffff', 30),
        text(`您大约要放              个屁！`, 990, '#ffffff', 30),
        text(`您大约要睡              个觉！`, 1050, '#ffffff', 30),
        textCenter(e, 0, 347, 510),
        textCenter(e, 1, 240, 570),
        textCenter(e, 2, 300, 630),
        textCenter(e, 3, 500, 630),
        textCenter(e, 4, 200, 690),
        textCenter(e, 5, 370, 690),
        textCenter(e, 6, 535, 690),
        textCenter(e, 7, 335, 750),
        textCenter(e, 8, 370, 810),
        textCenter(e, 9, 500, 810),
        textCenter(e, 10, 365, 870),
        textCenter(e, 11, 365, 930),
        textCenter(e, 12, 365, 990),
        textCenter(e, 14, 365, 1050),

        qr(),
        rqText(),
      ]
    })
  }
}

function bg1(e) {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg3.jpg',
    css: {
      top: '0rpx',
      left: '0rpx',
      width: '750rpx',
      height: '1334rpx',
      mode: 'aspectFill'
    },
  });
}

function avatar(userImg) {
  return ({
    type: 'image',
    url: userImg,
    css: {
      left: `335rpx`,
      top: `340rpx`,
      width: '80rpx',
      height: '80rpx',
      mode: 'scaleToFill',
      borderRadius: '70rpx',
      borderWidth: '2rpx',
      borderColor: '#ffffff'
    },
  });
}

function name() {
  let userInfo = wx.getStorageSync('userInfo');
  const des = {
    type: 'text',
    text: userInfo.nickName,
    css: {
      left: `0rpx`,
      top: `440rpx`,
      color: `#ffffff`,
      fontSize: `30rpx`,
      width: `750rpx`,
      textAlign: 'center'
    },
  };
  return des;
}

function text(text, top, color, fontSize) {
  const des = {
    type: 'text',
    text: text,
    css: {
      top: `${top}rpx`,
      left: `25rpx`,
      color: color,
      height: `35rpx`,
      width: `700rpx`,
      textAlign: 'center',
      fontSize: `${fontSize}rpx`,
      lineHeight: '35rpx',
    },
  };
  return des;
}

function textCenter(e, index, left, top) {
  const des = {
    type: 'text',
    text: e[index],
    css: {
      fontSize: '28rpx',
      fontWeight: 'bold',
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: '#E6A23C',
      height: `35rpx`,
      lineHeight: '35rpx'
    },
  };
  return des;
}

function qr() {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/qr.jpg',
    css: {
      bottom: '16rpx',
      right: '220rpx',
      width: '120rpx',
      height: '120rpx',
      mode: 'aspectFill',
    },
  });
}

function rqText() {
  return ({
    type: 'text',
    text: '长按识别查看更多精彩测试',
    css: {
      fontSize: '26rpx',
      bottom: '10rpx',
      left: `210rpx`,
      width: '180rpx',
      color: '#fff',
      lineHeight: '40rpx'
    },
  });
}