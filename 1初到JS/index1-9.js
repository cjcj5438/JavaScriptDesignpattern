/**
 * Created by chenjing on 2017/8/31.
 * 函数的祖先
 * 看到这里回顾这些函数方法,不要激动.
 */
//比如情景 我们要给每一个函数添加一个检验邮箱的方法.
CheckObje.prototype.checkEmail=function () {
    console.log("验证邮箱的方法")
}
var f=function () {};
f.checkEmail();


//喜欢类的形式. 我们也可以这样
var f=new Function ();
f.checkEmail();
//但是不建议的这么做的,这样会污染Function 原生对象; 造成不必要的开销


//我这个时候就可以这些,抽象出一个统一一个添加方法的功能
Function.prototype.addMethod=function (name,fn) {
    this[name]=fn
}
var methods=new Function();
methods.addMethod('checkName',function () {
    console.log("验证姓名")
})
methods.addMethod('checkEmail',function () {
    console.log("验证邮箱")
})
methods.checkEmail()
methods.checkName()

//那写到这里, 我们就要想了. 可以实现链式调用吗? next-demo



