Page({
    data:{
        login:{
             forgetL:"",//忘记密码跳转地址
            remember:false //记住密码
        }
    },
    loginSub:function(e){
        let arr = e.detail;
        let that = this;
        let datas = that.data.login;
        let remember = datas.remember;
        //记录密码
        console.log(remember);

    },
    rememberChacked:function(e){
        let that = this;
        if(e.detail.value.length){
            let datas = that.data.login;
            datas.remember = true;
            that.setData({login:datas});
        }
    }
})