/**
 * Created by Administrator on 2017/9/13.
 * 此代码运行错误；
 */
var Factory=function(type,content){

    if(this instanceof Factory){
        console.log(this[type])
        var s =new this[type](content)
        return s;
    }else{
        return new Factory(type,content)
    }

}
Factory.prototype={
    java: function (content) {
        this.content=content;
        (function (content){
            var div=document.createElement('div')
            div.innerHTML=content;
            console.log(div.innerHTML)
            div.style.border='1px solid red'
            document.getElementById('container').appendChild(div)
        })(content)
    },
    UI: function (content) {
        this.content=content;
        (function (content){
            var div=document.createElement('div')
            div.innerHTML=content;
            div.style.border='1px solid red'
            document.getElementById('container').appendChild(div)
        })(content)
    }
}
var data=[
    {type:'java',content:'强java'},
    {type:'UI',content:'强UI'}
];
var f=new Factory();
f.java(123)


