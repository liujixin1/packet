const app = getApp()
export default class LastMayday {
  palette(nums,numResults,numTexts) {
    return ({
      width: '750rpx',
      height:'1334rpx',
      views: [
        bg1(),
        bg2(),
        bg3(),
        num(nums),
        numResult(numResults),
        numText(numTexts),
        // avatar(userImg),
        // text(),
        qr(),
        rqText(),
      ]
    })
  }
}

function bg1() {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg7-2-1.jpg',
    css: {
      top: '0rpx',
      left: '0rpx',
      width: '750rpx',
    },
  });
}
function bg2() {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg7-2-3.png',
    css: {
      top: '250rpx',
      left: '225rpx',
      width: '300rpx',
      height: '300rpx',
      mode: 'aspectFill'
    },
  });
}
function bg3() {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg7-2-2.jpg',
    css: {
      top: '620rpx',
      left: '175rpx',
      width: '400rpx',
      height: '306rpx',
      mode: 'aspectFill',
      borderRadius: '10rpx'
      
    },
  });
}
function num(nums) {
  const des = {
    type: 'text',
    text:nums,
    css: {
      left: `0rpx`,
      top: `350rpx`,
      color: `#e9ddc5`,
      fontSize: `50rpx`,
      width: `750rpx`,
      textAlign: 'center'
    },
  };
  return des;
}
function numResult(numResults) {
  const des = {
    type: 'text',
    text:numResults,
    css: {
      left: `0rpx`,
      top: `500rpx`,
      color: `#ffffff`,
      fontSize: `30rpx`,
      width: `750rpx`,
      textAlign: 'center'
    },
  };
  return des;
}
function numText(numTexts) {
  const des = {
    type: 'text',
    text:numTexts,
    css: {
      left: `0rpx`,
      top: `550rpx`,
      color: `#ffffff`,
      fontSize: `26rpx`,
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
      bottom: '120rpx',
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
      bottom: '120rpx',
      left: `210rpx`,
      width: '180rpx',
      color: '#999999',
      lineHeight: '40rpx'
    },
  });
}