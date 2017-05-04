//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (json) {
          if (json.login == "login:ok");
          {
            let code = json.code;
            wx.getUserInfo({
              //获取用户信息
              success: function (res) {
                wx.request({
                  //获得3rd
                  url: that.globalData.host + 'index.php/home/index/onLogin', //仅为示例，并非真实的接口地址
                  data: {
                    code: code,
                    userInfo: JSON.stringify(res.userInfo)
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  method: 'POST',
                  success: function (result) {
                    console.log(result);
                    var thirdSessionId = result.data.data;
                    var uid = result.data.uid;
                    // that.setData({thirdSessionId: thirdSessionId})
                    //将thirdSessionId放入小程序缓存
                    wx.setStorageSync('thirdSessionId', thirdSessionId);
                    wx.setStorageSync('uid', uid);

                  },
                  fail: function (e) {
                    console.error(e);
                  }
                })

                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })

          }
        }
      })
    }
  },
  onShow: function () {
    let that = this;
    var thirdSessionId = that.globalData.thirdSessionId || wx.getStorageSync('thirdSessionId');
    var uid = that.globalData.uid || wx.getStorageSync('uid');

    if (!thirdSessionId || !uid) {
      //返回登录

      wx.navigateTo({
        url: '/pages/index/index'
      })
    } else if (wx.getStorageSync('uid') && !that.globalData.uid) {
      //获得原缓存的数据,兼容 原缓存uid
      // console.log(uid)
      that.globalData.uid = uid;
      that.globalData.thirdSessionId = thirdSessionId;
      //  console.log(that.globalData)
    }

  },
  globalData: {
    host: "https://xcx.wei580.com/",
    userInfo: null,
    uid: null,
    thirdSessionId: null,
    data: null,
  }
})