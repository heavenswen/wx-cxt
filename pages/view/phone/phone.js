/*验证码输入*/
var query = require('../../mod/reg.js');//验证依赖
var app = getApp();
var timer ;
Page({
    data:{
        phone:"defude",//手机号码是否正确
        input:"default",//验证码是否正确
        mail:false,//短信是否发送
        yzm:"获取验证码",
        yzmNo:null,
        yzmTime:10
    },
    onLoade:function(){


    },
    input:function(e){
        //输入验证
        let that = this;
        let dataReg = e.target.dataset.reg;//get regType of input
        let value = e.detail.value ;//get value of input
        //验证单元
        if(dataReg&&value){
             value= query(dataReg,value)||"";//正则
        }
       
        //输出
        if(dataReg == "phone"){
            
            that.setData({
                phone:(value?true:false)
            })
        }else{
            //验证码
            that.setData({
                input:(value?true:false)
            })
        }
        
    },
    getyzm:function(e){ 
        //发送验证
        let that = this;
        let t = that.data.yzmTime;
        //倒计时
        clearInterval(timer);//init
        timer = setInterval(function(){
            t--;
            console.log(t);
            if(t){
                //显示倒计时
                let show = t>10?t:'0'+t;
                that.setData({yzmNo:show+'s'});
            }else{
                //重置
                clearInterval(timer);
                 that.setData({yzmNo:null});
            }    

        },1000);

        return this.setData({mail:true})

    }

})