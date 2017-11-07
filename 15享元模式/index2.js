/**
 * Created by chenjing on 2017-11-04.
 */
//享元动作
var FlyWerght={
    moveX:function (x) {
        this.x=x
    },
    moveY:function (y) {
        this.y=y
    }
}
//通过继承的方式实现这些方法
var Player=function (x,y,c) {
    this.x=x
    this.y=y
    this.color=c
}
Player.prototype=FlyWerght;
Player.prototype.changeC=function (c) {
    this.color=c;
}
// 让精灵移动的方法
var Spirit=function (x,y,r) {
    this.x=x
    this.y=y
    this.r=r
}
Spirit.prototype=FlyWerght;
Spirit.prototype.changeR=function (r) {
    this.r=r
}

var play1=new Player(5,6,"red")
console.log(play1);