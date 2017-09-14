/**
 * Created by Administrator on 2017/9/14.
 * AMD是异步模块化模式,对文件的异步加载
 * 异步加载更适合浏览器
 */
//加载脚本文件
var loadScript= function (src) {
    var _script=document.createElement('script');
    _script.type='text/JavaScript'
    _script.src=src;
    document.getElementsByTagName('head')[0].appendChild(_script)
}
loadScript('localstorage.js');
