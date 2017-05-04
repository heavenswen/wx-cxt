//index.js
//获取应用实例
var app = getApp();
var citys = require("../mod/citys.js");//城市列表
var p = require("../mod/provinces.js");
Page({
  data: {
    motto: '小程序模版',

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //加载完成时
    var that = this ;
      wx.getStorage({
      key: 'user',
      success: function(res) {
        console.log(res);
          let datas = res.data;
          if(datas){
            let userImg = datas[0];
            let user = datas[1];
            that.setData(userImg);
            that.setData(user);

          }
          
      },
      fail:function(){
        //无缓存时执行写入
        get_user();
      }
       
    })
    function get_user(){  
      //调用应用实例的方法获取全局数据
      app.getUserInfo(function(userInfo){
        //添加到user
        if(userInfo.server){
            /*error */ 
            that.setData({info:userInfo.server});
            return false;
        }

        let userDate = userInfo;
        let userImg = {userImg:userInfo.avatarUrl};
        that.setData(userImg);
        let user = {user:{
          nickName:{title:'用户名',value:userDate.nickName},
          city:{title:"城市",value:citys.getValue(userDate.city)},
          gender:{title:"性别",value:(userDate.gender!=0?userDate.gender==1?"男":"女":"未设置")},
          province:{title:"籍贯",value:p.getValue(userDate.province)}
        }};
        that.setData(user);
        //数据缓存
          wx.setStorage({
            key:"user",
            data:[userImg,user]
          })

      });
    }
    

  },
  onPullDownRefresh:function(){
    console.log("1.......");
  },
  onShareAppMessage: function () {
    //分享
    return {
      title: '小程序模版',
      desc: '建立一个小程序页面库',
      path: '/pages/index'
    }
  }
})
