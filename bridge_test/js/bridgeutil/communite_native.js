/**
 * Created by zl29801 on 2017/5/16.
 */
$(function () {

    function com_native() {
        $(".comunicate-native").addClass("onclick")
        var jsonObj = {
            param: {
                "command": "command",
                "argus": "argus"
            },
            callback:function (data) {
                alert("data:"+JSON.stringify(data));
                $(".comunicate-native").removeClass("onclick")
            }
        }

        _tc_bridge_util.communicate_with_native(jsonObj)


    }

    $(".comunicate-native").click(com_native);
})