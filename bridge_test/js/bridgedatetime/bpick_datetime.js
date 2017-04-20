/**
 * Created by zl29801 on 2017/4/13.
 */
$(function () {
    /**
     * @class _tc_bridge_datetime.pick_datetime
     * @extends BridgeBase
     * 调用选择时间控件
     * @since 7.3.0
     * @cfg {Object} param (required)
     * @inheritdoc BridgeBase#param
     * @cfg {Object} param.dateTimeInfo 时间控件区间设置
     * @cfg {String} param.dateTimeInfo.startTime 开始时间，格式（yyyy-MM-dd HH:mm）
     * @cfg {String} param.dateTimeInfo.endTime 结束时间，格式（yyyy-MM-dd HH:mm）
     * @cfg {String} param.dateTimeInfo.selectTime 选择时间，格式（yyyy-MM-dd HH:mm）
     * @cfg {String} param.dateTimeInfo.timeInterval 可选择时间间隔区间；小于等于60时，需要是60的因数(如，"5","10"等)；大于60小于等于1440时，需要是60的倍数，1440的因数（如"120"，"180"等）。
     * 当timeInterval="1440"时，效果同_tc_bridge_datetime.pick_date
     * @cfg {String} param.dateTimeInfo.title android标题
     * @cfg {String} param.dateTimeInfo.tips ios提示内容
     */
    /**
     * @demo example1
     * **调用例子：**
     *
     *     _tc_bridge_datetime.pick_datetime({
     *         param: {
     *             "dateTimeInfo": {
     *                 "startTime": "2015-02-22 16:40",
     *                 "endTime": "2015-03-22 16:40",
     *                 "selectTime": "2015-03-12 16:12",
     *                 "timeInterval": "1",
     *                 "title": "android标题",
     *                 "tips": "ios提示内容"
     *             }
     *         },
     *         callback: function (data) {
     *             alert("callback:" + JSON.stringify(data));
     *         }
     *     })
     *
     * [Demo for more][1].
     * [1]: ../../jsp/pick_date.html
     */
    _datetime ={

        pick_datetime:function (timeInterval) {
            var jsonObj={
                param:{
                    "dateTimeInfo":{
                        "startTime":"2017-04-12 16:40",
                        "endTime":"2017-04-25 16:40",
                        "selectTime": "2017-04-14 16:40",
                        "timeInterval":"1",
                        "title":"android标题",
                        "tips":"ios提示内容"

                    }
                },
                callback:function (data) {
                    alert("callback:" + JSON.stringify(data));
                }
            }
            jsonObj.param.dateTimeInfo.timeInterval=timeInterval;
            window._tc_bridge_datetime.pick_datetime(jsonObj);
        },

        pick_date:function () {
            var jsonObj={
                param:{
                    "dateTimeInfo":{
                        "startTime":"2017-04-12 16:40",
                        "endTime":"2017-04-25 16:40",
                        "selectTime": "2017-04-14 16:40",
                        "title":"android标题",
                        "tips":"ios提示内容"

                    }
                },
                callback:function (data) {
                    alert("callback:" + JSON.stringify(data));
                }
            }
            // jsonObj.param.dateTimeInfo.timeInterval=timeInterval;
            window._tc_bridge_datetime.pick_datetime(jsonObj);
        },

        pick_datetime828:function (endtime,timeInterval) {
            var jsonObj={
                param:{
                    "dateTimeInfo":{
                        "startTime":"2017-04-12 16:40",
                        "endTime":"2017-04-25 16:40",
                        "selectTime": "2017-04-14 16:40",
                        "timeInterval":"1",
                        "title":"android标题",
                        "tips":"ios提示内容"

                    }
                },
                callback:function (data) {
                    alert("callback:" + JSON.stringify(data));
                }
            }
            jsonObj.param.dateTimeInfo.endTime=endtime;
            jsonObj.param.dateTimeInfo.timeInterval=timeInterval;
            window._tc_bridge_datetime.pick_datetime(jsonObj);
        },

    }

})