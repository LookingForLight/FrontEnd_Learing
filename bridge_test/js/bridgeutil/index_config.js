/**
 * Created by zl29801 on 2017/4/14.
 */
$(function () {


/**
 * @class _tc_bridge_util.get_index_config
 * @extends BridgeBase
 * 获取客户端首页的配置信息
 * @since 8.1.0
 * @cfg {Object} param
 * @inheritdoc BridgeBase#param
 * @cfg {"false"/"true"} [param.getSwitchList="false"] 是否返回首页配置接口对应的switchList，"false":不返回；"true":返回。
 * @cfg {"false"/"true"} [param.getEmergencyNoticeList="false"] 是否返回首页配置接口对应的projectEmergencyNoticeList(警告tips)，"false":不返回；"true":返回。 since 8.2.5
 * @cfg {Object} [param.getShareInfo] 是否返回首页配置接口对应的shareInfo(分享配置)。 since 8.2.8
 * @cfg {String} param.getShareInfo.projectTag 获取首页分享节点配置匹配projectTag 目前仅支持APP内置的几个项目 selftrip、holiday、train、flightDynamic、hotel、hotelGroupBuy、cruise、scenery、international
 * @cfg {String} param.getShareInfo.parentId 获取首页分享节点配置匹配parentId
 * @cfg {String} param.getShareInfo.themeId 获取首页分享节点配置匹配themeId
 */
/**
 * @demo example1
 * **调用例子：**
 *
 *     _tc_bridge_util.get_index_config({
     *         "param":{
     *              "getSwitchList" : "false",
     *              "getEmergencyNoticeList" : "false",
     *              "getShareInfo" : {
     *                  "projectTag" : "selftrip",
     *                  "parentId":"468",
     *                  "themeId":"",
     *              }
     *         },
     *         callback: function(data){
     *             alert("callback:" + JSON.stringify(data));
     *         }
     *     })
 *
 * [Demo for more][1].
 * [1]: ../../jsp/common_test.html
 */

_indexConfig={



    getIndexConfig:function (getType) {

            var jsonObj={

                param: {

                    "getSwitchList": "false",
                    "getEmergencyNoticeList": "false",
                    "getShareInfo": {
                        "projectTag": "selftrip",
                        "parentId": "468",
                        "themeId": "",
                    }
                },
                callback:function (data) {

                    alert("data:"+JSON.stringify(data));
                }
            }
            if(getType=="hotel"){

                jsonObj.param.getShareInfo={
                    "projectTag": "hotel",
                    "parentId": "-1",
                    "themeId": "-1",

                }
            }

            if (getType=="train"){
                jsonObj.param.getShareInfo={
                    "projectTag": "train",
                    "parentId": "534",
                    "themeId": "-1",

                }


            }
            _tc_bridge_util.get_index_config(jsonObj)

    }
}


})