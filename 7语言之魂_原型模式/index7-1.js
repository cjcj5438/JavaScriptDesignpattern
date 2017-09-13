/**
 * Created by Administrator on 2017/9/13.
 */
//图片轮播类
var LoopImages = function (imgArr, container) {
    this.imagesArray = imgArr;//轮播图片数组
    this.container = container;//轮播图片的容器
    this.createImage = function () {
    };//创建轮播图片
    this.changeImage = function () {
    };//切换下一张图片
}
//上下滑动关切类
var SlideLoopImg = function (imgArr, container) {
    //构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container)
    //重写继承切换下一张图片
    this.changeImage = function () {
        console.log('SlideLoopImg changeImage function')
    }
}
//渐隐切换类
var FadeLoopImg = function (imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container)
    this.arrow = arrow;
    this.changeImage = function () {
        console.log('FadeLoopImg changeImage function')
    }
}
//实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg([
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg'
], 'slide', ['left.jpg', 'right.jpg']);
fadeImg.changeImage();
