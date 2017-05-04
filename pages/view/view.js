
Page({
  data: {
    lists:[
      {
        "title":"表单类",
        "show":true,
        list:[
          {url:"./login/login",title:"登录"},
           {url:"./phone/phone",title:"验证"}
        ]
      },
      {
        "title":"容器类",
        "show":false,
        list:[
           {title:"table表格",url:"./table/table"}
        ]        
      },
      {
        "title":"样式类",
        "show":false,
        list:[
          {title:"flex"},
        ]        
      },
      {
        "title":"辅助类",
        "show":false,
        list:[
          {url:"./tip/tip",title:"tip提示"},
        ]        
      }
    ]
  },
  onLoad: function () {
    //加载完成时
    let that = this;
  },
  addClass:function(e){
    /* 点击添加class*/
    let that = this;//page
    let id = e.currentTarget.id;//当前
    let lists = that.data.lists;
    for(let k in  lists){
      if(k == id){
        lists[k].show = !lists[k].show;
      }else{
        lists[k].show = false;
      }
    }
    that.setData({lists:lists})
  
  }
})
