//手机端ajax适配 万能

//字段适配

// 服务端数据适配  全部转化成对象格式
function setAjaxDate(data) {
    var domData = {};
    if (data instanceof Array) {//数组格式怎么处理
        for (var i; i < data.length; i++) {
            if (data[i] != null) {
                domData = data[i]
            }
        }
    } else {//接收的是对象格式
        domData = data;
    }
    return domData
}
/**
 * ajax 服务端请求数据 适配
 * @param _url string string格式
 * @param arg  object 对象格式
 */
function getAjaxDate(_url, type,arg) {
    var url = _url;
    console.log(url);
    $.ajax({
        url: url,
        datatype: "json",
        method:type,
        data: arg,
        success: function (data) {
            if (data) {
                doSomeThing(_adapter,setAjaxDate(data))
            }
        }
    })
}

function doSomeThing(basce, obj) {
    if(!obj) return
    for (var i in basce) {
        basce[i] = obj[i] || basce[i]
    }
    // console.log(basce)
    //拿到数据之后在这里的写DOM数据, 可以把数据添加到vue组件里面,也可以使用jq加载到dom里面
    return basce
}
//    getAjaxDate('test.json')
//    getAjaxDate('test2.json')
/*
html:
    <script>
var _adapter = {
    "name": "",
    "version": "",
    "color": "",
    "title": "",
    "adb": "",
    "name2": "",
    "version2": "",
    "color3": "",
    "title4": "",
    "list": "",
    "Items": "",
    "ServiceTime": "",
    "Total": "21321321321",
    "currIndex": "",
    "pageCount": "",
    "pageSize": ""
}
url='http://122.225.193.226:58081/api/PlatformUI/GetAllUser'
var data={}
getAjaxDate(url,'get',{username:''})
console.log(_adapter)
</script>*/