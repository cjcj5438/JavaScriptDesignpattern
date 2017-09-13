/**
 * Created by Administrator on 2017/9/13.
 * 抽象工厂模式，在java中是有abstrct的保留字
 * 但是在javascript中没有，按时我们要实现的话怎么做呢？
 */
//汽车抽象类，当使用其实例对象的方法是非报错
var car=function(){};
car.prototype={
    getPrice:function(){
        return new Error("抽象方法不能调用");//自己抛出错误，给console台捕获
    },
    getSeed:function(){

        return 'test值取不到的'
    }
}
//继承的子类没法使用 如果要是用，子类要重写方法