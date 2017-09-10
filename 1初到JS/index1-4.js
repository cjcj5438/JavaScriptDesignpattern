/**
 * Created by chenjing on 2017/8/30.
 * 对象的另一种形式 和 index2-1 是一样的的
 */
var CheckObject = function () {
};
CheckObject.checkName = function () {
    console.log("验证姓名")
}
CheckObject.checkEmail = function () {
    console.log("验证邮箱")
}
CheckObject.checkPassword = function () {
    console.log("验证密码")
}
//使用
CheckObject.checkEmail();
// 这样写是可以实现函数调用,但是呢 我们在new新对象的时候不能继承这些方法,只能是使用这些
