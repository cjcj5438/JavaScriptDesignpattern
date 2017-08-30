/**
 * Created by chenjing on 2017/8/31.
 * 真假对象
 * 过程上表面是是CheckObjeck对象.可实际返回时上是新对象 ,这样执行的时候每个人使用就不互相影响了
 */
var CheckObject=function () {
    return {
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
}

// 调动
var a=CheckObject();
a.checkEmail();