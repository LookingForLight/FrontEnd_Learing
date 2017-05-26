/**
 * Created by zl29801 on 2017/5/24.
 */
$(function () {
//     scene : String (optional)
//     分享场景。发送到朋友圈——timeline(默认);发送到聊天界面——session;添加到微信收藏——favorite
//
//     Defaults to: "timeline"
//     title : String
//     分享标题
//     desc : String
//     分享描述
//     link : String
//     分享链接
//     imgUrl : String
//     分享图标。特别提醒：iphone 8.0.7之前版本（不包含），由于客户端下载分享图片异常，不能设置该属性，需要做好兼容。
// type : String (optional)
//     分享类型,music、video, img, text或webpage，不填默认为webpage
//
//     Defaults to: "webpage"
//     dataUrl : String (optional)
//     分享的数据内容。如果type是music或video，则要提供数据链接，默认为空
    _share = {

        wxshare:function (scene,type) {
            var jsonObj={

                param: {
                    "scene": scene,//分享场景 发送到朋友圈——timeline(默认);发送到聊天界面——session;添加到微信收藏——favorite Defaults to: "timeline"
                    "title": "测试分享标题朱磊测试分享标题朱磊",//分享标题
                    "desc": "测试分享分享内容测试分享分享内容测试分享分享内容",//分享内容
                    "link": "http://m.ly.com/",//分享链接
                    "type": "webpage",//分享类型,music、video, img, text或webpage，不填默认为webpage
                    "imgUrl":"http://file.40017.cn/tcweb/swact/20170518hls/img/share.jpg"
                },
                callback: function (data) {
                    alert("callback:" + JSON.stringify(data));
                }
            }

            _tc_bridge_bar.share_weixin_msg(jsonObj)
        },
    //     tcsharetxt : String
    //     分享的标题信息
    //     tcsharedesc : String
    // 分享的描述信息。since 7.4.2
    // tcshareurl : String
    // 分享的跳转链接
    // tcshareimg : String
    // 分享展示的图标，需要限制大小一般为10kb左右，图片太大容易分享异常
    // hideToast : String (optional)
    // "0"默认显示|"1" 隐藏Toast 仅朋友圈。since 7.4.0
    //
    // Defaults to: "0"
    // tcsharetype : String (optional)
    // "false"：调用分享面板；"true"：调用微信单独的分享功能
    //
    // Defaults to: "false"
    // shareType : String (optional)
    // tcsharetype="true"时有效，shareType="pengyouquan":微信朋友圈(默认)|shareType="haoyou"：微信好友。since 7.4.2
        fshareInfoFromH5:function (tcsharetpye,hidetoast,sharetype) {

            var jsonObj = {

                param: {
                    "tcsharetxt": "测试分享标题",
                    "tcsharedesc": "这是一段描述内容仅在分享到朋友,新浪微博，短信时可显示",
                    "tcshareurl": "http://m.ly.com/",
                    "tcshareimg": "http://file.40017.cn/tcweb/swact/20170518hls/img/share.jpg",
                    // "tcsharetpye":tcsharetpye,//    // tcsharetype : String (optional)"false"：调用分享面板；"true"：调用微信单独的分享功能
                    // "hideToast":hideToast //"0"默认显示|"1" 隐藏Toast 仅朋友圈。since 7.4.0
                    "hideToast": "1",// 0 默认显示|1 隐藏Toast 仅单独使用微信分享到朋友圈功能 740添加开始支持回调
                    "shareType": "pengyouquan",//742添加，tcsharetype=true时有效，pengyouquan:朋友圈(默认)|haoyou：好友
                    "tcsharetype": false

                },
                callback: function (data) {// 仅微信单独的分享才有回调信息。
                    alert("callback:" + JSON.stringify(data));
                }
            }

            jsonObj.param.tcsharetype = tcsharetpye;

            if (hidetoast!=undefined){

                jsonObj.param.hideToast=hidetoast;
            }
            if(!!sharetype){

                jsonObj.param.shareType=sharetype;
            }

            // alert(JSON.stringify(jsonObj.param));
            // alert('sharetype:'+tcsharetpye+'hideToast:'+hideToast);
            _tc_bridge_bar.shareInfoFromH5(jsonObj);


        }
    }
})