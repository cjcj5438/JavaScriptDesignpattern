/**
 * Created by chenjing on 2017/9/2.
 * 有时候忘记添加new 实例对象了怎么办? 我来教你yi招
 */
var Book = function (t1, t2, t3) {
    if (this instanceof Book) {
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
    } else {
        return new Book(t1, t2, t3);
    }
}
var book2=new Book(1,2,3);
//没有new对象时.经过判断,自动加了
var book=Book(1,'w',2);
console.log(book);
console.log(book2);
console.log(book.t1);
console.log(book.t2);
console.log(book.t3);