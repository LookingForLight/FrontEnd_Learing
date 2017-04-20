/**
 * Created by zl29801 on 2017/4/12.
 */
$(function () {

 //    title : String
 //    对话框标题
 //    showList : Array
 //    需要显示的item列表
 //
 //    showTitle : String
 //    item上显示的名称
 //    jumpUrl : String
 //    跳转的链接，目前支持格式如下：
 //
 // "tel:"开始的电话
 //    "(http|https)"开始的网页链接
 //    "file"开始的本地链接 since 7.5.0
 //    "callback://" 回调 since 8.2.
    $.fshow_dialog=function (callback) {

        var jsonObj={
            param: {
                "title": "同程旅游客服电话",
                "showList": [{
                    "showTitle": "国内 4007-991-555",
                    "jumpUrl": "tel:4007-991-555"
                }, {
                    "showTitle": "在线咨询",
                    "jumpUrl": "http://livechat.ly.com/out/guest/app?paras=7*tcwvdeviceid*tcwvmid*0*wvc1=1"
                }

                ],

                "tagname": "show_dialog"
            },



        };
        if (callback) {
            jsonObj.param.showList.push({
                "showTitle": "回调前端",
                "jumpUrl": "callback://"
            });
        }
        $.test=function () {
            _tc_bridge_util.set_webview_back();
        }
        _tc_bridge_util.show_dialog(jsonObj);

    }
})