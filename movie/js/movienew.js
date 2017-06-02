/**
 * Created by zhulei on 2017/4/16.
 */

$(function(){
    //计算html的fontSize
    document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5 +"px";
    $('.reying').addClass("tabactive");
    var htmldom="";//用来拼接并存储reying接口的返回值
    var totalpage=0;//默认值为0，返回数据的页数
    var pageIndex=1;//默认值为1，请求参数 pageindex的值
    var upcomingdom="";//用来拼接并存储upcoming接口的返回值
    var mdata=[];//空数组
    var mdata2=[];//空数组
    function getmovies(page) {
        $.ajax({
            url:"http://10.101.52.80:3000/test",

            type:"get",
            dataType:'json',
            data:{"pages":page},
            success:function (data) {
                mdata=data.data;
                totalpage=data.len;
                renderReying(mdata)
                //
                // for(i=0;i<mdata.length;i++){
                //
                //     htmldom+='<li class="info">'+
                //
                //         '<div class="m-img">'+
                //         '<img src="'+"//pic5.40017.cn/02/001/c7/3d/rBLkCVkI07mAPJzKAACAAGSx2cU555.jpg"+'">'+
                //         '</div>'+
                //         '<div class="m-other">'+
                //
                //         '<p class="name">'+mdata[i].name+'<span class="type">'+mdata[i].type+'</span></p>'+
                //
                //         '<p class="desc">'+mdata[i].desc+'</p>'+
                //         '<p class="player">'+mdata[i].people+'</p>'+
                //
                //         '</div>'+
                //         '<div class="buy">'+
                //         '<span class="score">'+mdata[i].score+'</span>'+
                //         '<span class="book">购票</span></div></li>'
                // }
                // // htmldom+=data;//拼接数据
                // console.log(htmldom)
                // $('.movie_list').html(htmldom);//将拼接的数据放到页面中
                //
                // //
                // // totalCount=$('#MyIndex #totalCount').val();//获取totalCount的值
                // // console.log(totalCount);//console.log里输出，用于调试
                // console.log(mdata)
                // console.log(totalpage)
            },
            error:function (er) {

            }

        })
    }

    function renderReying(data) {
        for(i=0;i<data.length;i++){

            htmldom+='<li class="info">'+

                '<div class="m-img">'+
                '<img src="'+"//pic5.40017.cn/02/001/c7/3d/rBLkCVkI07mAPJzKAACAAGSx2cU555.jpg"+'">'+
                '</div>'+
                '<div class="m-other">'+

                '<p class="name">'+data[i].name+'<span class="type">'+data[i].type+'</span></p>'+

                '<p class="desc">'+data[i].desc+'</p>'+
                '<p class="player">'+data[i].people+'</p>'+

                '</div>'+
                '<div class="buy">'+
                '<span class="score">'+data[i].score+'</span>'+
                '<span class="book">购票</span></div></li>'
        }
        // htmldom+=data;//拼接数据
        console.log(htmldom)
        $('.movie_list').html(htmldom);//将拼接的数据放到页面中
    }


    function getUpcoming(page) {
        $.ajax({
            url:"http://10.101.52.80:3000/upcoming",

            type:"get",
            dataType:'json',
            data:{"pages":page},
            success:function (data) {
                mdata2=data.data;
                totalpage=data.len;
                // renderUpcoming(mdata2)

            },
            error:function (er) {

            }

        })
    }

    function  renderUpcoming(data) {


        for(i=0;i<data.length;i++){

            var date = data[i].date;
            //
            upcomingdom+='<li>            <div>'+data[i].date+'</div></li>'

        }
        // htmldom+=data;//拼接数据
        console.log(upcomingdom)
        $('.upcoming .info').html(upcomingdom);//将拼接的数据放到页面中
    }

    //监听滑动动作
    $(window).scroll(function () {

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
            if(totalpage>=pageIndex){
                getmovies(pageIndex)
                $('.noloading').css("display","none")//隐藏没有数据的提示
                $('.loading').css("display","block")//显示正在加载的提示
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
        $('.upcoming').css("display","block");
        getUpcoming(1);


    })
    //热映tab的点击事情
    $('.reying').click(function(){


        $('.daiying').removeClass("tabactive");

        $(this).addClass("tabactive")
        $('.movieitems').css("display","block");
        $('.upcoming').css("display","none");


    })


    function init() {
        getmovies(pageIndex);
    }
    init();
})