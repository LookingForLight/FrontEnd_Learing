/**
 * Created by zhulei on 2017/4/16.
 */

$(function(){
    //计算html的fontSize
    document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5 +"px";
    $('.reying').addClass("tabactive");
    var htmldom="";//用来拼接并存储接口的返回值
    var totalCount=0;//默认值为0，返回数据的页数
    var pageIndex=1;//默认值为1，请求参数 pageindex的值
    //初次加载，cityId写死为苏州
    //接口返回的数据类型是 html，可以直接拼接页数
    $.ajax({
        url:"http://m.ly.com/movie/TouchMovieManage/MovieIndex?_=1491986826247",
        data:{"cityId":"226","pageIndex":pageIndex},
        type:"post",
        dataType:'html',
        success:function (data) {

            htmldom+=data;//拼接数据

            $('#MyIndex').html(htmldom);//将拼接的数据放到页面中

            totalCount=$('#MyIndex #totalCount').val();//获取totalCount的值
            console.log(totalCount);//console.log里输出，用于调试

        },
        error:function (er) {

        }

    })
    //监听滑动动作
    $(window).scroll(function () {
        debugger
        var windowHeight=$(window).height();//获取当前可见区域的高度
        var documentHeight=$(document).height();//获取文档的高度
//            alert("windowHeight:"+windowHeight+";"+"documentHeight:"+documentHeight)
        var scrollTop=$(window).scrollTop();//获取相对于窗口的垂直偏移
        //scrollTop==0，说明没有发现垂直偏移，顶部的使用相对相对，否则使用绝对定位
        if(scrollTop==0){

            $('.page-header').css("position","relative")
        }else{
            $('.page-header').css("position","fixed")

        }
        //监听是否滑动到最底部
        //scrollTop的值大于等于 文档的高度-窗口的高度,则表示滑动到底部
        if (scrollTop>=(documentHeight-windowHeight)){

            pageIndex+=1;//pageIndex+1
            //如果totalCount>pageIndex则继续请求获取数据的接口
            if(totalCount>=pageIndex){
               $.ajax({
                url:"http://m.ly.com/movie/TouchMovieManage/MovieIndex?_=1491986826247",
                data:{"cityId":"226","pageIndex":pageIndex},
                type:"post",
                dataType:'html',
                success:function (data) {


                    $('.noloading').css("display","none")//隐藏没有数据的提示
                    $('.loading').css("display","block")//显示正在加载的提示
                    htmldom+=data;//拼接数据
                    $('#MyIndex').html(htmldom);//显示数据
                },
                error:function (er) {

                }
            });
            console.log(pageIndex)
          }else{
                //如果数据已经加载完，隐藏正在加载，显示已全部加载
                $('.noloading').css("display","block")
                $('.loading').css("display","none")
            }
        }
    })
    //待映tab的点击事件
    $('.daiying').click(function(){


        $('.reying').removeClass("tabactive");

        $(this).addClass("tabactive")
        $('.movieitems').css("display","none");


    })
    //热映tab的点击事情
    $('.reying').click(function(){


        $('.daiying').removeClass("tabactive");

        $(this).addClass("tabactive")
        $('.movieitems').css("display","block");


    })
    function GoPage(href) {

        //$("body").addClass("fadeOut");
        //setTimeout(function () {
        //window.location = href;
        if (IsHideHead != "") {
            if (href.indexOf('?') != -1) {
                href += "&hidehead=1";
            }
            else {
                href += "?hidehead=1";
            }
        }
        //if (href.indexOf('?') != -1) {
        //    href += "&t="+Math.random();
        //}
        //else {
        //    href += "?t=" + Math.random();
        //}
        window.open(href, "_self");
        //}, 300);
    }
})