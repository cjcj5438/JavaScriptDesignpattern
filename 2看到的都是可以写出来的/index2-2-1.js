/**
 * Created by chenjing on 2017/8/31.
 * 封装
 */
var Book = function (id, name, price) {
    //私有属性
    var num = 1;
    // 私有方法
    function checkId() {

    }

    //特权方法
    this.getName = function () {

    }
    this.getPrice = function () {

    }
    this.setName = function () {

    }
    this.setPrice = function () {

    }
    //对象公有属性
    this.id = id;
    //对象共有属性
    this.copy = function () {

    }
    //构造器
    this.setName(name)
    this.setPrice(price)
}
//new 了对象之后 . 就能用到this的属性及对象了  类的雏形


//类静态公有属性(对象不能访问)
Book.isChinese = true;
//类静态公有方法(对象不能访问)
Book.resetTime = function () {
    console.log('new time')
}
Book.prototype = {
    //公有属性
    isJSBook: false,
    display: function () {
    }
}

// 测试代码
var b=new Book(11,javascript,50);
console.log(b.num)//undefined
console.log(b.isJSBook)//false
console.log(b.id)//11
console.log(b.isChinese)//undefined
// next--demo