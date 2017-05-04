//wx 多级数组操作 返回 第一级数组 方便setData({key,arr}); --x
class setObj{
    //构造函数page,对象,key
    constructor(page,name){
       this.obj = page;//page全局
       this.name = name;//obj keys
       this.datas = this.obj.data; //获得所有数据
       let size = this.name.length;
       let arr =  this.datas;
       let i = 0; 
        while(size){
            arr = arr[name[i]];
            size --;
            i++;
        }       
       this.arrs = arr; //操作的数据
    
    }
}
//方法
Object.assign(setObj.prototype, {
  setArr({id = null,k,v}){
      //id arrs[].key => v
      let arr = this.arrs;
      
      if(id===null){
        //遍历同级
        for(let i = 0;i < arr.length;i++){
        
          if(v){
             arr[i][k] = v;
          }else{
            //反向bool
            arr[i][k] = !arr[i][k];
          }
  
        
        }
      }else if(typeof id == 'object' &&id){
        //多对象 
          for(let i = 0;i<id.length;i++){
             let n = id[i];
            if(typeof v == "object"&&v){
                //多值 
                arr[n][k] = v[i];

            }else if(v || v === false){
           
              arr[n][k] = v;
            }
            else{
                arr[n][k] = !arr[n][k];
            }
            
          }
          

      }else{
          
        //单对象
          if(typeof v == "object"&&v){
            for(let value of v )
            {
              //多值
              arr[id][k] = value;
            }
          }else if(v||v === false){
             arr[id][k] = v;
          }else{
             arr[id][k] = !arr[id][k];
          }

      }

      return this.arrs;
  },
  toggle({id,k,v = null}){
    //单个切换
    return this.setArr({id:id,k:k,v:v});

  },
  siblings({id,k,v = null}){
    //获得其他同级对象
    let ids = [];
    let arr = this.arrs;
    for(let i in arr){
      if(i != id)ids.push(i);
    }
    return this.setArr({id:ids,k:k,v:v});
  }
});

//实例对象
function query(page,name){
    return new setObj(page,name);
}

module.exports.q = query;