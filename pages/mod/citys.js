//城市 模块化
var g = require("getArr.js");//城市列表

//城市对应表
let arr = {
  xiamen:"厦门"
};

function getValue(str){
  return g.getArr(str,arr);
}

module.exports.getValue = getValue;  //建立一个模块

//var mod = require('*.js')/页面引入 mod.getCtiy()/调用
