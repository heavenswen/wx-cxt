//验证类
var arrs = {
    "phone":/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/g,//手机
    "idCard":/(^\d{15}$)|(^\d{17}([0-9]|X)$)/g,//身份证
    "chinese":/^[\u4e00-\u9fa5]+$/g,//中文
    "email":/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,//email
    
}

class reg{
    constructor(arr){
        let that = this;
        this.regs = arr;//正则组
        this.getBool= function(str,value){
            //返回一个bool
            let reg ;
            //获得对应的正则
            try{
                reg = that.regs[str];
            }catch(e){
                console.error(`没有找到对应参数 ${str}`)
                return false;
            }
            
            return value.match(reg);//返回匹配的内容或null
        } 
    }
};

//实例对象
function query(str,value){
    if(!str||!value){
        return console.error(`function(string,value)`)
    }
    //执行 参 值 -> bool
    return new reg(arrs).getBool(str,value);
}

module.exports = query;