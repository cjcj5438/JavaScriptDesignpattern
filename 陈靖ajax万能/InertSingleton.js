//惰性单例
//有些时候单例对象需要延时创建
var LazySingle=(function () {
    //单例实例应用
    var instance=null;
    function single(){
        //定义使用方法
        return {
            publickMethod:function () {
            },
            publickProperty:'1.0'
        }
    }
    //获取单例的接口
    return function () {
        if(!instance) instance=single();

        return instance;
    }

})()
//可以通过对象成功获取内部创建的单例对象
console.log(LazySingle().publickProperty)