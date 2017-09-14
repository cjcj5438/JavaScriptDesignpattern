/**
 * Created by Administrator on 2017/9/14.
 */
//alert("加载成功！");
//console.log("获取main.js成功")
//这个呢就是想<script src=""> 引用文件
require.config({
    paths: {
        "jquery": "jquery"
        //"underscore": "http://apps.bdimg.com/libs/underscore.js/1.7.0/underscore-min.js",
        //"backbone": "http://apps.bdimg.com/libs/backbone.js/1.1.2/backbone-min.js"
    },
    shim: {
        'underscore':{
            exports: '_'//exports值（输出的变量名）
        },
        'backbone': {
            deps: ['underscore', 'jquery'],//deps数组，表明该模块的依赖性。
            exports: 'Backbone'//输出的变量名字
        }
    }
});
require(['math','jquery'], function (math,$){
    alert(math.add(1,1));
    alert($("#div").text());
});