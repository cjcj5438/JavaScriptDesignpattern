/**
 * Created by Administrator on 2017/9/14.
 * 创建和调度模块
 */
F.module = function (url, modDeps, modCallback) {
    var args = [].slice.call(arguments),
        modCallback = args.pop(),
        deps = (args.length && args[args.length - 1] instanceof Array) ? args.pop() : [],
        url = args.length ? args.pop() : null,
        params=[],
        depsCount= 0,
        i=0,
        len;
    if(len=deps.length){
        while (i<len){
            (function(i){
                depsCount++;
                loadModule(deps[i], function (mod) {
                    params[i]=mod;
                    depsCount--;
                    if(depsCount===0){
                        setModule(url,params,callback);
                    }
                })
            })()
        }
    }
}