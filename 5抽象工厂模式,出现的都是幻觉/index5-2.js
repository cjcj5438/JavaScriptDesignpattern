/**
 * Created by Administrator on 2017/9/13.
 * 抽象工厂模式
 * 优点：抽象工厂模式将具体产品的创建延迟到具体工厂的子类中，这样将对象的创建封装起来，可以减少客户端与具体产品类之间的依赖，从而使系统耦合度低，
 *      这 样更有利于后期的维护和扩展，这真是抽象工厂模式的优点所在
 *  缺点：抽象工厂模式很难支持新种类产品的变化。这是因为抽象工厂接口中已经确定了可以被创建的产品集合，如果需要添加新产品，
 *      此时就必须去修改抽象工厂的接口，这样就涉及到抽象工厂类的以及所有子类的改变，这样也就违背了“开发——封闭”原则。
 * 我对VehicleFactory[superType]的理解；
 * 首先这个VehicleFactory函数的参数是两个方法；取其中一个参数方法的 就这么使用，fn（obj1，obj2）  obj1=fn[obj1]
 */
var VehicleFactory=function(subType,superType){
    //判断抽象工厂是否有这个抽象类
    console.log(VehicleFactory[superType])
    if(typeof VehicleFactory[superType]==='function'){
        //缓存类
        function F(){};
        //继承父类的属性方法
        F.prototype=new VehicleFactory[superType]();
        //将子类的constructor指向子类//这语句怎么理解呢？参数体subType的构造函数体赋值给本身的函数subType.constructor；
        console.log(subType.constructor)
        subType.constructor=subType;//constructor翻译：构造器//
        //子类原型继承父类
        subType.prototype=new F();
    }else{
        throw new Error('为创建的抽象类');
    }
};
//小汽车抽象类
VehicleFactory.Car=function(){
    this.type='car'
}
VehicleFactory.Car.prototype={
    getPrice: function () {
        console.log("car")
        return new Error('抽象方法不能调用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用')
    }
}
//公交车抽象类
VehicleFactory.Bus=function(){
    this.type='Bus'
}
VehicleFactory.Bus.prototype={
    getPrice: function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用')
    }
}
//货车抽象类
VehicleFactory.Truck=function(){
    this.type='Truck'
}
VehicleFactory.Truck.prototype={
    getPrice: function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用')
    }
}
//那么问题来了， 我们该怎么使用呢？
//既然抽象工厂是用来创建子类的（本例中其实是让子类继承了父类，是对子类的一个扩展），所以我们需要一些产品子类，让子类相应的产品 类

//产品   宝马汽车
var BMW= function (price, speed) {
    this.price=price;
    this.speed=speed;
}
//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW,'Car');
BMW.prototype.getPrice= function () {
    return this.price;
}
BMW.prototype.getSpeed= function () {
    return this.speed;
}

var car=new BMW(123,321)
console.log(car.getPrice())
console.log(car.type)