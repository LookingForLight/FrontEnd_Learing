/**
 * Created by zhulei on 2017/7/19.
 */

$(function () {
    //padding适配
    var windowHeight=$(window).height();//浏览器当前窗口可视区域高度
    console.log(windowHeight)
    var middleHeight=($(".content").height());//当前middle的高度
    console.log(middleHeight)
    var navHeight=$(".nav").height();//当前nav的高度
    console.log(navHeight)
    var middlePadding=0;
    var navPadding=0
    middlePadding=windowHeight-middleHeight;//获取需要增加的宽度
    navPadding=windowHeight-navHeight
    $(".middle-area").css("padding-bottom",middlePadding)
    $(".makeup").css("padding-bottom",navPadding)

})