/**
 * Created by Administrator on 2017/9/13.
 */
document.write('<button type="button" id="myinput">Click Me!</button>');
function addEvent(dom,type,fn){
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);
    }else if(dom.attachEvent){
        dom.attachEvent(type,fn,fn)
    }else{
        dom['on'+type]=fn
    }
}
var myinput=document.getElementById('myinput');
addEvent(myinput,'click',function(){
    console.log('No1')
})

addEvent(myinput,'click',function(){
    console.log('No2')
})

addEvent(myinput,'click',function(){
    console.log('No3')
})


