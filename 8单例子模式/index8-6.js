/**
 * Created by Administrator on 2017/9/13.
 * 惰性单例
 * 什么时候使用
 * 单例对象需要延时创建，所以我们使用了惰性单例
 */
var LazySingle=(function(){
    //单例实例引用
    var _instance=null;//boolean（null） 是false
    //单例
    function Single(){
        //这里 定义私有属性和方法
        return {
            publicMethod: function () {},
            publicProperty:'1.0'
        }
    }
    //获取单例对象的接口
    return function () {
        //如果为创建单例将创建单例
        if(!_instance){
            _instance=Single();
        }
        return _instance;
    }
})();
console.log(LazySingle().publicProperty)