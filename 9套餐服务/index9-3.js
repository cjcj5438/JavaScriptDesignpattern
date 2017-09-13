/**
 * Created by Administrator on 2017/9/13.
 */
获取事件对象
var getEvent= function (event) {
    return event||window.event
}
获取元素
var getTarget= function (event) {
    return event.target||event.srcElement;
}
//阻止默认行为
var preventDefault=function(event){
    var event=getEvent(event)
    if (event.preventDefault){
        event.preventDefault();
    }else{//浏览器
        event.returnValue=false;
    }
}