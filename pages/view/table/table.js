// pages/view/table/table.js
var _getOrder = require("../../mod/orderData.js");

var userObject = {};
userObject.data = {
  scale: null,//屏幕比例
  table: [
    {
      id: 0,//table's id
      //分页
      index: 1,//当前页数
      pageAll: null,//页码
      page: [6,1, 15],//设置分页
      pageIndex: 0,//选择的分页【index】
      title: "默认表格",
      fixedCloumn:2,
      fixedCloumnLast:0,
      thead: [
        //thead
        {
          name: "id",
          value: "数字",
          order: false,
        }, {
          name: "class",
          value: "字母和字符串",
          order: false,
        }, {
          name: "content",
          value: "混搭",
          order: false,
        },
        {
          name: "type",
          value: "扩展项",
          order: false,
          content: "默认内容",
        },
        {
          name: "number",
          value: "多列测试",
          content: "多列测试"
        }
      ],
      tbody: [],//内容
    },

  ]
};
userObject.onLoad = function (options) {
  // 页面初始化 options为页面跳转所带来的参数
  let that = this;
  let tbs = that.data.table;
  let datas = tbs[0];
  let thead = datas.thead;//获得对应name
  // console.log(that.data.table);
  wx.getSystemInfo({
    success: function (res) {
      let w = res.windowWidth;//get mobile window
      let scale = w / 640;
      that.setData({ scale: scale });
    }
  });
  //false data
  let getArr = falseJson;

  for (let i = 0; i < getArr.length; i++) {
    //获得数据
    let arrs = getArr[i];//获得data
    let arr = {};//生成new arrar
    for (let k = 0; k < thead.length; k++) {
      //获得 thead 对应的参
      let key = thead[k].name;
      let content = thead[k].content || "";
      let value = arrs[key] ? arrs[key] : '';
      arr[key] = value || content;

      if(key == "id"){
         arr.id = (i+1);
      }
     

    }

    datas.tbody.push(arr);//添加到原始数据
  }
  //生成分页
  let length = datas.tbody.length;
  let all = datas.page[datas.pageIndex];//获得单组条数
  let nums = setPages(length,all);
  if (nums.length) datas.pageAll = nums;
  //回填数据
  // console.log(tbs);
  that.setData({ table: tbs });
}
function setPages(length,group){
  //生成页面 总条数，单组条数
  let nums = [];
  let all; 
  all = parseInt(length / group) + (length % group ? 1 : 0);
  for (let i = 1; i <= all; i++) {
    nums.push(i);
  };

  return nums;
}
userObject.tablePage = function (e) {
  //table's 分页选择器
  let index = e.detail.value;
  let table = this.data.table;
  
  table[0].pageIndex = index;
  table[0].index = 1;//回到第一页
  let  group =  table[0].page[index];
  table[0].pageAll = setPages(table[0].tbody.length,group)

  this.setData({ table: table })
}
userObject.tablePaging = function(e){
  //点击分页
  let target = e.target.dataset.page;
  let tb = this.data.table;
  let datas = tb[0];
  let index = datas.index;//当前页数
  console.log(target)
  if(target){
    if(target =="prev"){
      //上一页
      datas.index = (index-1);
    }else if(target =="next"){
      //下一页
      datas.index = (index+1);
    }else{
      //指定页
        datas.index = Number(target);//...当为为1 时无法识别
    }
  }else{
    return false;
  }

  this.setData({table:tb});
}

userObject.onOrder = function (e) {
  //排序 数值- 数字-字母-字符串长度
  let that = this;

  let name = e.target.dataset.name;//get key

  let order = e.target.dataset.order;//排序状态 false ,1 从大到小 2 

  let index = e.target.dataset.table;//get table index of data

  let table = that.data.table; //get data of this

  let datas = table[index];// get data of table

  let thead = datas.thead;//get thead of data

  order = order ? (order == 1 ? true : false) : false;

  let setArr = new _getOrder({ json: datas.tbody });

  datas.tbody = setArr.getArrOrder({ key: name, order: order });

  console.log(name, order, datas);

  for (let k in thead) {
    //排序状态设置
    let n = thead[k].name;

    if (n == name) {
      thead[k].order = order ? 2 : 1;
    } else {
      thead[k].order = 0;
    };//

  }
  that.setData({ table: table });

}


Page(userObject);//page init

var falseJson = [{
  id: "0",
  content: "关于我们关于我们",
  class: "flower",
},
{
  id: '-3',
  class: "human",
  content: "内容",
},
{
  id: '.1',
  class: "bootstarp",
  content: "123"

}, {
  id: 5,
  class: "未",
  content: "cat",

},
{
  id: 'f',
  class: "你",
  content: "car",

},
{
  id: 'Zero',
  class: "你好 world!",
  content: "192.168.0.1",

},
{
  id: '0.5',
  class: "",
  content: ".127.0.0.1",

},
{
  id: '5.4',
  class: "",
  content: "127.0.0.1",

},
{
  id: "0",
  content: "关于我们关于我们",
  class: "flower",
},
{
  id: '-3',
  class: "human",
  content: "内容",
},
{
  id: '.1',
  class: "bootstarp",
  content: "123"

}, {
  id: 5,
  class: "未",
  content: "cat",

},
{
  id: 'f',
  class: "你",
  content: "car",

},
{
  id: 'Zero',
  class: "你好 world!",
  content: "192.168.0.1",

},
{
  id: '0.5.2.4',
  class: "",
  content: ".127.0.0.1",

},
{
  id: '2.4',
  class: "",
  content: "127.0.0.1",

},
];