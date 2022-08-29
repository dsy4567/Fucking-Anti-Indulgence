// ==UserScript==
// @name         防沉迷减点料 (精简版本)
// @description  不需要任何依赖, 只保留最基本的功能
// @namespace    https://fcmsb250.github.io/
// @version      1.0
// @icon         https://dsy4567.github.io/logo.svg
// @author       mininb666 https://greasyfork.org/zh-CN/users/822325-mininb666 / dsy4567 https://github.com/dsy4567
// @run-at       document-start
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

// @unwrap
// @grant        none
// @homepageURL  https://fcmsb250.github.io/
// @supportURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/
// @updateURL    https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// @installURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// @downloadURL  https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// ==/UserScript==

// @ts-nocheck

function _qs(选择器) {
    return document.querySelector(选择器);
}
function _qsa(选择器) {
    return document.querySelectorAll(选择器);
}
function 对象转url参数() {
    let obj = arguments[0];
    let prefix = arguments[1];
    if (typeof obj !== "object") return "";
    const attrs = Object.keys(obj);
    return attrs.reduce((query, attr, index) => {
        // 判断是否是第一层第一个循环
        if (index === 0 && !prefix) query += "";
        if (typeof obj[attr] === "object") {
            const subPrefix = prefix ? `${prefix}[${attr}]` : attr;
            query += this.objectToQuery(obj[attr], subPrefix);
        } else {
            if (prefix) {
                query += `${prefix}[${attr}]=${obj[attr]}`;
            } else {
                query += `${attr}=${obj[attr]}`;
            }
        }
        // 判断是否是第一层最后一个循环
        if (index !== attrs.length - 1) query += "&";
        return query;
    }, "");
}
/**
 * 通过参数名获取url中的参数值
 * @param  {string} queryName 参数名
 * @return {string}           参数值
 */
function 获取url参数值(queryName) {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) {
            return pair[1];
        }
    }
    return null;
}
function 添加样式(css) {
    let s = document.createElement("style");
    s.innerHTML = css;
    document.head.append(s);
}

var 减料成功 = 0;
var 游戏真实地址_17yy = "";
var _playLoading;
var _$ = {
    ajax: (op) => {
        try {
            // 使用网站提供的 jQuery
            $.get;
            $.ajax;
            $("html");
            $.ajax(op);
        } catch (e) {
            fetch(op.url, {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: 对象转url参数(op.data),
            })
                .then((res) => res.json())
                .then((j) => op.success(j));
        }
    },
    get: (url, call) => {
        try {
            // 使用网站提供的 jQuery
            $.get;
            $.ajax;
            $("html");
            $.get(url, call);
        } catch (e) {
            fetch(url)
                .then((res) => res.text())
                .then((t) => call(t));
        }
    },
};

const 网址 = location.href;
const 域名 = location.host;
const 路径 = location.pathname;

var 一堆伞兵玩意 = [
    "#addiv",
    "#anti-indulge",
    "#anti-indulge-prompt",
    "#Anti_mask",
    "#Anti_open",
    "#app > div > div.cover.splash",
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

var __css = "";
for (let 索引 = 0; 索引 < 一堆伞兵玩意.length; 索引++) {
    const element = 一堆伞兵玩意[索引];
    __css += element + ",";
}
__css += `\
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
添加样式(__css);

/** @param {any[]} 数据 */
function log(数据) {
    if (true) console.log("[防沉迷减点料]", ...数据);
}

/**
 * 为某个字符串获取两个字符串中间的字符串(不包括那两个字符串)
 * @param {String} 开始
 * @param {String} 结束 (可以是空字符串)
 * @param {String} 值
 * @param {String} 类型 "1": 网址, "2": 字母 + 数字, "3": 数字 (可留空)
 * @param {String} 前面追加 在匹配到字符串, 判断字符串类型之前, 给匹配到的字符串前面追加 (可留空)
 * @returns {String}
 */
function 获取中间(开始, 结束, 值, 类型, 前面追加) {
    值 = 值.substring(值.indexOf(开始) + 开始.length);
    if (结束) {
        值 = decodeURI(值.substring(0, 值.indexOf(结束)));
    }
    if (前面追加) {
        值 = 前面追加 + 值;
    }
    log(["获取中间匹配结果", 值]);
    switch (类型) {
        case "1":
            if (
                !(
                    值.substring(0, 2) == "//" ||
                    值.substring(0, 7) == "http://" ||
                    值.substring(0, 8) == "https://"
                )
            ) {
                throw new Error("[防沉迷减点料] 不正确的字符串类型");
            }
            break;
        case "2":
            if (!/^[0-9a-zA-Z]*$/g.test(值)) {
                throw new Error("[防沉迷减点料] 不正确的字符串类型");
            }
            break;
        case "3":
            if (isNaN(Number(值))) {
                throw new Error("[防沉迷减点料] 不正确的字符串类型");
            }
            break;

        default:
            break;
    }
    return 值;
}

function 减料() {
    if (减料成功) {
        return log(["减料被取消"]);
    }

    let $full_screen_frame = _qs("#full_screen_frame");
    let $app_canvas_frame = _qs("#app_canvas_frame");

    if (
        域名 === "www.zxwyouxi.com" &&
        路径.includes("/g/") &&
        document.cookie
    ) {
        _$.ajax({
            url: "https://h.api.4399.com/intermodal/user/grant2",
            data: {
                gameId: 获取中间("/g/", "", 网址, "3"),
                authType: "token",
                userId: 获取中间(
                    "4399_HTML5_PREVIEW_USERID=",
                    ";",
                    document.cookie
                ),
                accessToken: 获取中间(
                    "HTML5_ACCESS_TOKEN=",
                    ";",
                    document.cookie
                ),
                pcwap: "",
                all: "",
            },
            type: "POST",
            dataType: "json",
            success: (resp) => {
                log([resp]);
                try {
                    if (resp.data.game.gameUrl)
                        location.href = resp.data.game.gameUrl;
                    else throw "";
                } catch (err) {
                    console.error(err);
                }
            },
        });
        减料成功 = 1;
    } else if (
        域名 === "h.api.4399.com" &&
        路径 === "/g.php" &&
        document.cookie
    ) {
        try {
            log(["尝试4399 h5页游防沉迷减料"]);

            _$.ajax({
                url: "https://h.api.4399.com/intermodal/user/grant2",
                data: {
                    gameId: 获取url参数值("gameId"),
                    authType: "cookie",
                    cookieValue: 获取中间("Pauth=", ";", document.cookie),
                },
                type: "POST",
                dataType: "json",
                success: (resp) => {
                    log([resp]);
                    try {
                        if (resp.data.game.gameUrl)
                            location.href = resp.data.game.gameUrl;
                        else throw "";
                    } catch (err) {
                        console.error(err);
                    }
                },
            });
            减料成功 = 1;
        } catch (err) {
            console.error(err);
        }
    } else if (域名 === "h.4399.com" && 路径.includes("/play/")) {
        try {
            log(["尝试4399 h5页游防沉迷减料"]);

            let url = window.webServer + window.gameiframe;
            if (url && window.webServer && window.gameiframe) {
                减料成功 = 1;
                location.href = url;
            }
        } catch (err) {
            console.error(err);
        }
    } else if (域名.includes("4399")) {
        // 搞破坏 4399

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
    } else if (window.play22 && 域名.includes("7k7k.com")) {
        // 7k7k获取游戏直链1

        try {
            log(["尝试7k7k防沉迷减料"]);

            window.play22.playLoading();
            if (!_playLoading) {
                _playLoading = window.play22.playLoading;
            }
            window.play22.playLoading = () => {}; // 防止重复调用
            减料成功 = 1;
        } catch (err) {
            console.error(err);
        }
    } else if (域名 === "m.7k7k.com" && 路径.includes("/player/")) {
        try {
            log(["尝试7k7k手机端防沉迷减料"]);

            _$.get(网址, (html) => {
                location.href = 获取中间('gameUrl: "', '",', html, "1");
            });
            减料成功 = 1;
        } catch (err) {
            console.error(err);
        }
    } else if (
        域名.includes("m.7k7k.com") &&
        路径.includes("/web/H5GAMES.html")
    ) {
        // 7k7k获取游戏直链3
        try {
            log(["尝试7k7k h5页游防沉迷减料"]);

            _$.get(
                "//h5.7k7k.com/api_redirect/game/start/?client=0&account=" +
                    获取中间("userid=", ";", document.cookie, "2") +
                    "&appkey=" +
                    获取中间("gid=", "&", 网址, "2") +
                    "&uid=" +
                    获取中间("userid=", ";", document.cookie, "2") +
                    "&tid=" +
                    获取中间("tid=", "&", 网址, "2"),
                (json) => {
                    location.href = JSON.parse(json).url;
                }
            );
            减料成功 = 1;
        } catch (err) {
            console.error(err);
        }
    } else if (域名.includes("h5.7k7k.com") && 路径.includes("/game/")) {
        // 7k7k获取游戏直链3
        try {
            console.log("尝试7k7k h5页游(手机端)防沉迷破解");
            _$.get(
                "//h5.7k7k.com/api_redirect/game/start/?client=0&account=" +
                    获取中间("userid=", ";", document.cookie, "2") +
                    "&appkey=" +
                    // eslint-disable-next-line no-undef
                    window.gid[0] +
                    "&uid=" +
                    获取中间("userid=", ";", document.cookie, "2") +
                    "&tid=" +
                    // eslint-disable-next-line no-undef
                    window.tid,
                (json) => {
                    let url = JSON.parse(json).url;
                    if (url) location.href = url;
                }
            );
            减料成功 = 1;
        } catch (err) {
            console.error(err);
        }
    } else if ($app_canvas_frame) {
        try {
            if ($app_canvas_frame.src && $app_canvas_frame.src != 网址) {
                log(["尝试阻止QQ空间自动跳转1"]);
                减料成功 = 1;
                location.href = $app_canvas_frame.src;
            }
        } catch (err) {
            console.error(err);
        }
    } else if ($full_screen_frame) {
        try {
            if ($full_screen_frame.src && $full_screen_frame.src != 网址) {
                log(["尝试阻止QQ空间自动跳转2"]);
                减料成功 = 1;
                location.href = $full_screen_frame.src;
            }
        } catch (err) {
            console.error(err);
        }
    } else if (
        域名 === "i.7724.com" &&
        网址.includes("/user/danjilogin?url=")
    ) {
        try {
            log(["尝试7724防沉迷减料"]);
            let url = 获取中间("danjilogin?url=", undefined, 网址, "1");
            location.href = url;
            减料成功 = 1;
        } catch (err) {}
    } else if (
        域名.includes("wvw.9377.com") &&
        路径.includes("/game_login.php")
    ) {
        try {
            log(["尝试9377防沉迷减料"]);
            _$.get(网址, (html) => {
                let url = 获取中间(
                    'id="iframe" src="',
                    '" name="mainFrame" scrolling="auto"',
                    html,
                    "1"
                );
                location.href = url;
            });
            减料成功 = 1;
        } catch (err) {}
    } else if (域名.includes("game.37.com") && 路径.includes("/play.php")) {
        try {
            log(["尝试37防沉迷减料"]);
            _$.get(网址, (html) => {
                let url = 获取中间(
                    'src="//gameapp.37.com/controller/enter_game.php',
                    '" id="mainFrame"',
                    html,
                    "1",
                    "//gameapp.37.com/controller/enter_game.php"
                );
                location.href = url;
            });
            减料成功 = 1;
        } catch (err) {}
    } else if (
        域名.includes("wvw.4366.com") &&
        路径.includes("/game_login.php")
    ) {
        try {
            log(["尝试4366防沉迷减料"]);
            _$.get(网址, (html) => {
                let url = 获取中间(
                    'align="left" id="iframe" src="',
                    '" name="mainFrame" scrolling="auto"',
                    html,
                    "1"
                );
                location.href = url;
            });
            减料成功 = 1;
        } catch (err) {}
    } else if (域名 === "www.17yy.com" && 路径.includes("/f/play")) {
        try {
            try {
                if (_qs("#flashgame").src == 游戏真实地址_17yy) return;
            } catch (e) {}
            try {
                if (_qs("#flash_frame").src == 游戏真实地址_17yy) return;
            } catch (e) {}
            try {
                if (!减料成功 && 游戏真实地址_17yy) {
                    try {
                        _qs("#flashgame").src = 游戏真实地址_17yy;
                    } catch (e) {
                        console.error(e);
                        减料成功 = 0;
                    }
                    try {
                        _qs("#flash_frame").src = 游戏真实地址_17yy;
                    } catch (e) {
                        console.error(e);
                        减料成功 = 0;
                    }
                }
            } catch (e) {}

            _$.ajax({
                url: "http://www.17yy.com/e/payapi/vip_ajax.php",
                data: {
                    action: "getStatus",
                    id: 获取中间("/f/play/", ".html", 网址, "3"),
                },
                type: "POST",
                dataType: "json",
                success: function (resp) {
                    游戏真实地址_17yy =
                        "http://" +
                        window.server +
                        "/" +
                        window.classes +
                        "/" +
                        window.date +
                        "/" +
                        resp.data.game_path;
                    try {
                        _qs("#flashgame").src = 游戏真实地址_17yy;
                    } catch (e) {
                        console.error(e);
                        减料成功 = 0;
                    }
                    try {
                        _qs("#flash_frame").src = 游戏真实地址_17yy;
                    } catch (e) {
                        console.error(e);
                        减料成功 = 0;
                    }
                },
            });
            减料成功 = 1;
        } catch (err) {}
    }
}

function 减点料() {
    减料();
    for (let i = 1; i < 10; i++) {
        setTimeout(减料, i * 500);
    }
}
减点料();

addEventListener("load", () => {
    减点料();

    if (网址.includes("ptlogin.4399.com")) {
        setTimeout(() => {
            if (document.querySelector(".ptlogin_btn")) {
                document
                    .querySelector(".ptlogin_btn")
                    .addEventListener("mouseup", () => {
                        alert("请在稍后刷新网页");
                    });
            }
        }, 1000);
    }
});
