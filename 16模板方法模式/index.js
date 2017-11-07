// 导航栏

// 格式化字符串方法
function formateString(str, data) {
    return str.replace(/\{#(\w+)#\}/g, function(match, key) {
        return typeof data[key] === undefined ? '': data[key]
    });
}
// 基础导航
var Nav = function(data) {
    // 基础导航样式模板
    this.item = '<a href="{#href#}" title="{#title#}">{#name#}</a>';
    // 创建字符串
    this.html = '';
    // 格式化数据
    for(var i = 0, len = data.length; i < len; i++) {
        this.html += formateString(this.item, data[i]);
    }
    // 返回字符串数据
    return this.html;
}
var NumNav = function(data) {
    // 消息提醒信息组件模板
    var tpl = '<b>{#num#}</b>';
    // 装饰数据
    for(var i = data.length - 1; i >= 0; i--) {
        data[i].name += data[i].name + formateString(tpl, data[i]);
    }
    // 继承基础导航类
    return Nav.call(this, data);
}
var LinkNav=function (data) {
    var tpl='<span>{#link#}</span>'
    for(var i=data.length-1;i>=0;i--){
        data[i].name+=data[i].name+formateString(tpl,data[i])
    }
    return Nav.call(this,data);
}
var nav=document.getElementById('content')
nav.innerHTML=NumNav([
    {
        href:'www.baidu.com',
        title:'百度一下',
        name:'百度',
        num:'10'
    },
    {
        href:'www.淘宝.com',
        title:'淘宝',
        name:'他泡吧跑',
        num:'10'
    },
    {
        href:'www.网易.com',
        title:'网易',
        name:'163.com',
        num:'10'
    }
])