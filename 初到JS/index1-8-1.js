/**
 * Created by chenjing on 2017/8/31.
 * 方法还可以这样用.
 * 我们可以在每一个方法后面,返回当前对象
 */
CheckObject = {
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
CheckObject.checkPassword().checkName().checkEmail();

//看到这里 也会有所感悟. 我们有可以放到类的原型上去. next-demo
