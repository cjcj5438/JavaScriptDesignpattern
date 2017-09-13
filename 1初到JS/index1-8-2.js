/**
 * Created by chenjing on 2017/8/31.
 */
var CheckObject=function () {

};
CheckObject.prototype = {
    checkName: function () {
        console.log("验证姓名")
        return this;
    },
    checkEmail: function () {
        console.log("验证邮箱")
        return this
    },
    checkPassword: function () {
        console.log("验证密码")
        return this
    }
}
//只要是原型创建的函数. 我们都要先new 一个实例在使用
var b=new CheckObject();
b.checkEmail().checkName().checkPassword()
// w
