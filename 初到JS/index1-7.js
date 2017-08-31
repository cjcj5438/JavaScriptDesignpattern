/**
 * Created by chenjing on 2017/8/31.
 * 一个检测类
 * 我们可以把所有的方法 放到函数的内部了.通过this定义
 * 而我们每一次new 一个新对象的时候.都会把this上的属性都复制一遍.
 *
 */

var CheckObject = function () {
};
CheckObject.prototype.checkName = function () {
    console.log("验证姓名")
}
CheckObject.prototype.checkEmail = function () {
    console.log("验证邮箱")
}
CheckObject.prototype.checkPassword = function () {
    console.log("验证密码")
}
//这里每次都要写一次prototype 可以简写

var CheckObjeck0000 = function () {
};
CheckObjeck0000.prototype = {
    checkName: function () {
        console.log("验证姓名")
    },
    checkEmail: function () {
        console.log("验证邮箱")
    },
    checkPassword: function () {
        console.log("验证密码")
    }
}
var a=new CheckObjeck0000();
a.checkEmail()
a.checkName()
a.checkPassword()
// 这样写有有缺点.不能混用.如果混用会导致prototype的值覆盖 也建议使用第二种写法

//然而这里我们调用三次 a 是可以避免的. 接下demo