/**
 * Created by Administrator on 2017/9/14.
 * slice(start.end)  涵头部不涵尾
 * slice(start)  从start开始到数组最后
 */
//模块管理器

//定义模块单体对象
var F = F || {};
/**
 * 定义模块单体方法  ,理论上是放在闭包你里面实现的,可以隐蔽内部消息
 * @param str 模块路由
 * @param fn 模块方法
 */
F.define = function (str, fn) {
    //解析模块路由
    var parts = str.split('.'),//TODO:split把字符切割成数组
        old = parent = this,//old祖父模块,parent父模块
        i = len = 0//i模块层级,len模块层级长度
    //如果,第一个模式是模块管理器单体模式,则移除
    if (parts[0] === 'F') {
        parts = parts.slice(1)
    }
    //屏蔽defind和module方法重写
    if (parts[0] === 'define' || parts[0] === 'module') {
        return;
    }
    //遍历路由模块定义每层模块
    for (len = parts.length; i < len; i++) {
        //如果父模块中不存在当前模块
        if (typeof parent[parts[i]] === 'undefined') {
            //声明当前模块
            parent[parts[i]] = {};
        }
        //缓存祖父模块
        old = parent;
        //缓存父模块
        parent = parent[parts[i]];
    }
    //如果给定义模块方法
    if (fn) {
        old[parts[--i]] = fn();
    }
    return this;
}

//下面我们创建一些模块
//--------------创建模块F.string
F.define('string', function () {
    return {
        trim: function (str) {
            //清除字符串两边的空白
            return str.replace(/^\s+|\s+$/g, '');
            //TODO:\s任意空白字符,^从字符串起始位置,$字符串的结尾位置,|两项之间的一个选择
            //TODO:切割数组时会修改原来值
        }
    }
})
//F.string.trim('测试用例. ')
//console.log(F.string.trim('       测试用例.    123                   '))
//--------------创建模块 F.dom
F.define('dom', function () {
    //简化获取元素方法,(重新获取可以被替代,此设计用于 演示添加模块添加)
    var $ = function (id) {
        $.dom = document.getElementById(id)
        return $;
    }
    $.html = function (html) {
        if (html) {
            this.dom.innerHTML = html;
            return this;
        } else {
            return this.dom.innerHTML;
        }
    }
    return $;
})
//测试用例(页面 元素)
document.write('<div  id="test">Click Me!</div>');
F.dom('test').html();

//为dom模块添加addClass方法
F.define('dom.addClass')
F.dom.addClass = function (type, fn) {
    return function (className) {
        //如果不存在该类
        if (!~this.dom.className.indexOf(className)) {//这里的!~  js 取反运算符,  语义是不等于-1
            this.dom.className += '' + className;
        }
    }
}();
F.dom('test').addClass('test');

//前面的模块管理器. 和创建模块, 我们要用这些模块.去完成我们的需求   模块方法module
//模块调用方法
F.module = function () {
    //将参数转化成数组
    var args = [].slice.call(arguments),
    //获取回掉执行函数
        fn = args.pop(),
    //获取依赖模块
        parts = args[0] && args[0] instanceof Array ? args[0] : args,
    //依赖模块列表
        modules = [],
    //依赖模块路由
        modIDs = '',
    //依赖模块索引
        i = 0,
    //依赖模块长度
        ilen = parts.length,
        parent,//父模块
        j,//模块路由层级索引
        jlen;//模块路由层级长度
    while (i < ilen) {
        if (typeof parts[i] === 'string') {
            parent = this;
            modIDs = parts[i].replace(/^F\./, '').split('.');
            for (j = 0, jlen = modIDs.length; j < jlen; j++) {
                parent = parent[modIDs[j]] || false;
            }
            modules.push(parent);
        } else {
            modules.push(parts[i]);
        }
        i++;
    }
    fn.apply(null, modules);
};

//调用模块
F.module(['dom',document],function(dom,doc){
    dom('test').html('new add!')
    doc.body.style.backgroundColor = 'green';
})
F.module('dom','string.trim', function (dom, trim) {
    var html=dom('test').html();
    var str = trim(html);
    console.log(''+html+str);
})

