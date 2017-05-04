

function getArr(str,arr){
    if(!str || typeof str != "string"){
      console.error(`getArr() is empty or !string`);
      return false;
   }
    str = str.toLowerCase();
   
    let city =  arr[str];
    if(city){
      return city;
    }else{
      return str;
    }

}
module.exports.getArr = getArr;  //建立一个模块