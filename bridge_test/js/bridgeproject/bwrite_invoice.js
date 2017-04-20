/**
 * Created by zl29801 on 2017/4/13.
 */
$(function () {
    /**
     * @class _tc_bridge_project.write_invoice
     * @extends BridgeBase
     * 填写发票信息
     * @since 8.1.6
     * @cfg {Object} param (required)
     * @inheritdoc BridgeBase#param
     * @cfg {Array} param.invoiceContentInfoList 配置可选择的发票信息
     * @cfg {String} param.invoiceContentInfoList.invoiceContent 发票内容
     * @cfg {String} param.invoiceContentInfoList.invoiceContentType 发票类型
     * @cfg {String} param.invoiceContentInfoList.invoiceDesc 发票说明 since 8.2.8
     * @cfg {Object} [param.invoiceContentInfo] 选中的发票信息
     * @cfg {String} param.invoiceContentInfo.invoiceContent 默认选择的发票内容
     * @cfg {String} param.invoiceContentInfo.invoiceContentType 默认选择的发票类型
     * @cfg {String} param.invoiceContentInfo.invoiceDesc 发票说明 since 8.2.8
     * @cfg {String} [param.invoiceTitle] 发票抬头
     * @cfg {String} [param.bottomTips] 底部显示内容配置。**注：828后底部说明优先invoiceDesc字段**
     *
     *     //只支持简单的html标签
     *     <b><font color="#ff0000">*</font></b> <b>发票面值</b><br><font color="#ff6815">#123。</font><small>审核后5日内寄出。</small>
     * @cfg {Object} [param.addressInfo] 邮寄地址信息
     * @cfg {String} param.addressInfo.id 邮寄地址数据的id
     * @cfg {String} param.addressInfo.reciverName 收件人姓名
     * @cfg {String} param.addressInfo.reciverMobileNumber 收件人手机号
     * @cfg {String} param.addressInfo.reciverCityName 城市名
     * @cfg {String} param.addressInfo.reciverCityId 城市ID
     * @cfg {String} param.addressInfo.reciverDistrictName 行政区名称
     * @cfg {String} param.addressInfo.reciverDistrictId 行政区ID
     * @cfg {String} param.addressInfo.reciverProvinceName 省份名称
     * @cfg {String} param.addressInfo.reciverProvinceId 省份ID
     * @cfg {String} param.addressInfo.reciverStreetAddress 街道地址
     * @cfg {Object} [param.getDataParams] 提交发票信息，接口对象的项目数据
     *
     *     getDataParams= {
     *         reqBodyObj: {
     *             "memberId": "mid_0000000",
     *             "orderId": "o1111",
     *             "orderSerialId": "s_order1",
     *             "monthCount": "6"
     *         },
     *         servicename: "save_invoice",
     *         requrl: "http://61.155.197.173:8008/Flight/queryhandler.ashx"
     *     }
     *     // reqBodyObj的key-value可以自己定的，除了一些几个客户端内部使用的对象数据
     *     // invoiceTitle（发票抬头），
     *     // invoiceContentInfo（选择的发票内容），结构同 param.invoiceContentInfo
     *     // addressInfo（邮寄地址）,结构同param.addressInfo
     *     // 这些节点 在用户选择后点击确定会包含reqBodyObj内容，一起提交到servicename对应的接口中。
     *     // 如果提交成功，将返回用户选择的数据，失败则停留在本页面
     * @cfg {Object} param.getDataParams.reqBodyObj 请求接口的body对象，对象内容根据实际需要添加。
     * @cfg {String} param.getDataParams.servicename 获取价格信息的接口名称。
     * @cfg {String} param.getDataParams.requrl 获取价格信息的接口地址。
     *
     */
    /**
     * @demo example1
     * **调用例子：**
     *
     *     _tc_bridge_project.write_invoice({
     *         param:{
     *             invoiceContentInfoList:[{
     *                 "invoiceContent": "餐饮",
     *                 "invoiceContentType": "2",
     *                 "invoiceDesc": "餐饮-我是测试文案说明！！！"
     *             }]
     *         }
     *     })
     *
     * [Demo for more][1].
     * [1]: ../../jsp/project.html
     */
    _project={


        fwrite_invoice:function (isSelected) {

            var jsonObj={

                param:{

                    "invoiceContentInfoList":[
                        {"invoiceContent":"测试",
                        "invoiceContentType":"2",
                        // "invoiceDesc":"测试，我是828新增的invoiceDesc节点,优先显示"
                        },
                        {"invoiceContent":"餐饮",
                            "invoiceContentType":"3",
                            "invoiceDesc":"餐饮，我是828新增的invoiceDesc节点,优先显示"
                    }],
                    // "invoiceContentInfo" : {
                    //     "invoiceContent": "测试",
                    //      "invoiceContentType": "3",
                    //     "invoiceDesc": "测试-我是测试文案说明！！！"
                    // },
                    "invoiceTitle ":"测试发票",//发票抬头
                    // "bottomTips":'<b><font color="#ff0000">*</font></b> <b>发票面值</b><br><font color="#ff6815">#123。</font><small>审核后5日内寄出。</small>',
                    "bottomTips":'<b>*</b> <b>发票面值哈哈哈哈</b><br></b>哈哈哈哈哈哈哈哈哈</b>',

                }
            }
            //显示选中发票的信息
            if (isSelected=="1"){

                jsonObj.param.invoiceContentInfo={

                        "invoiceContent": "测试",
                         "invoiceContentType": "2",
                        "invoiceDesc": "测试，我是828新增的invoiceDesc节点,优先显示"

                }
            }
            //去掉测试发票中的invoiceDesc字段
            if (isSelected=="2"){

                delete jsonObj.param.invoiceContentInfoList[0].invoiceDesc;
            }
            _tc_bridge_project.write_invoice(jsonObj);
        }
    }
})