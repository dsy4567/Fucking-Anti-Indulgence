// ==UserScript==
// @name         防沉迷减点料 (超级精简)
// @description  精简无比的版本,仅支持 4399, 7k7k 等常见游戏平台
// @namespace    https://fcmsb250.github.io/
// @version      0.1.2
// @icon         https://dsy4567.github.io/logo.svg
// @author       mininb666 https://greasyfork.org/zh-CN/users/822325-mininb666 / dsy4567 https://github.com/dsy4567
// @run-at       document-start
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @license      GPL-3.0

// @match        *://*.17yy.com/*
// @match        *://*.4399.com/*
// @match        *://*.7k7k.com/*
// @match        *://*.aiwan4399.com/*
// @match        *://*.iwan4399.com/*
// @match        *://*.zxwyouxi.com/*
// @match        *://*.5054399.net/*
// @match        *://*.5054399.com/*
// @match        *://h5.07073.com/*
// @match        *://*.7724.com/*
// @match        *://*.u7u9.com/*
// @match        *://*.gamedog.cn/*
// @match        *://*.9377.com/*
// @match        *://*.37.com/*
// @match        *://*.4366.com/*

// @grant        GM_addStyle
// @grant        unsafeWindow
// @homepageURL  https://fcmsb250.github.io/
// @supportURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/
// @updateURL    https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// @installURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// @downloadURL  https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// ==/UserScript==

var 减料成功 = 0;
var 游戏真实地址_17yy = "";

const 网址 = location.href;

var 一堆伞兵玩意 = [
    "#addiv",
    "#anti-indulge",
    "#anti-indulge-prompt",
    "#Anti_mask",
    "#Anti_open",
    "#chCoverDiv",
    "#codepop6",
    "#cover",
    "#div_dialog",
    "#easyDialogBox",
    "#fcmIframe",
    "#Guide",
    "#loginCertify",
    "#messageBox",
    "#overlay",
    "#page_wallpaper > div.xiaowei.xiaowei-orange > div.xw-left > div.xw-game > div.xw-top > div > div",
    "#pop2",
    "#pusher",
    "#shadow",
    "#swfdiv > div.box",
    "#tc100",
    "#yx_log",

    ".codegs",
    ".cmMask",
    ".fixedModal",
    ".mask",
    ".play_load",
    ".popup-c",
    ".realName",
    ".sdkDialog",
    ".toolDialog",
    ".ui-forbidden",
    ".webtipss",

    "body > div.show_box.popup_bg",
];
var css = "";
for (let 索引 = 0; 索引 < 一堆伞兵玩意.length; 索引++) {
    const element = 一堆伞兵玩意[索引];
    css += element + ",";
}
css += `\
#ctmdfcm {
    display: none !important;
    min-width: 0 !important;
    width: 0 !important;
    max-width: 0 !important;
    min-height: 0 !important;
    height: 0 !important;
    max-height: 0 !important;
    z-index: -999 !important;
    font-size: 0 !important;
    overflow: hidden !important;
}`;
GM_addStyle(css);

function 减料() {
    if (减料成功) {
        return;
    }

    let $full_screen_frame = qs("#full_screen_frame");
    let $app_canvas_frame = qs("#app_canvas_frame");
    let $ifm = qs("#ifm");

    if (网址.includes("4399")) {
        // 搞破坏

        try {
            Object.defineProperty(unsafeWindow, "smevent", {
                value: null, // 原来是Function, 这样做可以使防沉迷报错
                writable: false,
            });
            减料成功 = 1;
        } catch (e) {}
        try {
            Object.defineProperty(unsafeWindow, "PageWebApiSdk", {
                value: null,
                writable: false,
            });
            减料成功 = 1;
        } catch (e) {}
        try {
            Object.defineProperty(unsafeWindow, "getBizid", {
                value: null,
                writable: false,
            });
            减料成功 = 1;
        } catch (e) {}
    } else if (unsafeWindow.play22 && 网址.includes("7k7k.com")) {
        // 7k7k获取游戏直链1

        try {
            // unsafeWindow.Play24.prototype.playLoading();
            unsafeWindow.play22.playLoading();
            unsafeWindow.play22.playLoading = () => {}; // 防止重复调用
            减料成功 = 1;
            // unsafeWindow.Play24.prototype.playLoading = ()=> {};
        } catch (err) {
            console.error(err);
        }
    } else if ($ifm && 网址.includes("m.7k7k.com/player")) {
        if ($ifm.src != location.href && $ifm.src) {
            // 7k7k获取游戏直链2
            try {
                减料成功 = 1;
                location.href = $ifm.src;
            } catch (err) {
                console.error(err);
            }
        }
    } else if ($app_canvas_frame) {
        try {
            if ($app_canvas_frame.src && $app_canvas_frame.src != 网址) {
                减料成功 = 1;
                location.href = $app_canvas_frame.src;
            }
        } catch (err) {
            console.error(err);
        }
    } else if ($full_screen_frame) {
        try {
            if ($full_screen_frame.src && $full_screen_frame.src != 网址) {
                减料成功 = 1;
                location.href = $full_screen_frame.src;
            }
        } catch (err) {
            console.error(err);
        }
    } else if (网址.includes("//i.7724.com/user/danjilogin?url=")) {
        try {
            var url = 网址.substring(网址.indexOf("danjilogin?url=") + "danjilogin?url=".length);
            if (
                url.substring(0, 2) == "//" ||
                url.substring(0, 7) == "http://" ||
                url.substring(0, 8) == "https://"
            ) {
                location.href = url;
            }
            减料成功 = 1;
        } catch (err) {}
    } else if (网址.includes("wvw.9377.com/game_login.php")) {
        try {
            $.get(网址, (html) => {
                var url = html.substring(
                    html.indexOf('id="iframe" src="') + 'id="iframe" src="'.length,
                    html.indexOf('" name="mainFrame" scrolling="auto"')
                );
                if (
                    url.substring(0, 2) == "//" ||
                    url.substring(0, 7) == "http://" ||
                    url.substring(0, 8) == "https://"
                ) {
                    location.href = url;
                }
            });
            减料成功 = 1;
        } catch (err) {}
    } else if (网址.includes("game.37.com/play.php")) {
        try {
            $.get(网址, (html) => {
                var url = html.substring(
                    html.indexOf('src="//gameapp.37.com/controller/enter_game.php') +
                        'src="'.length,
                    html.indexOf('" id="mainFrame"')
                );
                if (
                    url.substring(0, 2) == "//" ||
                    url.substring(0, 7) == "http://" ||
                    url.substring(0, 8) == "https://"
                ) {
                    location.href = url;
                }
            });
            减料成功 = 1;
        } catch (err) {}
    } else if (网址.includes("wvw.4366.com/game_login.php")) {
        try {
            $.get(网址, (html) => {
                var url = html.substring(
                    html.indexOf('align="left" id="iframe" src="') +
                        'align="left" id="iframe" src="'.length,
                    html.indexOf('" name="mainFrame" scrolling="auto"')
                );
                if (
                    url.substring(0, 2) == "//" ||
                    url.substring(0, 7) == "http://" ||
                    url.substring(0, 8) == "https://"
                ) {
                    location.href = url;
                }
            });
            减料成功 = 1;
        } catch (err) {}
    } else if (网址.includes("www.17yy.com/f/play")) {
        try {
            try {
                if (qs("#flashgame").src == 游戏真实地址_17yy) return;
            } catch (e) {}
            try {
                if (qs("#flash_frame").src == 游戏真实地址_17yy) return;
            } catch (e) {}

            $.ajax({
                url: "http://www.17yy.com/e/payapi/vip_ajax.php",
                data: {
                    action: "getStatus",
                    id: 网址.substring(
                        网址.indexOf("/f/play/") + "/f/play/".length,
                        网址.indexOf(".html")
                    ),
                },
                type: "POST",
                dataType: "json",
                success: function (resp) {
                    try {
                        qs("#flashgame").src = 游戏真实地址_17yy =
                            "http://" +
                            server +
                            "/" +
                            classes +
                            "/" +
                            date +
                            "/" +
                            resp.data.game_path;
                    } catch (e) {}
                    try {
                        qs("#flash_frame").src = 游戏真实地址_17yy =
                            "http://" +
                            server +
                            "/" +
                            classes +
                            "/" +
                            date +
                            "/" +
                            resp.data.game_path;
                    } catch (e) {}
                },
            });
            减料成功 = 1;
        } catch (err) {}
    }
}

减料();
for (let i = 1; i < 10; i++) {
    setTimeout(减料, i * 500);
}
addEventListener("load", () => {
    减点料();

    if (网址.includes("ptlogin.4399.com")) {
        setTimeout(() => {
            if (document.querySelector(".ptlogin_btn")) {
                document.querySelector(".ptlogin_btn").addEventListener("mouseup", () => {
                    alert("请在稍后刷新网页");
                });
            }
        }, 1000);
    }
});
