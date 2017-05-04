//数据排序
//依照 数值，字符串
var or;//排序状态
var k;//键
class SetArrarOder {

    constructor({json, order = true}) {
        this.arr = json;//数组
        this.order = order;//排序状态 升
    }


}

Object.assign(SetArrarOder.prototype, {
    orderFun(a, b) {
        //排序
        // let en = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "str"];//英文类型
        // let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];//数字类型
        // let reg_d = /[\d|\-|\.]/;//开头为数字
        // let reg_w = /[\w]/g;//所有数字
        a = a[k] || "";
        b = b[k] || "";
        //console.log(a,b);
        let a_type = a ? isNaN(a) : true;//非number 为true  but isNaN("") = false;
        let b_type = b ? isNaN(b) : true;
        let v;

        if (!a_type && !b_type) {
            return a - b;
        }
        else if (a_type && !b_type) {
            // console.log(a_type+" a:",a,b)

            //b为数值时
            a = 0;
            b = 1;
            return a - b;
            // return true; //非数值永远在数值后
        } else if (!a_type && b_type) {
            // console.log(b_type+" b:",a,b)
            //a 为数值时
            a = 1;
            b = 0;
            return a - b;
            // return false;//非数值永远在数值后
        } else if (a_type && b_type) {
            //都不为number 编码对比
            return a.localeCompare(b);

            //循环逐个比对
            // let f = true;//循环状态
            // let i = 0;
            // while (f) {
            //     //按数目比对
            //     let a_c = a[i] || "";//内容
            //     let b_c = b[i] || "";
            //     // console.log(a,a_c,b,a_c)
            //     a_c = a_c.toLowerCase();
            //     b_c = b_c.toLowerCase();
            //     if (a_c && a_c == b_c) {
            //         //当相同时循环下一个
            //         i++;
            //     } else if (!a_c && !b_c) {
            //         //完全相同的数数
            //         f = 0;
            //         a = 1;
            //         b = 1;

            //     } else {

            //         let a_d = a.match(reg_d);//是否是数字
            //         let b_d = b.match(reg_d);
            //         let a_w = a.match(reg_w);//是否是字母
            //         let b_w = b.match(reg_w);
            //         //优先级对比
            //         if (!a_d && !a_w && !b_d && !b_w) {
            //             //字符串
            //             f = 0;//停止循环
            //             console.log("string",a,a_c,b,b_c);
            //             if (a_c && !b_c) {
            //                 //一个存在时

            //                 a = 0;
            //                 b = 1;
            //             } else if (!a_c && b_c) {

            //                 b = 0;
            //                 a = 1;
            //             } else if (!a_c && !b_c) {
            //                 //字符串同时不存在

            //                 a = 1;
            //                 b = 1;
            //             } else {
            //                 f = true;//继续
            //                 i++;
            //             }

            //         } else {
            //             //d

            //             f = 0;//停止循环
            //             if (a_c && b_c == "") {
            //                 //非空优先
            //                 a = 0;
            //                 b = 1;
            //             } else if (b_c && a_c == "") {
            //                 b = 0;
            //                 a = 1;
            //             } else if (a_d & b_d) {
            //                 //是数字
            //                 a = nums.indexOf(a_c);
            //                 b = nums.indexOf(b_c);

            //             } else if (a_w && b_w) {
            //                 //字母
            //                 a = en.indexOf(a_c);
            //                 b = en.indexOf(b_c);

            //             } else if (a_d && b_w) {
            //                 //数字优先于字母
            //                 a = 0;
            //                 b = 1;
            //             } else if (b_d && a_w) {
            //                 b = 0;
            //                 a = 1;
            //             } else if (!b_d && !b_w) {
            //                 //其中有一个为字符串
            //                 console.log("d:a "+a_w,a, a_c, b, b_c);
            //                 a = 0;
            //                 b = 1;
            //             } else if (!a_w && !a_d) {
            //                 console.log("d:b "+b_w, a, a_c, b, b_c);
            //                 a = 1;
            //                 b = 0;
            //             };

            //         }
            //     }
            // }
        }
        //排序
        // v = a - b;
        // // console.log(a_type, a, b_type, b, ":" + v)
        // return v;
    },
    getArrOrder({key, order}) {
        //使用键排序数组 ,升降
        let that = this;
        or = order !== '' ? order : this.order;//排序状态
        k = key;
        //console.log(or,k);
        this.order = or;// order init
        that.arr = that.arr.sort(that.orderFun);
        // console.log(key,or,that.arr)
        if (!or) {
            that.arr = that.arr.reverse();//反序
        }
        return that.arr;
    },
    setArr(json) {
        //更新基础数据
        this.arr = json;
    }

})



module.exports = SetArrarOder;