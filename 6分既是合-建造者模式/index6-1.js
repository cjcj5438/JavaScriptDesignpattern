
/**
 * Created by Administrator on 2017/9/13.
 *
 */
//创建一个人类
var Human= function (param) {
    //技能
    this.skill=param&&param.skill||'保密';
    //爱好
    this.hobby=param&&param.hobby||'保密';
}
//类人的原始类  应聘者类
Human.prototype={
    getSkill: function () {
        return this.skill;
    },
    getHobby: function () {
        return this.hobby;
    }
}
//实例化姓名类
var Named= function (name) {
    var that=this;
    (function (name,that) {
        that.wholeName=name;
        if(name.indexOf(' ')>-1){
            that.FirstName=name.slice(0,name.indexOf(' '));
            that.secondName=name.slice(name.indexOf(' '));
        }
    })(name,that)
}
//实例化职位类
var Work= function (work) {
    var that=this;
    (function (work,that) {
        switch (work){
            case 'code':
                that.work='工程师';
                that.workDescript='每天沉醉于编程';
                break;
            case 'UI':
            case 'UE':
                that.work='设计师';
                that.workDescript='设计更是一种艺术'
                break;
            case 'teach':
                that.work='教师';
                that.workDescript='分享也是一种快乐';
                break;
            default:
                that.work=work;
                that.workDescript='对不起，我们还不知道你选择的职业是什么';
        }
    })(work,that)
}
Work.prototype.changeWork= function (work) {
    this.work=work;
}
Work.prototype.changeDescript= function (setence) {
    this.workDescript=setence;
}
//这样我们创建了3个类，姓名，职位，应聘者，

//创建一位应聘者
/**
 * 应聘者建造者
 * @param name
 * @param work
 * @returns {Human}
 * @constructor
 */
var Person= function (skill,name, work) {
    var _person=new  Human()
    _person.skill=skill;
    _person.name=new Named(name)
    _person.work=new Work(work)
    return _person;
}
var person=new Person('美术','xiao ming','code');
console.log(person.skill)
console.log(person.getSkill())
console.log(person.getHobby())
console.log(person.name.FirstName)
console.log(person.name.secondName)
console.log(person.work.work)
console.log(person.work.workDescript)
person.work.changeDescript('更改一下职位描述')
console.log(person.work.workDescript)
//什么时候用建筑这模式呢？
//创建的对象复杂，是复合的；关注创建的过程； 说实话我也不知道在什么时候使用好；