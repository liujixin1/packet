const app = getApp()
export default class LastMayday {
  palette(e) {
    return ({
      width: '750rpx',
      height:'1334rpx',
      views: [
        bg1(e),
        center(e),
        date(),
        // avatar(),
        qr(),
        rqText(),
      ]
    })
  }
}

function bg1(e) {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg4.jpg',
    css: {
      top: '0rpx',
      left: '0rpx',
      width: '750rpx',
      height: '1334rpx',
      mode: 'aspectFill'
    },
  });
}

function center(e) {
  return ({
    type: 'image',
    url: e[1][e[0]],
    css: {
      top: '100rpx',
      left: '75rpx',
      width: '600rpx',
      height: 'auto',
      mode: 'aspectFill'
    },
  });
}
function date() {
  return ({
    type: 'text',
    text: '2021',
    css: {
      fontSize: '45rpx',
      top: '130rpx',
      left: `250rpx`,
      width: '250rpx',
      color: '#fff',
      lineHeight: '45rpx',
      textAlign: 'center',
      fontWeight:'bold'
    },
  });
}
function avatar() {
  let userInfo = wx.getStorageSync('userInfo');
  return ({
    type: 'image',
    url: userInfo.avatarUrl,
    css: {
      left: `95rpx`,
      top: `510rpx`,
      width: '85rpx',
      height: '95rpx',
      mode: 'scaleToFill',
      borderRadius: '70rpx',
      borderWidth: '5rpx',
      borderColor: '#6f5aa3'
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