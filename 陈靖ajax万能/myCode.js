// 代码库
var chenjing = {
    //DOM操作
    DOM: {
        ID: function (id) {
            return document.getElementById(id)
        },
        CSS: function (id, key, value) {
            return document.getElementById(id).style[key] = value;
        },
        attr: function (id, key, value) {
            return document.getElementById(id)[key] = value;
        },
        html: function (id, html) {
            document.getElementById(id).innerHTML = html
        },
        on: function (id, type, fn) {
            // document.getElementById(id)['on'+type]=fn
            var dom = typeof id === 'string' ? this.DOM(id) : id;
            //标准DOM
            if (dom.addEventListener) {
                dom.addEventListener(dom, type, fn)
                //IEDOM
            } else if (dom.attachEvent) {
                dom.attachEvent('on' + type, fn)
            } else {
                dom['on' + type] = fn
            }
        }
    },
    // 参数适配
    argumentsUtil: function (obj) {
        var _adapter = {
            name1: '下雨1',
            name2: '下雨2',
            name3: '下雨3',
            name4: '下雨4'
        }
        for (var i in _adapter) {
            _adapter[i] = obj[i] || _adapter[i]
        }
        //dosomething
    },
}

// 参数适配
function doSomeThing(obj) {
    var _adapter = {
        name1: '下雨1',
        name2: '下雨2',
        name3: '下雨3',
        name4: '下雨4'
    }
    for (var i in _adapter) {
        _adapter[i] = obj[i] || _adapter[i]
    }

}
// 服务端数据适配
function setAjaxDate(data) {
    return [data['key1'], data['key2'], data['key3'],]
}

function getAjaxDate(_url, data) {
    var url = _url
    $.ajax({
        url: url,
        datatype: "json",
        method: 'get',
        data: data,
        success: function (data) {
            if (data) {

                // doSomeThing(setAjaxDate(data))
            }
        }
    })
}
getAjaxDate('test.json')
