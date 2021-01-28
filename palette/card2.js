const app = getApp()
export default class LastMayday {
  palette(e) {
    return ({
      width: '750rpx',
      height: '1334rpx',
      views: [
        bg1(e),
        title('我的三维年龄报告'),
        one(-120, 193, '#587190', 900, 900, 450),
        one(-100, 318, '#fbc3aa', 650, 650, 325),
        one(-30, 443, '#c45f63', 400, 400, 220),
        qr(),
        rqText(),
        two(140, 583, '#ffffff', 700, 120),
        border(360, 583, '#999999', 1, 120),
        border(546, 583, '#999999', 1, 120),
        border(140, 643, '#999999', 700, 1),
        avatar(e.userImg),
        nameTitle('灵魂年龄', 210, 595, '#c45f63', 28),
        nameTitle('恋爱年龄', 400, 595, '#fbc3aa', 28),
        nameTitle('外在年龄', 600, 595, '#587190', 28),
        name(e.oneAge, 235, 655, '#c45f63', 28),
        name(e.twoAge, 425, 655, '#fbc3aa', 28),
        name(e.threeAge, 625, 655, '#587190', 28),
        OneText(e, 0, 65, 490, '#ffffff', 200, 70, 26),
        OneText(e, 1, 65, 730, '#ffffff', 200, 70, 26),
        twoText(e, 0, 120, 350, '#ffffff', 200, 70, 26),
        twoText(e, 1, 345, 480, '#ffffff', 150, 70, 26),
        twoText(e, 2, 345, 750, '#ffffff', 150, 70, 26),
        twoText(e, 3, 120, 870, '#ffffff', 200, 70, 26),
        threeText(e, 0, 220, 230, '#ffffff', 200, 70, 26),
        threeText(e, 1, 470, 330, '#ffffff', 150, 70, 26),
        threeText(e, 2, 550, 450, '#ffffff', 150, 70, 26),
        threeText(e, 3, 550, 770, '#ffffff', 150, 70, 26),
        threeText(e, 4, 470, 890, '#ffffff', 150, 70, 26),
        threeText(e, 5, 220, 990, '#ffffff', 200, 70, 26)
      ]
    })
  }
}

function bg1(e) {
  return ({
    type: 'image',
    url: 'https://686f-home-520bf8-1255630290.tcb.qcloud.la/commonality/bg2.jpg',
    css: {
      top: '0rpx',
      left: '0rpx',
      width: '750rpx',
      height: '1334rpx',
      mode: 'aspectFill'
    },
  });
}

function title(title) {
  return ({
    type: 'text',
    text: title,
    css: {
      fontSize: '55rpx',
      top: '60rpx',
      left: `150rpx`,
      fontWeight: 'bold',
      shadow: '5rpx 5rpx 5rpx #fff',
      width: '450rpx',
      textAlign: 'center',
      color: '#222',
    },
  });
}

function avatar(userImg) {
  
  return ({
    type: 'image',
    url: userImg,
    css: {
      left: `40rpx`,
      top: `573rpx`,
      width: '140rpx',
      height: '140rpx',
      mode: 'scaleToFill',
      borderRadius: '70rpx',
      borderWidth: '2rpx',
      borderColor: '#ffffff'
    },
  });
}

function one(left, top, color, width, height, radius) {
  const des = {
    type: 'rect',
    css: {
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: color,
      width: `${width}rpx`,
      height: `${height}rpx`,
      borderRadius: `${radius}rpx`,
      borderWidth: '2rpx',
      borderColor: '#ffffff'
    },
  };
  return des;
}

function two(left, top, color, width, height) {
  const des = {
    type: 'rect',
    css: {
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: color,
      width: `${width}rpx`,
      height: `${height}rpx`,
      borderWidth: '1rpx',
      borderColor: '#999'
    },
  };
  return des;
}

function border(left, top, color, width, height) {
  const des = {
    type: 'rect',
    css: {
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: color,
      width: `${width}rpx`,
      height: `${height}rpx`
    },
  };
  return des;
}

function nameTitle(text, left, top, color, fontSize) {
  const des = {
    type: 'text',
    text: text,
    css: {
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: color,
      fontSize: `${fontSize}rpx`,
      fontWeight: 'bold',
    },
  };
  return des;
}

function name(e, left, top, color, fontSize) {
  const des = {
    type: 'text',
    text: e,
    css: {
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: color,
      fontSize: `${fontSize}rpx`,
      fontWeight: 'bold',
    },
  };
  return des;
}

function OneText(e, index, left, top, color, width, height, fontSize) {
  const des = {
    type: 'text',
    text: e.one[index],
    // text: text,
    css: {
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: color,
      width: `${width}rpx`,
      height: `${height}rpx`,
      fontSize: `${fontSize}rpx`,
      lineHeight: '35rpx',
      textAlign: 'center',
    
    },
  };
  return des;
}
function twoText(e, index, left, top, color, width, height, fontSize) {
  const des = {
    type: 'text',
    text: e.two[index],
    // text: text,
    css: {
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: color,
      width: `${width}rpx`,
      height: `${height}rpx`,
      fontSize: `${fontSize}rpx`,
      lineHeight: '35rpx',
      textAlign: 'center',
     
    },
  };
  return des;
}
function threeText(e, index, left, top, color, width, height, fontSize) {
  const des = {
    type: 'text',
    text: e.three[index],
    // text: text,
    css: {
      top: `${top}rpx`,
      left: `${left}rpx`,
      color: color,
      width: `${width}rpx`,
      height: `${height}rpx`,
      fontSize: `${fontSize}rpx`,
      lineHeight: '35rpx',
      textAlign: 'center',
     
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