/**
 * Created by zl29801 on 2017/5/17.
 */
$(function () {

    _get={

        //选择游记图片或视频功能
        //type=0 图片，type=1视频 type=3清除缓存
        fread_dir:function (id) {

            var jsonObj={

                param:{

                    "projectId": id

                },
                callback:function (data) {
                    alert("data"+JSON.stringify(data));
                }
            }


            _tc_bridge_web.read_hybrid_directory_info(jsonObj)

        },

        fsend_error:function () {

            var jsonObj={

                param:{

                    "projectName": "ceshi",
                    "errorCode": "-1009",
                    "errorDesc": "网络连接失败",
                    "failUrl": window.location.href

                },
                callback:function (data) {
                    alert("data"+JSON.stringify(data));
                }
            }


            _tc_bridge_web.send_error_info(jsonObj)
            alert("success");

        }

    }
})