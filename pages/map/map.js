Page({
  data: {
    map: {
      longitude: null,//中心坐标
      latitude: null,
      scale: 16,//zoom
    },
    markers: [{
      id: 0,
      latitude: 24.479834,
      longitude: 118.089425,
      width: 50,
      height: 50,
      name: "中心位置"
    }],
    polyline: {
      //无效？
      points: [{
        latitude: 24.479834,
        longitude: 118.089425,
      }, {
        latitude: 30.479834,
        longitude: 118.089425,
      }, {
        latitude: 40.479834,
        longitude: 118.089425,
      }],
      color: "#39f",
      width: 2,
      dottedLine: true
    },
    controls: [{
      id: "reset",
      iconPath: '../../img/play.png',
      position: {
        left: 0,
        top: 300 - 20,
        width: 20,
        height: 20
      },
      clickable: true
    }, {
      id: "zoom",//放大
      iconPath: '../../img/plus.png',
      position: {
        left: 0,
        top: 300 - 20 * 2,
        width: 20,
        height: 20
      },
      clickable: true
    }, {
      id: "shrink",//缩小
      iconPath: '../../img/plus.png',
      position: {
        left: 0,
        top: 300 - 20 * 3,
        width: 20,
        height: 20
      },
      clickable: true
    }]
  },
  onLoad: function (_get) {
    let that = this;
    //获得当前坐标
    wx.getLocation({
      type: 'gcj02',//默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
      success: function (res) {
        console.log(res);
        let map = that.data.map;//获得默认设置
        map.latitude = res.latitude;
        map.longitude = res.longitude;

        //var speed = res.speed; //速度 m/s
        // var accuracy = res.accuracy; //位置的精确度

        that.setData({ map: map });
      },
      fail: function (e) {
        console.error(e);
      },
    })
  },
  onShow: function () {
    this.mapCtx = wx.createMapContext('map');
  },
  getMap: function (e) {
    //选择位置
    //  wx.chooseLocation({
    //    success:function(e){
    //      //{name: "白鹭洲公园", address: "福建省厦门市思明区白鹭洲路", latitude: 24.47425, longitude: 118.09122, errMsg: "chooseLocation:ok"}
    //      console.log(e);
    //    }
    //  })
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })

  },
  regionchange(e) {
    //视野发生变化时触发
    console.log("视野", e.type)//begin or end
  },
  markertap(e) {
    //点击坐标触发
    console.log("坐标", e.markerId)
  },
  controltap(e) {
    //点击控件触发
    console.log("控件", e)
    let that = this;
    let map = that.data.map;
    if (e.controlId == 'zoom') {
      //放大
      if (map.scale < 18) {
        map.scale++;
      }

    } else if (e.controlId == 'shrink') {
      //缩小
      if (map.scale > 5) {
        map.scale--;
      }
    } else if (e.controlId == 'reset') {
      //回到原来位置；

    }
    that.setData({ map: map });
  }
})