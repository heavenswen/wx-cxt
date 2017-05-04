// pages/view/tip/tip.js
Page({
  data:{
    tip:{
      

    }
  },
  onTip:function(e){
    /*显示提示*/
    let that = this;
    let datas =  e.target.dataset;
    let arr = [];
    for (let k in datas){
      //复制
        arr[k] = datas[k];
    }
    that.setData({tip:datas});
    if(datas.time){
      let t = datas.time;
      setTimeout(function(){
        that.onTipHide();
      },t)
    }
  },
  onTipHide:function(){
    /*隐藏提示*/
    this.setData({tip:0});
  },
})