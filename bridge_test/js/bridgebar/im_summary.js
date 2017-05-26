/**
 * Created by zl29801 on 2017/4/5.
 */
// 检测客户端im消息数，适合隐藏客户端头部的页面使用
// 页面切换需要重新注册
$(function () {

    $.fcheck_im_summary=function (callable, changeCallBack) {

        var jsonObj ={

            param:{

                "changeCallBack": "true"
            },

            callback: $.alertmsg
        }
        if(!!changeCallBack){

            jsonObj.param.changeCallBack=changeCallBack;
        }
        _tc_bridge_bar.check_im_summary(jsonObj)
    }


    $.alertmsg=function (data) {

        alert("callback:" + JSON.stringify(data));
    }
    //_tc_bridge_bar.show_navbar_close_icon
    // canShowCloseIcon : "0"/"1"
    // 触发返回功能时，是否显示关闭按钮;0 隐藏关闭按钮(默认)；1 有返回时显示关闭按钮
    //
    // Defaults to: "0"
    _close={

        fshow_navbar_close_icon:function (type) {

            var jsonObj={

                "param":{
                    "tagname": "",
                    "canShowCloseIcon":"1"
                },
                callback:function () {

                    }
                }

            if(type!=undefined){
                jsonObj.param.canShowCloseIcon = type;

            }

            alert(JSON.stringify(jsonObj.param));
            window._tc_bridge_bar.show_navbar_close_icon(jsonObj);


        }


    }

})
    


