/**
 * Created by Administrator on 2017/9/13.
 */
document.write('<button type="button" id="myinput">Click Me!</button>');
document.onclick= function (e) {
    e.preventDefault();
    if(e.target!==document.getElementById('myinput')){
        hideAlert()
    }
    function hideAlert(){
        alert("nihao")
    }
}