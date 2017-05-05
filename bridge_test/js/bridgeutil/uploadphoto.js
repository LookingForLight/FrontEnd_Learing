/**
 * Created by zl29801 on 2017/4/14.
 */
$(function () {

    /**
     * @class _tc_bridge_util.upload_photo
     * @extends BridgeBase
     * 上传图片
     * @since 7.1.0
     * @cfg {Object} param (required)
     * @inheritdoc BridgeBase#param
     * @cfg {String} param.imgCount 上传图片数
     * @cfg {String} param.projectTag 客户端项目标志：图片服务器统一为公司服务器，格式为pic5，原目录概念被随机数取代，默认为有拍云 新项目需要中间层进行支持 @中间层对接人 **朱向升** 2017.03.28更新
     * @cfg {String} [param.uploadType] 图片上传方式。
     *
     *
     *      "0" : 默认，手动操作上传
     *      "1" : 选择图片返回后直接上传。since 8.1.8
     *      "2" : 选择图片完成后 直接以base64格式回传前端 since 8.2.8
     *      "3" : 项目自定义配置接口，返回接口响应字符串（成功返回，失败提示) 建议上传敏感信息时使用 since 8.2.8
     *
     * @cfg {Object} param.getDataParams
     * 配置项目补全的接口对象
     * @cfg {Object} param.getDataParams.reqBodyObj 请求接口的body对象，对象内容根据实际需要添加。
     * @cfg {String} param.getDataParams.servicename 获取信息的接口名称。
     * @cfg {String} param.getDataParams.requrl 获取信息的接口地址。
     *
     *     getDataParams= {
     *         reqBodyObj: {
     *              "uploadType" : "1",
     *              "projectTag" : "ceshi",
     *              "memberId" : "",//不能写真实id为空
     *
     *              //客户端请求自动填充节点，服务端需实现对应实现
     *              "picUploadList": [
     *                  {
     *                  "imgStream" : "xxxx"
     *                  },
     *                  {
     *                  "imgStream" : "xxxx"
     *                  }
     *               }],
     *         servicename: "ImageUpload",
     *         requrl: "https://tcmobileapi.17usoft.com/common/General/ImageUploadHandler.ashx"
     *     }
     *     // reqBodyObj的key-value可以自己定的，除了一些几个客户端内部使用的对象数据
     *     // 这些节点 在请求接口时会包含reqBodyObj内容，一起提交到servicename对应的接口中。
     *
     *      接口请求格式可参照 http://tcwireless.17usoft.com/doc/InterfaceDocOnline/InterfaceDetail?handlerId=38&apiId=190
     *
     *     //response 格式如下：
     *     {
     *           "response": {
     *               "header": {
     *                   "rspType": "0",
     *                   "rspCode": "0000",
     *                   "rspDesc": "图片上传成功",
     *                   "rspTime": "1492083263683"
     *               },
     *               "body": {
     *                   "uploadType": "1",
     *                   "uploadImageList": [  //***必须包含***
     *                       {
     *                           "imgUrl": "http://tcw-wsq.b0.upaiyun.com/2017/04/13/34/20170422193422616.jpg"
     *                       }
     *                   ]
     *               }
     *           }
     *      }
     *
     */
    /**
     * @demo example1
     * **调用例子：**
     *
     *     _tc_bridge_util.upload_photo({
     *         param: {
     *             "imgCount": "2",
     *             "projectTag": "guoneiyou"
     *         },
     *         callback: function (data) {
     *             alert("callback:" + JSON.stringify(data));
     *         }
     *     })
     *
     * [Demo for more][1].
     *
     */
    
    _update={
        
        fupdate_photo:function (projectTag,uploadType) {

            var jsonObj={

                param:{

                    "tagname":"upload_photo",
                    "imgCount":"2",
                    "projectTag":"guoneiyou"
                },

                callback:function (data) {
                    alert("callback:" + JSON.stringify(data));
                }
            }

            if (!!projectTag){

                jsonObj.param.projectTag=projectTag;
            }
            if(!!uploadType){ // 818~ "0":默认 ；"1":选择图片返回后直接上传

                jsonObj.param.uploadType=uploadType;
                if (uploadType=='3'){
                    jsonObj.param.getDataParams={
                        "reqBodyObj":{
                            "uploadType" : "1",
                            "projectTag" : "guoneiyou",
                            "memberId" : "",//不能写真实id为空
                        },
                        "servicename":"ImageUpload",
                        "requrl":"https://tcmobileapi.17usoft.com/common/General/ImageUploadHandler.ashx",

                    }
                }
            }

            _tc_bridge_util.upload_photo(jsonObj)
        },
        fupdate_type3:function (type) {

            var jsonObj={

                param:{

                    "tagname":"upload_photo",
                    "imgCount":"2",
                    "projectTag":"guoneiyou",
                    "uploadType":"3",
                    "getDataParams":{
                        "reqBodyObj":{
                            "uploadType" : type,
                            "projectTag" : "guoneiyou",
                            "memberId" : "",//不能写真实id为空
                        },
                        "servicename":"ImageUpload",
                        "requrl":"https://tcmobileapi.17usoft.com/common/General/ImageUploadHandler.ashx",

                    }
                },

                callback:function (data) {
                    alert("callback:" + JSON.stringify(data));
                }
            }
            _tc_bridge_util.upload_photo(jsonObj)
         },
        /**
         * @class _tc_bridge_util.crop_photo
         * @extends BridgeBase
         * 裁剪图片，如果没有项目标识projectTag或upToServer(828 Add)，则返回本地图片; 如要将图片上传到服务器，projectTag或upToServer(828 Add)必须传一个；<font color=red>混合项目使用，h5站点无法访问file文件</font>
         *
         * @since 8.0.4
         * @cfg {Object} param (required)
         * @inheritdoc BridgeBase#param
         * @cfg {String} [param.projectTag] 客户端项目标志：图片服务器统一为公司服务器，格式为pic5，原目录概念被随机数取代，默认为有拍云 新项目需要中间层进行支持 @中间层对接人 **朱向升** 2017.03.28更新
         * @cfg {String} [param.upToServer] 上传服务器 {1:公司pic服务器;2:又拍云服务器} (传此参数后,projectTag参数可不传) since 8.2.8
         * <font color=red>828之前以projectTag做区分；828后以projectTag与upToServer做区分，建议使用upToServer</font>
         * @cfg {String} [param.width] 宽 需要保存的图片分辨率
         * @cfg {String} [param.height] 高 需要保存的图片分辨率
         */
        /**
         * @demo example1
         * **调用例子：**
         *
         *     _tc_bridge_util.crop_photo({
     *         param: {
     *             "imgCount": "2",
     *             "projectTag": "guoneiyou"
     *         },
     *         callback: function (data) {
     *             alert("callback:" + JSON.stringify(data));
     *         }
     *     })

         */
         fcrop_photo:function (width,height,tag,upToSever) {
            var jsonObj={

                param:{

                    "tagname":"crop_photo",
                    "imgCount":"2",
                    // "projectTag":"guoneiyou",
                    "width":"320",
                    "height":"480",
                },

                callback:function (data) {
                    alert("callback:" + JSON.stringify(data));
                }
            }
            if (!!width){
                jsonObj.param.width = width;
            }
            if (!!height){
                jsonObj.param.height = height;
            }
            if (!!tag) {
                jsonObj.param.projectTag = tag;
            }

            if (!!upToSever) {
                jsonObj.param.upToServer = upToSever;
            }
            _tc_bridge_util.crop_photo(jsonObj)
         }
    }
})