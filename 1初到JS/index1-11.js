/**
 * Created by chenjing on 2017/8/31.
 * 换一种方法使用
 * 一般我们在测试的时候,习惯于类式调用的方法
 * 这里我们简单的改下
 */
Function.prototype.addMethod=function (name,fn) {
    this.prototype[name]=fn
    return this
}
var methods=function(){};
methods.addMethod('checkName',function () {
    console.log("验证姓名")
}).addMethod('checkEmail',function () {
    console.log("验证邮箱")
});
//这里是使用的时要new关键字下
var m=new methods();
m.checkEmail();