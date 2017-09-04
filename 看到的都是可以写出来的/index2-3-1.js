/**
 * Created by chenjing on 2017/9/2.
 * 继承--
 * 子类的原型对象--类似继承
 */
//类似继承

//声明父类
function SuperClass() {
    this.superValue=true;
}
// 给父类添加公有方法
SuperClass.prototype.getSuperValue=function () {
    return this.superValue;
}
//声明子类
function SubClass() {
    this.subValue=false;
}
//子类继承父类
SubClass.prototype=new SuperClass();
//给子类添加公有方法
SubClass.prototype.getSubValue=function () {
    return this.subValue;
}
/**
 * 其实原型的继承比较简单, 首先要有两个类.然后呢
 * 原理:通过子类.prototype=new 父类(); 因为在new的时候,已经复制了父类的属性. 然后赋值给子类的原型
 * 不仅可以访问父类的原型对象上的方法. 还可以访问到父类的构造函数
 */
/**
 * 那我们要怎么使用子类呢?
 */
  var instance=new SubClass();
console.log(instance.getSuperValue());//使用父类的方法//输出true
console.log(instance.getSubValue())//使用自己的方法//输出false

// 接下来看着组代码
console.log(instance instanceof SuperClass)//true
console.log(instance instanceof SubClass)//true
console.log(SubClass instanceof SuperClass)//false
console.log(SubClass.prototype instanceof SuperClass)//true
console.log(instance instanceof Object)//true
console.log([] instanceof Array)//ture 这句有时候面试会问到
/**
 * 看了上面的代码我们就要想了 她们是不是真的实现了.继承呢?
 * instanceof 是判断某个对象是不是某个类的实例,用法场景很多, 希望大家记住
 * 实际上是继承了类的实例. 并不是继承类的本身
 */
