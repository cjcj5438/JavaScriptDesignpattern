/**
 * Created by chenjing on 2017/8/31.
 * 仍然可以链式调用吗"\?
 */
Function.prototype.addMethod=function (name,fn) {
    this[name]=fn
    return this
}
var methods=function(){};
methods.addMethod('checkName',function () {
    console.log("验证姓名")
    return this
}).addMethod('checkEmail',function () {
    console.log("验证邮箱")
    return this
})
methods.checkEmail().checkName()
methods.checkName().checkEmail().checkName()

//...做到这里是不是觉得,已经学到.  但是我会想介绍一种使用方法 next-demo