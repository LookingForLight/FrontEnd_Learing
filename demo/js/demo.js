/**
 * Created by zl29801 on 2017/4/25.
 */
$(function () {

    function test() {

        console.log("testt")
    }

    $(".testfunc").click(function () {
        test();
    })

    $(".ondemo").on("click",function () {

        $("p").css("background-color","pink");
    })

    $(".offdemo").click(function () {
        $(".ondemo").off("click");
    })
})