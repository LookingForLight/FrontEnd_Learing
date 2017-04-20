/**
 * Created by zl29801 on 2017/4/5.
 */
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
})
    


