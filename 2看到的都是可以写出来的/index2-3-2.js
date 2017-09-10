/**
 * 对类式继承 封装
 * @param o
 * @returns {F}
 */
function inheritObjeck(o) {
    function F() {}
    F.prototype=o;
    return new F();
}
/**
 * 寄生式继承, 封装
 * @param subClass 父类
 * @param superClass 子类
 */
function inheritprototype(subClass,superClass) {
    //复制一份原型副本到变量p 里;
    var p=inheritObjeck(superClass.prototype);
    //修正因重写子类原型. 导致子类的constructor属性被修改
    p.constructor=subClass;
    //设置子类的原型
     subClass.prototype=p;
}

// 使用
//定义父类
function SuperClass(name) {
    this.name=name;
    this.colors=["red","blue","green"];
}
//定义父类的原型方法
SuperClass.prototype.getName=function () {
    console.log(this.name)
}
//定义子类
function SubClass(name, time) {
    SuperClass.call(this,name);
    this.time=time;
}
//寄生式 继承父类原型
inheritprototype(SubClass,SuperClass);
//子类新增原型方法,
SubClass.prototype.getTime=function () {
    console.log(this.time)
};

//创建2个实例
var instance1=new SubClass("js book",200);
var instance2=new SubClass("css book",300);

instance1.colors.push("black");
console.log(instance1.colors);
console.log(instance2.colors);
instance2.getName();
instance2.getTime();