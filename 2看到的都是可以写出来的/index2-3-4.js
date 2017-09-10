/**
 * Created by chenjing on 2017-09-10.
 */
/**
 * 单继承 属性复制
 * @param terget 接收对象
 * @param source 发出对象
 * @returns {*} 返回,复制好的对象
 */
// var extend=function (terget, source) {
//     //遍历原对象中的属性
//     for (var property in source){//for in 遍历
//         //复制到目标对象中
//         terget[property]=source[property]
//     }
//     return terget;
// }
// // 测试
// var book={
//     name:'name book'
// }
// var music={
//     m:'name music'
// }
// var other={};
// extend(book,music);
// //分别输出 book  music 里面的属性

/**
 * 多继承   可以用于对象合并
 * @returns {*}
 */
var book={
    name:'name book'
}
var music={
    m:'name music'
}
var other={
    color:'red'
};
Object.prototype.extendAll=function () {
    var i=0,len=arguments.length,arg;
    for(;i<len;i++){
        arg=arguments[i];
        for(var property in arg){
            this[property]=arg[property]
        }
    }
}
other.extendAll(book,music);
console.log(other)//{color: "red", name: "name book", m: "name music"}