const app = getApp()
export default class LastMayday {
  palette(e) {
    return ({
      width: '750rpx',
      height: '2500rpx',
      views: [
        bg1(),
        avatar(e.userImg),
       
        one(e, 0, 370, 425),
        one(e, 1, 300, 520),
        one(e, 2, 513, 615),
        one(e, 3, 495, 735),
        one(e, 4, 393, 830),
        one(e, 5, 355, 927),
        one(e, 6, 446, 1055),
        one(e, 7, 411, 1223),
        one(e, 8, 504, 1390),
        one(e, 9, 605, 1560),
        two(e, 0, 320, 1778),
        two(e, 1, 320, 1825),
        two(e, 2, 320, 1873),
        two(e, 3, 320, 1922),
        two(e, 4, 320, 1970),
        three(e, 0, 600, 2060),
        three(e, 1, 600, 2110),
        three(e, 2, 600, 2160),
        three(e, 3, 600, 2210),
        three(e, 4, 600, 2260),
        
        qr(),
        rqText()
      ]
    })
  }
}

function bg1() {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg1.jpg',
    css: {
      top: '18rpx',
      left: '0rpx',
      width: '750rpx',
      height: 'auto',
      mode: 'aspectFill'
    },
  });
}
function avatar(userImg) {
  return ({
    type: 'image',
    url:userImg,
    css: {
      left: `140rpx`,
      top: `90rpx`,
      width: '80rpx',
      height: '80rpx',
      borderRadius: '10rpx',
    },
  });
}
function one(e, index, left, top) {
  const des = {
    type: 'text',
    text: e.one[index],
    css: {
      fontSize: '28rpx',
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: 'red',
      width: '450rpx',
      lineHeight: '40rpx'
    },
  };
  return des;
}

function two(e, index, left, top) {
  const des = {
    type: 'text',
    text: e.two[index],
    css: {
      fontSize: '24rpx',
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: '#409EFF',
      width: '450rpx',
      lineHeight: '40rpx'
    },
  };
  return des;
}
function three(e, index, left, top) {
  let img = e.three[index]=="1"?'/images/correct.png':'/images/err.png'
  return ({
    type: 'image',
    url: img,
    css: {
      top: `${top}rpx`,
      left: `${left}rpx`,
      width: '40rpx',
      height: '40rpx',
      mode: 'aspectFill'
    },
  });
}

function qr() {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/qr.jpg',
    css: {
      bottom: '36rpx',
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
      bottom: '30rpx',
      left: `210rpx`,
      width: '180rpx',
      color: '#666',
      lineHeight: '40rpx'
    },
  });
}
function _msg(e) {
  const des = {
    type: 'text',
    text: e.text,
    css: {
      fontSize: '28rpx',
      top: `320rpx`,
      left: `150rpx`,
      color: '#999999',
      width: '450rpx',
      lineHeight: '40rpx',
      maxLines: 3
    },
  };
  return des;
}