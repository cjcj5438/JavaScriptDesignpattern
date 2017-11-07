var Flyweight = function () {
    var created = [];
    function create() {
        var dom = document.createElement('div')
        document.getElementById('container').appendChild(dom)
        created.push(dom)
        return dom
    }

    return {
        getDiv: function () {
            if (created.length < 5) {
                return create()
            } else {
                var div = created.shift();
                created.push(div)
                return div
            }
        }
    }
}()
var article = [
    '这是第00000000000条新闻',
    '这是第12条新闻',
    '这是第13条新闻',
    '这是第14条新闻',
    '这是第15条新闻',
    '这是第16条新闻',
    '这是第17条新闻',
    '这是第18条新闻',
    '这是第11条新闻',
    '这是第121条新闻',
    '这是第132条新闻',
    '这是第143条新闻',
    '这是第154条新闻',
    '这是第165条新闻',
    '这是第176条新闻',
    '这是第187条新闻',
];
var paper = 0,
    num = 5,
    len = article.length;//新闻数据长度
for (var i = 0; i < 5; i++) {
    if (article[i])
        Flyweight.getDiv().innerHTML = article[i]
}
document.getElementById("next_page").onclick = function () {
    if (article.length < 5)
        return
    var n = ++paper * num % len,
        j = 0;
    for (; j < 5; j++) {
        if (article[n + j]) {
            Flyweight.getDiv().innerHTML = article[n + j]
        } else if (article[n + j - len]) {
            Flyweight.getDiv().innerHTML = article[n + j - n]
        } else {
            Flyweight.getDiv().innerHTML = ''
        }
    }
}