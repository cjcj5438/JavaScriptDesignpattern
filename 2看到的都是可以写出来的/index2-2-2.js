/**
 * Created by chenjing on 2017/9/2.
 * 继承.闭包实现
 * 通常我们将类的静态变量通过闭包来实现
 */
//利用闭包实现
var Book=(function () {
    //静态私有变量
    var bookNum=0;
    //静态私有方法
    function checkBook() { }
    return function (newId,newName,newPrice) {
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
    }
})()//自调函数有好处的
Book.prototype={
    //静态公有属性
    isJsBook:false,
    //静态公有方法
    display:function () {}
}

//这里有两个问题:
// 闭包外部添加原型的方法.脱了了这个闭包,怎么做可以避免这个问题呢?
// 我们该怎么调用Book里面的函数呢?