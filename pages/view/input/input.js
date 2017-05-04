// pages/view/input/input.js

let object = {};

object.data = {};//data

//内容输出
object.me = {
  

};

//输入框配置
object.data.input = {
  datas: null,//要传的内容
  navShow: false,//菜单显示
  type: 'reset',//默认状态
  icons: {
    //图标
    auto: "../../../img/record.png",
    video: "../../../img/play.png",
    image: "../../../img/icon_component.png",
    reset: "../../../img/plus.png"
  }

};
object.inputNavShow = function (e) {
  //显示隐藏菜单栏
  let that = this;
  let datas = that.data.input;
  let show = datas.navShow;
  datas.navShow = !show;
  console.log(show);
  that.setData({input:datas});
};
object.post = function (e) {

};


Page(object);//init