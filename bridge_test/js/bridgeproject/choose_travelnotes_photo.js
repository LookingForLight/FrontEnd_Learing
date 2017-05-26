/**
 * Created by zl29801 on 2017/5/17.
 */
$(function () {

    _choose={

        //选择游记图片或视频功能
        //type=0 图片，type=1视频 type=3清除缓存
        ftravel_photo:function (type) {

            var jsonObj={

                param:{

                    type:type

                },
                callback:function (data) {
                    alert("data"+JSON.stringify(data));
                }
            }


            _tc_bridge_project.choose_travelnotes_photo(jsonObj)

        },

        fclear_cache:function () {

            var jsonObj={

                param:{

                },
                callback:function (data) {
                    alert("data"+JSON.stringify(data));
                }
            }


            _tc_bridge_project.clear_travelnotes_cache(jsonObj)

        }



    }
})