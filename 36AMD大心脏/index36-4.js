/**
 * Created by Administrator on 2017/9/14.
 * 创建和调度模块
 * var args = [].slice.call(arguments)
 * //TODO:arguments 并非数组，只是访问单个参数的方式与访问数组元素的方式相同。
 *          因此在使用slice方法的时候，需要用类似[].slice.call(arguments, 1) 的这种方式去调用
 */
//闭包环境
~(function (F) {//~ 屏蔽压缩文件时报仇. 所以前面不要漏写
    //模块存储器,存储已经创建的模块
    var moduleCache = {}
})((function () {
    //创建模块管理对象F,保存到全局对象中
    return window.F = {}
})());

F.module = function (url, modDeps, modCallback) {
    //获取参数传化成数组
    var args = [].slice.call(arguments),
    //获取模块的 构造函数,(最后一个参数成员)
        callback = args.pop(),
    //获取依赖模块,(紧邻回掉函数参数,且数据类型是数组)
        deps = (args.length && args[args.length - 1] instanceof Array) ? args.pop() : [],
    //该模块的url   能不能理解成模块ID
        url = args.length ? args.pop() : null,
    //依赖模块序列数组
        params = [],
    //未加载的模块的数列统计
        depsCount = 0,
    //序列的索引值
        i = 0,
    //长度
        len;
    //获取依赖模块的长度
    if (len = deps.length) {
        //遍历依赖模块
        while (i < len) {
            //闭包保存i 参数 相当于声明了i
            (function (i) {
                //增加未加载依赖模块 数量统计
                depsCount++;
                //异步加载依赖模块,
                loadModule(deps[i], function (mod) {
                    //依赖模块中添加依赖模块接口引用
                    params[i] = mod;
                    //模块加载完成,数量统计--
                    depsCount--;
                    //如果,模块全部加载完了
                    if (depsCount === 0) {
                        //在模块缓存器中矫正该模块,并执行构造函数 ;
                        setModule(url, params, callback);
                    }
                })
            })(i);
            //遍历下一依赖模块
            i++;
        }
        //无依赖模块直接执行 回掉函数
    } else {
        setModule(url, [], callback);
    }
}
//加载模块
var moduleCache = {};
setModule = function (moduleName,params,callback) {
    loadModule= function (moduleName,params,callback) {
        var _module;
        if(moduleCache[moduleName]){
            setTimeout(callback(_module.exports),0)
        }
    }
}

