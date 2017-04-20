/**
 * Created by zl29801 on 2017/4/17.
 */
$(function () {
    /**
     * @class _tc_bridge_util.set_alarm_info
     * @extends BridgeBase
     * 设置本地通知内容
     *
     * alarmUrl是设置的主键，在同一时期，不能设置相同的提醒链接，如果需要定向到多个提醒链接，可以在链接中加入一些标志，作为区分。
     *
     * 设置的时候，alarmTitle，alarmContent也不要相同。
     * @since 7.2.0
     * @cfg {Object} param (required)
     * @inheritdoc BridgeBase#param
     * @cfg {Object} param.alarmInfo 本地通知的基本内容
     * @cfg {String} param.alarmInfo.alarmTitle 本地通知标题
     * @cfg {String} param.alarmInfo.alarmContent 本地通知内容
     * @cfg {String} param.alarmInfo.alarmStartTime 提醒时间，格式（yyyy-MM-dd HH:mm:ss）
     * @cfg {String} param.alarmInfo.alarmUrl 点击通知跳转的页面链接
     * @cfg {String} [param.alarmInfo.repeatInterval=""] 本地通知重复周期，支持两种"day"(一天重复提醒一次），"week"（一星期重复提醒一次) since 7.5.1
     */
    _alarm_info={


        fset_alarm_info:function () {

            var jsonObj={

                param:{
                    "alarmInfo":{

                        "alarmTitle":"测试本地通知这是标题test1",
                        "alarmContent":"测试本地通知这是内容test1",
                        "alarmStartTime":"2017-04-17 11:10:00",
                        "alarmUrl":"https://m.ly.com/selftrip",
                        "repeatInterval":"day"
                    }


                },
                callback:function (data) {

                    alert("callback:" + JSON.stringify(data));
                }
            }
            _tc_bridge_util.set_alarm_info(jsonObj);
        },

        /**
         * @class _tc_bridge_util.get_alarm_info
         * @extends BridgeBase
         * 获取本地通知状态
         * 返回设置提醒结果；0:已设置该跳转页面的本地通知 1：未设置该跳转页面的本地通知
         * @since 7.2.0
         * @cfg {Object} param (required)
         * @inheritdoc BridgeBase#param
         * @cfg {Object} param.alarmInfo 本地通知的基本内容
         * @cfg {String} param.alarmInfo.alarmUrl 点击通知跳转的页面链接，用于查询是否已设置本地通知
         */
        fget_alarm_info:function (staus) {
            if (staus=='0'){
              var jsonObj={

                param:{
                    "alarmInfo":{

                        "alarmUrl":"https://m.ly.com/selftrip",


                    }


                },
                callback:function (data) {

                    alert("callback:" + JSON.stringify(data));
                }
              }
               _tc_bridge_util.get_alarm_info(jsonObj);
            }

            if (staus=='1'){
                var jsonObj={

                    param:{
                        "alarmInfo":{

                            "alarmUrl":"https://m.ly.com/movie",

                        }


                    },
                    callback:function (data) {

                        alert("callback:" + JSON.stringify(data));
                    }
                }
                _tc_bridge_util.get_alarm_info(jsonObj);

            }
        },
        /**
         * @class _tc_bridge_util.cancel_alarm_info
         * @extends BridgeBase
         * 获取本地通知状态
         * @since 7.2.0
         * @cfg {Object} param (required)
         * @inheritdoc BridgeBase#param
         * @cfg {Object} param.alarmInfo 本地通知的基本内容
         * @cfg {String} param.alarmInfo.alarmUrl 点击通知跳转的页面链接，用于查询本地通知，取消对应的本地通知
         */
        fcancel_alarm_info:function (staus) {
            if (staus=='0'){
                var jsonObj={

                    param:{
                        "alarmInfo":{

                            "alarmUrl":"https://m.ly.com/selftrip",

                        }


                    },
                    callback:function (data) {

                        alert("callback:" + JSON.stringify(data));
                    }
                }
                _tc_bridge_util.cancel_alarm_info(jsonObj);
            }

            if (staus=='1'){
                var jsonObj={

                    param:{
                        "alarmInfo":{

                            "alarmUrl":"https://m.ly.com/movie",

                        }


                    },
                    callback:function (data) {

                        alert("callback:" + JSON.stringify(data));
                    }
                }
                _tc_bridge_util.cancel_alarm_info(jsonObj);

            }
        }

    }
})