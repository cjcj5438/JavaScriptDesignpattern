/**
 * Created by chenjing on 2017/9/2.
 */
var Book=(function () {
    //静态私有变量
    var bookNum=0;
    //静态私有方法
    function checkBook() { }
    function _Book(newId,newName,newPrice) {
        //私有变量
        var name,price;
        // 私有方法
        function checkID(id) {}
        // 特权方法
        this.getName = function () {}
        this.getPrice = function () {}
        this.setName = function () {}
        this.setPrice = function () {}
        //公有属性
        this.id=newId;
        //公有方法
        this.copy=function () {}
        bookNum++;
        if(bookNum>100)
            throw new Error("超出了数量不对")
        // 构造器
        this.setName(name)
        this.setPrice(price)
    };
    _Book.prototype={
        //静态公有属性
        isJsBook:false,
        //静态公有方法
        display:function () {}
    }
    return _Book;
})()
//这样看上去像一个整体
/**
 * 通过这些实例代码. 我们可以发现每个类有3个部分
 * 第一部分 :构造函数内的-提供实例对象复用
 * 第一部分 :构造函数外的-直接通过点语法添加的,这是提供给类使用的,实例对象可访问不到
 * 第一部分 :类的原型中的-实例化对象可以使用的.也是所有实例对象可以访问到的
 */

