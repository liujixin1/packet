const app = getApp()
export default class LastMayday {
  palette(e,userImg) {
    return ({
      width: '750rpx',
      height:'1334rpx',
      views: [
        bg1(e),
        bg2(e),
        center(e),
        avatar(userImg),
        text(),
        qr(),
        rqText(),
      ]
    })
  }
}

function bg1(e) {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg5.jpg',
    css: {
      top: '0rpx',
      left: '0rpx',
      width: '750rpx',
      height: '1334rpx',
      mode: 'aspectFill'
    },
  });
}
function bg2(e) {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg5_1.png',
    css: {
      top: '500rpx',
      left: '175rpx',
      width: '400rpx',
      height: '400rpx',
      mode: 'aspectFill'
    },
  });
}

function center(e) {
  const des = {
    type: 'text',
    text:e[0],
    css: {
      left: `0rpx`,
      top: `570rpx`,
      color: `#e9ddc5`,
      fontSize: `200rpx`,
      width: `750rpx`,
      textAlign: 'center'
    },
  };
  return des;
}
function text(e) {
  const des = {
    type: 'text',
    text:'我的最佳真命天子姓氏',
    css: {
      left: `0rpx`,
      top: `400rpx`,
      color: `#d9aa72`,
      fontSize: `30rpx`,
      width: `750rpx`,
      textAlign: 'center'
    },
  };
  return des;
}
function avatar(userImg) {
  return ({
    type: 'image',
    url: userImg,
    css: {
      left: `325rpx`,
      top: `200rpx`,
      width: '100rpx',
      height: '100rpx',
      mode: 'scaleToFill',
      borderRadius: '70rpx',
      borderWidth: '5rpx',
      borderColor: '#d9aa72'
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
      bottom: '140rpx',
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
      bottom: '140rpx',
      left: `210rpx`,
      width: '180rpx',
      color: '#d9aa72',
      lineHeight: '40rpx'
    },
  });
}