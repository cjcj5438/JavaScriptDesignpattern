/**
 * Created by chenjing on 2017/8/31.
 * 转化成类   也可以的
 * 在index1-5的方法里面对象a和CheckObject 没有任何关系.返回的对象和CheckObject没什么关系
 */
var CheckOBject=function () {
    this.checkName=function () {
        console.log("验证名字")
    }
    this.checkEmail=function () {
        console.log("验证邮箱")
    }
    this.checkPassword=function () {
        console.log("验证密码")
    }
}
//调用. 这样就对类都实例化了.
var a=new CheckObject();
a.checkEmail();