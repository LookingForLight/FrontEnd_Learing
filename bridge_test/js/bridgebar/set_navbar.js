/**
 * Created by zl29801 on 2017/4/6.
 */

$(function () {

    $.fset_navbar_with_two_tab = function (centerLeftBg, centerRightBg, right) {

        var jsonObj = {

            param: {
                'left': [{'tagname': 'tag_click_back'}],
                "centerType": '3',//3居中，tab可选
                'center': [{'tagname': 'tag_click_left', 'value': '左按钮', 'backgroud': 'bg_normal'},
                    {"tagname": "tag_click_right", "value": "右按钮abc", "backgroud": "bg_pressed"}
                ],
                'right': [{"tagname": "tag_click_city", "value": "苏州", "icon_type": "i_down"}]
            },

            callback: function (data) {
                if (data && data.tagname == 'tag_click_back') {

                    _tc_bridge_util.set_webview_back()

                }
            }
        };
        if (centerLeftBg != undefined) {

            jsonObj.param.center[0].backgroud = centerLeftBg;
        }
        if (centerRightBg != undefined) {

            jsonObj.param.center[1].backgroud = centerRightBg;
        }
        if (right == '2') {

            jsonObj.param.right = null
        } else if (right == '3') {

            jsonObj.param.right = [{
                "tagname": "tag_click_city",
                "value": "测试",
                "icon": "i_phone"
            }, {"tagname": "tag_click_test2", "value": "测试222", "icon": "i_share"}];
        }

        _tc_bridge_bar.set_navbar(jsonObj)


    }

    $.fset_navbar_with_i_shareNa = function () {

        var jsonObj = {

            param: {

                "centerType": '1',//3居中，tab可选
                'center': [{'value': '我是标题'}],
                'right': [{"tagname": "tag_share", "icon": "i_share"}]
            },

            // callback:$.alertmsg()
        };

        _tc_bridge_bar.set_navbar(jsonObj)
    }
    $.fset_navbar_with_i_shareH5 = function () {

        var jsonObj = {

            param: {

                "centerType": '1',//3居中，tab可选
                'center': [{'value': '我是标题'}],
                'right': [{"tagname": "tag_click_share", 'value': '分享', "icon": "i_share"}],

            },

            callback: function (data) {
                if (data && data.tagname == 'tag_click_share') {

                    alert('you click share button');
                }
            }
        };

        _tc_bridge_bar.set_navbar(jsonObj)
    }

    $.fset_navbar_of_centertype = function (centertype) {

        var jsonObj = {

            param: {
                'left': [{'tagname': 'tag_click_back'}],
                "centerType": '3',//3居中，tab可选
                'center': [{'tagname': 'tag_click_left', 'value': '左按钮', 'backgroud': 'bg_normal'},
                    {"tagname": "tag_click_right", "value": "右按钮abc", "backgroud": "bg_pressed"}
                ],
                'right': [{"tagname": "tag_click_share", "value": "分享", "icon": "i_share"}]
            },

            callback: function (data) {


                if (data.tagname == 'tag_click_search') {

                    // alert('you click search button')
                    window.location.href = '/view/index.html'
                }

                if (data.tagname == 'tag_click_back') {

                    _tc_bridge_util.set_webview_back()
                }
            }
        };
        if (centertype == '4') {
            jsonObj.param.centerType = centertype;
            jsonObj.param.center = [
                {'tagname': 'tag_click_city', 'value': '苏州'},
                {'tagname': 'tag_click_search', 'hint': '目的地 关键词'}
            ];
        }
        if (centertype == '5') {
            jsonObj.param.centerType = centertype;
            jsonObj.param.center = [
                {
                    "tagname": "tag_click_searcBar",
                    "hint": "目的地、关键词"
                },
                {
                    "tagname": "tag_click_clear",
                    "value": "苏州",
                }
            ]
        }

        _tc_bridge_bar.set_navbar(jsonObj)
    }


    $.fset_navbar_of_subTitle = function (subtitle) {

        var jsonObj = {

            param: {
                'left': [{'tagname': 'tag_click_back'}],
                "centerType": '1',//3居中，tab可选
                'center': [{'value': '主标题', 'subTitle': '子标题'},

                ],
                'right': [{"tagname": "tag_click_share", "value": "分享", "icon": "i_share"}]
            },

            callback: function (data) {

                if (data.tagname == 'tag_click_back') {

                    _tc_bridge_util.set_webview_back()
                }
            }
        };
        if (subtitle != undefined) {
            jsonObj.param.center[0].subTitle = subtitle;
        }

        _tc_bridge_bar.set_navbar(jsonObj)
    }

    $.fset_navbar_of_right = function (iconimg) {

        var icon = {

            'phone': 'i_phone',
            'share': 'i_share',
            'search': 'i_search',
            'favorite': 'i_favorite',
            'unfavorite': 'i_unfavorite',
            'home': 'i_home',
            'map': 'i_map',
            'largeimg': 'i_largeimg',
            'smallimg': 'i_smallimg',
            'online': 'i_online',
            'more': 'i_more',
            'msg': 'i_msg'

        };
        var jsonObj = {

            param: {

                'left': [{'tagname': 'tag_click_back'}],
                "centerType": '1',//3居中，tab可选
                'center': [{'value': '测试右侧按钮', 'subTitle': 'TEST'},

                ],
                'right': [{"tagname": "tag_click_share", "value": "分享", "icon": "i_share"}]
            },

            callback: function (data) {

                if (data.tagname == 'tag_click_back') {

                    _tc_bridge_util.set_webview_back()
                }
            }
        };
        switch (iconimg) {

            case 'phone':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.phone}];
                break;
            case 'home':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.home}];
                break;
            case 'share':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.share}];
                break;
            case 'search':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.search}];
                break;
            case 'favorite':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.favorite}];
                break;
            case 'unfavorite':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.unfavorite}];
                break;
            case 'map':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.map}];
                break;
            case 'largeimg':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.largeimg}];
                break;
            case 'smallimg':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.smallimg}];
                break;
            case 'online':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.online}];
                break;
            case 'more':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.more}];
                break;
            case 'msg':
                jsonObj.param.right = [{"tagname": "tag_click_" + iconimg, "value": iconimg, "icon": icon.msg}];
                break;

        }
        _tc_bridge_bar.set_navbar(jsonObj)
    }
    $.fset_navbar_of_icontype = function () {

        var jsonObj = {

            param: {
                'left': [{'tagname': 'tag_click_back'}],
                "centerType": '1',//3居中，tab可选
                'center': [{'value': '主标题', 'subTitle': '子标题'}],
                'right': [{"tagname": "tag_click_s1", "value": "景点城市"},
                    {"tagname": "tag_click_s2", "value": "苏州", "icon_type": "i_down"}]
            },

            callback: function (data) {

                if (data.tagname == 'tag_click_back') {

                    _tc_bridge_util.set_webview_back()
                }
            }
        };

        _tc_bridge_bar.set_navbar(jsonObj)
    }

    $.fset_navbar_of_longtitle = function () {

        var jsonObj = {

            param: {
                'left': [{'tagname': 'tag_click_back'}],
                "centerType": '1',//3居中，tab可选
                'center': [{'value': '测试标题长度测试标题长度测试标题长度测试标题长度测试标题长度测试标题长度',}],
                'right': [{"tagname": "tag_click_s1", "value": "景点城市"},
                    {"tagname": "tag_click_s2", "value": "苏州", "icon_type": "i_down"}]
            },

            callback: function (data) {

                if (data.tagname == 'tag_click_back') {

                    _tc_bridge_util.set_webview_back()
                }
            }
        };

        _tc_bridge_bar.set_navbar(jsonObj)
    }

    $.fset_navbar_of_longtitle_with_noright = function () {

        var jsonObj = {

            param: {
                'left': [{'tagname': 'tag_click_back'}],
                "centerType": '1',//3居中，tab可选
                'center': [{'value': '测试标题长度测试标题长度测试标题长度测试标题长度测试标题长度测试标题长度',}],
                'right': [],
            },

            callback: function (data) {

                if (data.tagname == 'tag_click_back') {

                    _tc_bridge_util.set_webview_back()
                }
            }
        };

        _tc_bridge_bar.set_navbar(jsonObj)
    }

    $.fset_button_with_imMakk = function () {

        var jsonObj = {

            param: {
                'left': [{'tagname': 'tag_click_back'}],
                "centerType": '1',//3居中，tab可选
                'center': [{'value': '测试imMark',}],
                'right': [{'tagname': 'tag_click_msg', 'value': 'message', 'icon': 'i_msg', 'imMark': 'true'}],
            },

            callback: function (data) {

                if (data.tagname == 'tag_click_back') {

                    _tc_bridge_util.set_webview_back()
                }
            }
        };

        _tc_bridge_bar.set_navbar(jsonObj)
    }
    $.fset_button_with_hotMark = function () {

        var jsonObj = {

            param: {
                'left': [{'tagname': 'tag_click_back'}],
                "centerType": '1',//3居中，tab可选
                'center': [{'value': '测试imMark',}],
                'right': [{'tagname': 'tag_click_share', 'value': 'share', 'icon': 'i_share', 'hotMark': 'true'}],
            },

            callback: function (data) {

                if (data.tagname == 'tag_click_back') {

                    _tc_bridge_util.set_webview_back()
                }
            }
        };

        _tc_bridge_bar.set_navbar(jsonObj)
    }

    var enumDataImageIcon = {
        s_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACrElEQVR42u2Xz2sTQRSAX8VSb1K8iNqKooJH2Ux6Ksn+iPQqxZMIehJB0do/IMhmQWsvHr2KSEGk0tSLIoWIYNUKij20F2/N7iaUZnYT0kYzzhMKs0HDJiTdLcwHDwKZSd63781LBiQSSW9JZdkhzfKm1Rz9mjZp/W9YdEU3vXv4HsQZ40FtNG36q5rls//Ej4tmbSS2T15Mvp3ExOPmEMQNbBtMMEyoljcFcQN7PqyAlqNfIG7gYQ0tYNIaxA1MrJPY3wImbUqBKAXSFv0tBSIVMOkvKRDtGKWN/T6FdqRAxFNoWwpEPIXqUqBT6ALU/UVgu8GW4GD3f6f9TRDYNJTDrk7YbtiqUumHwIYoUJuHERDAS0r4CvgFECgbY+cFAR7KT+g1POmCKFDNw6WggHc3fBtVb4CAoyauBgXIG+g1Xh5mRAGah6cggBd11fK/h7lOprIs0H6uRl6KAo5O7kOv4QmPiwJ4Jqqv4FiwCtXjvD2+tRmfK6kZ/ygI2HritK0rDVGgrClJ6DWMwYC/AGuCBMYcIC2V0CzvjmbRz3j3xUjn6CfeYreUJ2wQkGD75INPX1mFfsEFrrcIYCvdhC4paWQakxajpJMr0C9YFg54i7AsClRmh9/xnr0NHcInzZStk2aLwAcGMAD9pPIazvFKVDD5rdnhJeHLX5RTyRPQHpz5o66emMc9wdlPtvA8wF7Aq2BUHh1525qEo5JtR1WeOXpickO9cJIpyuD6xJmhYiZ5ytWSl3mlnuOaf+2zDaLDXmJrSgZ/MYVEugo+gSh+FkSBa4yd5Ul87DZ5XpFl/AyIEjzYjkau8WqshU2cr13HPbgX4gJOD97n465GZlyVvC9mSKloKI2iTnbwNT+gBX54H+IaXAtxJzE3ycSAFqSAFJACUkAikXD+AHj5/wx2o5osAAAAAElFTkSuQmCC",
        s_img1: "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACrElEQVR42u2Xz2sTQRSAX8VSb1K8iNqKooJH2Ux6Ksn+iPQqxZMIehJB0do/IMhmQWsvHr2KSEGk0tSLIoWIYNUKij20F2/N7iaUZnYT0kYzzhMKs0HDJiTdLcwHDwKZSd63781LBiQSSW9JZdkhzfKm1Rz9mjZp/W9YdEU3vXv4HsQZ40FtNG36q5rls//Ej4tmbSS2T15Mvp3ExOPmEMQNbBtMMEyoljcFcQN7PqyAlqNfIG7gYQ0tYNIaxA1MrJPY3wImbUqBKAXSFv0tBSIVMOkvKRDtGKWN/T6FdqRAxFNoWwpEPIXqUqBT6ALU/UVgu8GW4GD3f6f9TRDYNJTDrk7YbtiqUumHwIYoUJuHERDAS0r4CvgFECgbY+cFAR7KT+g1POmCKFDNw6WggHc3fBtVb4CAoyauBgXIG+g1Xh5mRAGah6cggBd11fK/h7lOprIs0H6uRl6KAo5O7kOv4QmPiwJ4Jqqv4FiwCtXjvD2+tRmfK6kZ/ygI2HritK0rDVGgrClJ6DWMwYC/AGuCBMYcIC2V0CzvjmbRz3j3xUjn6CfeYreUJ2wQkGD75INPX1mFfsEFrrcIYCvdhC4paWQakxajpJMr0C9YFg54i7AsClRmh9/xnr0NHcInzZStk2aLwAcGMAD9pPIazvFKVDD5rdnhJeHLX5RTyRPQHpz5o66emMc9wdlPtvA8wF7Aq2BUHh1525qEo5JtR1WeOXpickO9cJIpyuD6xJmhYiZ5ytWSl3mlnuOaf+2zDaLDXmJrSgZ/MYVEugo+gSh+FkSBa4yd5Ul87DZ5XpFl/AyIEjzYjkau8WqshU2cr13HPbgX4gJOD97n465GZlyVvC9mSKloKI2iTnbwNT+gBX54H+IaXAtxJzE3ycSAFqSAFJACUkAikXD+AHj5/wx2o5osAAAAAElFTkSuQmCC",
        s_popup_online: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAh1BMVEUAAAB56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ih56Ijlxx0eAAAALHRSTlMABwMUeXIc+Gsx79u/QDs30Ilh9NSVWlVGKQ7m4svFuKmbfo5PIumihUSySSoOxNUAAAIMSURBVEjH7ZXZeqowFIUDyKgIyChOgEOrXe//fGcjmIRRz2W/r/9Nm+ys7DHI/hhD2d4vmWd8fPxSLtHgnPQPZFrgoMPJfeNhEeKJv3qcjrtWdJ1RbH0Qkb5t13l6BGFak4qfsL7/zmSMbxBfyrgiNcmYDLa9Qx3cqCYjxd4bswS1H3W4f3UoC5uNsiDNYrCrkvudzSaoExoEYNHmmk1ClfN7oeUU1oZNY4cDu06JsDk2wLLrhqbqwma5AVmn9pQ7m6eiQvfWwWtoFromWdxqozRNAG5yhakg7cDeTXJodDpyVF6xb0UXaYX26gOImBeSLniVqgBS+iMd83iWwIOPNsAbH9A/Uu6ijwUIi0e8F6aFyJdZskRbAaUqSrlEqPNjsZSiPC2G1pk9QxHdDiYkM6NZdSXZO0khvT8dPOU5IsDmDUZN+UahAY7KM1yCOLjC3GQ8mPVCrNYOsBflMOJQV9urCz9R+aynslPXvSPiEupfZNmatv6mux6N5EKj13OuOPjhmhU45+ZcTtforEcMX9zSfCVhFja3Yj/I8GriLMeaJelaETM1+mqr6Q9G0jyIAepqqBE+VsqYJfd5tjJ23TY/H+zzwY+y3gS7Ye0jZxMoQW3OVKaVIcxT89TPQKnMfRXrluy+Dqi5aU9/acLm8UrxY7lhH6LaltlIXPY5yVNzZv+DoceVzX4V/wBAB0eTMXfjGQAAAABJRU5ErkJggg==",
        s_popup_msg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAP1BMVEUAAADi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKrR6cHAAAAFHRSTlMADWb4zecYMD4krsFJVPJzjJx80wL+nOQAAAFMSURBVEjHzVXtjoQgDAQ/QHFFEd7/Wc9yCSPbgyb3Z3d+mWYo02mp6quxHC6OKaUxumMRuDYQExiD7SSeEsfUuMK4RJjP3RqttLH7OeeIM4rjlWWcay3uzJJejD1Q/OJ5TD4wvEWPO+b/Vrl4xt+pJtuyixx46lmJXVE4/1HUdhtie+24Ldpgyn146bc6y0HyS/VxUXoo1wJdQ/1tYijxuXTfV/yQ0qEyXEp7CSfg3WpXEq5tOhTPhaFFMbqcpw8RYEnGIDu0C4B2ONMAnOG+++qpct/RVRjJvTToKmaG0fnMYCK5GF9N5D/mHa/Jyq8JcuS3+sTQ2QQjNkHFp3rlPYMtFqsItlidBp0wGCmzVDuSw+HSPXY2MORPv8XF/n7HSOvsG8FPQfh7bDTJQyYfXSLU5OoCL67hDdorI5LmQeZhqk8tkYB1W9Un8QNC4yKyuQv0MQAAAABJRU5ErkJggg==",
        s_navbar_msg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAAMFBMVEUAAAAuvVkuvVkuvVkuvVkuvVkuvVkuvVkuvVkuvVkuvVkuvVkuvVkuvVkuvVkuvVkfu8cHAAAAD3RSTlMAOvPkJ00NiBhfn71yz2hKKu/1AAABeElEQVRIx+2Uv0rDUBTGjzWNrZW2OIkg1cU/g1QHB3FIfAAh4AM0dBQHcXNK9QlEB0dxESdxcLdvoPgCdROckoZSUMtnQoI3N/cmIZtCf0Obc/n4uOfccw6N+WdMfLwC6/f1ZMU8Qm6SFJf4ZVuu2AfckzlTPb3SgC2Z4gBY0YNP5Ri4FRWKhjUWXcDVBUkDQ5NFJQuOYAIY0bgIxG3O4MRdV2OSJ9RjVcQXf1DFgGK08MbFbXTjkhksc/GzSwLaNxc2B6Kk1efvtuj/1eBhU0iBy2AKR0wSPWRUYIiSIh6IUUBH8mrYIEYNpihRYXMSkgA7n8sk9Iy7sIwCWEaSugSwQ0l1A1h1s97IzfvS8n7J7rrz7N7NPwEKeN8yxILPcrdReliSzHQ072vZTFObOSuWdDPQdDha6u67BmyShDJevN+FtC1V8jtoDz79pF3Xc+gQHjvJG9MaFpv47FAKjZGGkdyA9Thcg1KpAF1Kp4o7ykB5pDF/kR8ttd7xTKqY/AAAAABJRU5ErkJggg==",
        b_img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGkCAMAAABZ6FBvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkIzNzJBNDhGNUIwMTFFNUEwMEJEQThFNTFBNkVBMDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkIzNzJBNDlGNUIwMTFFNUEwMEJEQThFNTFBNkVBMDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQjM3MkE0NkY1QjAxMUU1QTAwQkRBOEU1MUE2RUEwMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQjM3MkE0N0Y1QjAxMUU1QTAwQkRBOEU1MUE2RUEwMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkJ6MDsAAADAUExURdjZ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"
    }
    $.fset_navbar_of_dataimage = function (type) {


        var jsonObj = {
            param: {
                center: [{tagname: "tag_click_title", value: "苏州"}],
                right: [{
                    tagname: "tag_click_share",
                    value: "分享",
                    icon: "i_share"
                }, {
                    tagname: "tag_click_msg",
                    value: "消息",
                    dataImage: "", //data:image数据，客户端内部转图标
                    icon: "i_msg",// icon类型新增 i_msg:消息；i_more:更多
                    imagePath: "", //图标地址，需要混合包内图片地址
                    hotMark: "",// 红点标识 true：显示红点；false：不显示（默认）
                    imMark: "true" //是否允许显示消息标识 true:有消息时，显示标识；false:默认
                }]
            },
        };
        if ('1' == type) {
            jsonObj.param.right[1].icon = "";
            jsonObj.param.right[1].dataImage = enumDataImageIcon.s_img1;//使用 dataImage，不含data:image
        } else if ('2' == type) {
            jsonObj.param.right[1].icon = "";
            jsonObj.param.right[1].dataImage = enumDataImageIcon.b_img;//使用 dataImage，含data:image
        } else if ('3' == type) {
            jsonObj.param.right[0].imMark = "true";
        } else if ('4' == type) {
            jsonObj.param.right[0].hotMark = "true";// 左按钮 红点提示
        } else if ('5' == type) {
            jsonObj.param.right[0].dataImage = enumDataImageIcon.s_navbar_msg;
        } else if ('6' == type) {
            jsonObj.param.right[0].imMark = "true";
            jsonObj.param.right[0].icon = "";
            jsonObj.param.right[0].dataImage = enumDataImageIcon.b_img;
        }

        _tc_bridge_bar.set_navbar(jsonObj)
    }


})

