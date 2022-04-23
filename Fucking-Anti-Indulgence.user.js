// ==UserScript==
// @name         🎇🎇🎇防沉迷减点料🎇🎇🎇

// @description  [❤️哪都能用] 已支持4366,37,9377,游戏狗,u7u9,7724,17yy,qq空间部分游戏,07073,7k7k,4399 [⚡️更加快速] 0.99秒急速减料 [😱别怕大人] 大人来了就按"大人键" [✔️高可用率] 持续更新更靠谱 [🕶 手动减料] 防沉迷减料不成功? 对着防沉迷弹窗按快捷键 [😵‍💫智障减料] 误杀率高, 没卵用的实验性功能 👍👍👍 热烈庆祝 GreasyFork 总安装量破千 👏👏👏

// @namespace    https://fcmsb250.github.io/
// @version      4.7.8
// @icon         https://dsy4567.github.io/Anti-addiction-terminator/extension/icon/logo.svg
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
// @grant        GM_addValueChangeListener
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        unsafeWindow

// @homepageURL  https://fcmsb250.github.io/
// @supportURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/
// @updateURL    https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence.user.js
// @installURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence.user.js
// @downloadURL  https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence.user.js

// ==/UserScript==

/**
 *  ________ ___  ___  ________  ___  __            ___  _________
 * |\  _____\\  \|\  \|\   ____\|\  \|\  \         |\  \|\___   ___\     |
 * \ \  \__/\ \  \\\  \ \  \___|\ \  \/  /|_       \ \  \|___ \  \_|     |
 *  \ \   __\\ \  \\\  \ \  \    \ \   ___  \       \ \  \   \ \  \      |
 *   \ \  \_| \ \  \\\  \ \  \____\ \  \\ \  \       \ \  \   \ \  \     |
 *    \ \__\   \ \_______\ \_______\ \__\\ \__\       \ \__\   \ \__\   \|/
 *     \|__|    \|_______|\|_______|\|__| \|__|        \|__|    \|__|    v
 *
 * ________________________________________________________________
 * |                                                              |
 * |                       未成年限制登录提醒                     |
 * |                                                              |
 * |您使用的是未成年账号，仅周五、周六、周日及法定节假日晚上8:00- |
 * |9:00可以游戏！当前已被限制！                                  |
 * |                                                              |
 * |            ______________________________________            |
 * |            |           下次可玩游戏时段         |            |
 * |            |                                    |            |
 * |            |         本周五晚上8:00-9:00        |            |
 * |            |____________________________________|            |
 * |                                                              |
 * |温馨提示：                                                    |
 * |1.如果身份信息有误，请点击》》申请修改《《                    |
 * |2.如果您身份信息已经变动，可点击》》刷新身份《《              |
 * |                ____________    ____________                  |
 * |                |          |    |          |                  |
 * |                | 更换账号 |    |   确定   |                  |
 * |                |__________|    |__________|                  |
 * |______________________________________________________________|
 */

"use strict";
var D = new Date();

if (self == top) {
    if (GM_getValue("版本") != GM_info.script.version && GM_info.script.version == "4.7.7") {
        GM_notification("快看看有什么新功能吧", "🎇🎇🎇防沉迷减点料🎇🎇🎇 更新完毕", "", () => {
            GM_openInTab(
                "https://greasyfork.org/zh-CN/scripts/437233-%E9%98%B2%E6%B2%89%E8%BF%B7%E5%8A%A0%E7%82%B9%E6%96%99"
            );
        });
    }
}

function 改变值(值, 默认值, 回调) {
    if (GM_getValue(值, 默认值) == "1") {
        GM_setValue(值, "0");
    } else if (GM_getValue(值, 默认值) == "0") {
        GM_setValue(值, "1");
    } else {
        GM_setValue(值, 默认值);
    }
    if (回调) {
        回调();
    }
}
function 初始化值(值, 默认值, 回调) {
    if (GM_getValue(值, "天知道是啥") == "天知道是啥") {
        GM_setValue(值, 默认值);
    }
    if (回调) {
        回调();
    }
}
function 检测状态(值) {
    if (GM_getValue(值) == "1") {
        return "✅已启用 ";
    } else if (GM_getValue(值) == "0") {
        return "❌已停用 ";
    } else {
        return "⚠️配置错误 ";
    }
}
function qs(选择器) {
    return document.querySelector(选择器);
}
function qsa(选择器) {
    return document.querySelectorAll(选择器);
}

GM_setValue("版本", GM_info.script.version);
初始化值("安装日期", String(Math.floor(D.getTime() / 1000 / 60 / 60 / 24)));
初始化值("已提建议", "0");
初始化值("停用快捷键", "0");
初始化值("开发环境", "0");

var 用了多少天 = Math.ceil(D.getTime() / 1000 / 60 / 60 / 24) - Number(GM_getValue("安装日期"));
var 减料成功 = 0;
var 一个弹窗的样式 = { remove: () => {} };
var 最后一个菜单id = 0;
var 游戏真实地址_17yy = "";

const 网址 = location.href;
const 脚本信息 = JSON.stringify({
    浏览器: navigator.userAgent,
    脚本能更新: GM_info.scriptWillUpdate,
    脚本版本: GM_info.script.version,
    脚本更新地址: GM_info.script.updateURL,
    脚本管理器: GM_info.scriptHandler,
    脚本管理器版本: GM_info.version,
    用多久: 用了多少天,
});
const 开发者配置 = {
    启用调试: 0,
    输出减料时间: 0,
    禁用自动防沉迷减料: 0,
    在控制台使用脚本变量函数和GM: 0,
};
if (GM_getValue("开发环境") == "1") {
    // 开发者配置.启用调试 = 1;
    // 开发者配置.输出减料时间 = 1;
    开发者配置.禁用自动防沉迷减料 = 1;
    // 开发者配置.在控制台使用脚本变量函数和GM = 1;
} else {
    开发者配置.启用调试 = 0;
    开发者配置.输出减料时间 = 0;
    开发者配置.禁用自动防沉迷减料 = 0;
    开发者配置.在控制台使用脚本变量函数和GM = 0;
}

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

function 智障减料() {
    qsa(`
        iframe[id*='flash'],
        iframe[id*='Flash'],
        iframe[id*='FLASH'],

        iframe[id*='game'],
        iframe[id*='Game'],
        iframe[id*='GAME'],

        iframe[id*='play'],
        iframe[id*='Play'],
        iframe[id*='PLAY'],

        iframe[id*='yx'],
        iframe[id*='Yx'],
        iframe[id*='YX'],

        iframe[id*='youxi'],
        iframe[id*='Youxi'],
        iframe[id*='YOUXI'],

        iframe[id*='swf'],
        iframe[id*='Swf'],
        iframe[id*='SWF'],
        
        iframe[class*='flash'],
        iframe[class*='Flash'],
        iframe[class*='FLASH'],

        iframe[class*='game'],
        iframe[class*='Game'],
        iframe[class*='GAME'],

        iframe[class*='play'],
        iframe[class*='Play'],
        iframe[class*='PLAY'],

        iframe[class*='yx'],
        iframe[class*='Yx'],
        iframe[class*='YX'],

        iframe[class*='youxi'],
        iframe[class*='Youxi'],
        iframe[class*='YOUXI'],

        iframe[class*='swf'],
        iframe[class*='Swf'],
        iframe[class*='SWF']
    `).forEach((ele) => {
        ele.style.zIndex = "999999";
        ele.style.position = "absolute";
        ele.style.top = "0";
        ele.style.left = "0";
        ele.style.display = "block";
        ele.addEventListener("mousedown", () => {
            let z = Number(ele.style.zIndex);
            ele.style.zIndex = z + 1;
        });
    });
    let 防沉迷弹窗 = qsa(`
        [id*='ANTI'],
        [id*='Anti'],
        [id*='anti'],

        [id*='FCM'],
        [id*='Fcm'],
        [id*='fcm'],

        [class*='ANTI'],
        [class*='Anti'],
        [class*='anti'],

        [class*='FCM'],
        [class*='Fcm'],
        [class*='fcm']
    `);
    console.log(防沉迷弹窗);
    防沉迷弹窗.forEach((e) => e.remove());
}

// function get(url, call) {
//     let xhr = new XMLHttpRequest();
//     let response = "";
//     xhr.open("get", url);
//     xhr.send(null);
//     xhr.onload = () => {
//         response = xhr.responseText;
//         call(response);
//     };
// }

// function ajax(o) {
//     let xhr = new XMLHttpRequest();
//     let response = "";
//     xhr.open("post", o.url);
//     xhr.send("action=getStatus&id=" + o.data.id);
//     xhr.onload = () => {
//         response = xhr.responseText;
//         o.success(JSON.parse(response));
//     };
// }

function 更新菜单() {
    const 一堆菜单 = [
        ["⚠️沉迷于游戏不利于身心健康,请合理安排游戏时间,适度游戏⚠️"],
        ["❤️您已尽情欢乐" + 用了多少天 + "天", undefined, undefined, 1],
        [
            "✨没有防沉迷的游戏平台(作者没有收钱)",
            () => {
                GM_openInTab("https://fcmsb250.github.io/no-anti.html");
            },
            undefined,
            1,
        ],
        [
            "👉再次减料按 alt +  鼠标中键",
            () => {
                减料();
                普通减料();
            },
            undefined,
        ],
        [
            "👉大人来了按 shift + 鼠标中键 (解除请再次减料)",
            () => {
                大人来了();
            },
            undefined,
        ],
        [
            "👉手动减料对着防沉迷按 shift + alt + 鼠标右键",
            () => {
                alert("手动减料对着防沉迷按 shift + alt + 鼠标右键");
            },
            undefined,
        ],
        [
            "👉智障减料(实验性功能, 不保证实用性, 可能需要多来几次)",
            () => {
                GM_setValue("开始智障减料", Math.random());
            },
            undefined,
        ],
        [
            检测状态("停用快捷键") + " 停用快捷键",
            () => {
                改变值("停用快捷键", "0", () => {
                    更新菜单();
                });
            },
            undefined,
        ],
        [
            "👍给个好评/📝反馈问题",
            () => {
                GM_openInTab("https://greasyfork.org/zh-CN/scripts/437233/feedback");
            },
            undefined,
        ],
        [
            "⛔解决访问错误",
            () => {
                location.href = 网址;
            },
            undefined,
        ],
    ];
    最后一个菜单id = 一堆菜单.length;

    // TM
    for (
        let 菜单id = 最后一个菜单id - 一堆菜单.length * 2;
        菜单id < 最后一个菜单id + 一堆菜单.length * 2;
        菜单id++
    ) {
        GM_unregisterMenuCommand(菜单id);
    }

    // VM
    一堆菜单.forEach((菜单) => {
        GM_unregisterMenuCommand(菜单[0]);
    });
    GM_unregisterMenuCommand("✅已启用 停用快捷键");
    GM_unregisterMenuCommand("❌已停用 停用快捷键");
    GM_unregisterMenuCommand("⚠️配置错误 停用快捷键");

    一堆菜单.forEach((菜单) => {
        const 菜单名 = 菜单[0];
        const 函数 = 菜单[1];
        const 快捷键 = 菜单[2];

        最后一个菜单id = GM_registerMenuCommand(菜单名, 函数, 快捷键);
    });
}

function 大人来了() {
    console.log("[防沉迷减点料] 大人来了");
    try {
        一个弹窗的样式.remove();
        console.log("[防沉迷减点料] 已去除样式");
    } catch (err) {}

    一个弹窗的样式 = GM_addStyle(
        '*{margin:0;padding:0}ul{list-style:none;}.fl{float:left;}.fr{float:right;}.mysdkDialog{position:absolute;left:50%;top:50vh;margin:-210px 0 0 -309px;width:618px;z-index:20020}.mysdkDialog .myfcmdialog{color:black;position:absolute;left:0;top:0;width:620px;padding-bottom:30px;font-family:"microsoft yahei";font-size:14px;background:#fff;border-radius:8px;}.mysdkDialog .myfcmdialog .close-btn{position:absolute;right:0;top:0;width:40px;height:40px;background-color:red;line-height:40px;cursor:pointer;display:none}.mysdkDialog .myfcmdialog .title{line-height:30px;text-align:center;font-size:22px;font-weight:700;padding:25px 0 0;margin:0 40px;color:#454545;border:0;height:auto;float:none;width:auto;text-indent:0;}.mysdkDialog .myfcmdialog .stitle{text-align:left;line-height:1.6;margin:15px 40px 0;font-size:16px;}.mysdkDialog .myfcmdialog .stitle span{color:#ffa92d;}.mysdkDialog .myfcmdialog .mod-tip{margin:20px 40px 0;background:#F0F0F0;padding:12px 15px;border-radius:4px;color:#333;text-align:left}.mysdkDialog .myfcmdialog .tip-title{font-size:16px;font-weight:400;}.mysdkDialog .myfcmdialog .tip-info{margin-top:5px;line-height:26px;font-size:14px;}.mysdkDialog .myfcmdialog .tip-info li{font-size:16px;line-height:26px}.mysdkDialog .myfcmdialog .tip-info a{color:#FAA61B;text-decoration:underline;margin:0 4px;cursor:pointer;}.mysdkDialog .myfcmdialog .mod-btn{text-align:center;font-size:0;line-height:0;margin:25px 40px 0;}.mysdkDialog .myfcmdialog .mod-btn .btn-fcmprimary{display:inline-block;width:140px;height:38px;line-height:38px;border:1px solid #69bb01;color:#69bb01;font-size:14px;margin:0 15px;border-radius:5px;cursor:pointer;}.mysdkDialog .myfcmdialog .mod-btn .fr,.mysdkDialog .myfcmdialog .mod-btn .fl{width:250px;margin:0;}.mysdkDialog .myfcmdialog .mod-btn .btn-fcmprimary:hover{-webkit-filter:brightness(1);filter:brightness(1)}.mysdkDialog .myfcmdialog .mod-btn .btn-identity{background-color:#69bb01;color:#f8ffef}.fcmIframe{position:absolute;left:50%;top:270px;margin:0 0 0 -309px;width:618px;height:354px;z-index:2019;border:0 none;background-color:#000}.countDown{background:#eee;border-radius:3px;padding:10px;text-align:center;margin:20px 40px 0;font-size:16px;color:#666}.countDown .txt1{font-size:16px;height:28px;line-height:28px;color:#717171;}.countDown .txt2{height:40px;line-height:40px;font-size:26px;font-weight:bold;color:#54ba3d;}.mycmMask{display:none;width:100%;position:absolute;left:0;top:0;background:rgb(0,0,0);}'
    ); // 不知道从哪借(chao)鉴(xi)来的
    let 一个弹窗 = document.createElement("div");
    一个弹窗.className = "mysdkDialog";
    一个弹窗.innerHTML +=
        '<div class="myfcmdialog"><span class="close-btn">关闭</span><h2 class="title">未成年限制登录提醒</h2><div class="stitle">您使用的是未成年账号，仅周五、周六、周日及法定节假日晚上8:00-9:00可以游戏！当前已被限制！</div><div class="countDown" style=""><p class="txt1">下次可玩游戏时段</p><p class="txt2">本周五晚上8:00-9:00</p></div><div class="countDown" style="display:none">当前已限制游戏</div><div class="mod-tip" style=""><h3 class="tip-title">温馨提示：</h3><ul class="tip-info">1.如果身份信息有误，请点击<a href="https://u.4399.com/profile/realname-bizId-1199006632.html" target="_blank">》》申请修改《《</a><br>2.如果您身份信息已经变动，可点击<a target="_self" href="#">》》刷新身份《《</a></ul></div><div class="mod-btn" style=""><span class="btn-fcmprimary">更换账号</span><span class="btn-fcmprimary">确定</span></div></div>';
    // 不知道从哪借(chao)鉴(xi)来的
    document.body.appendChild(一个弹窗);
    let 遮罩 = document.createElement("div");
    遮罩.className = "mycmMask";
    遮罩.style.cssText =
        "height: " + document.body.offsetHeight + "px; z-index: 9999; display: block";
    遮罩.innerHTML = "";
    document.body.appendChild(遮罩);
}

function 减料() {
    if (减料成功) {
        return console.log("[防沉迷减点料] 减料被取消");
    }

    let 开始 = new Date().getTime();

    let $full_screen_frame = qs("#full_screen_frame");
    let $app_canvas_frame = qs("#app_canvas_frame");
    let $ifm = qs("#ifm");

    if (网址.includes("4399")) {
        // 搞破坏
        if (开发者配置.启用调试) {
            debugger;
        }

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
        if (开发者配置.启用调试) {
            debugger;
        }

        try {
            console.log("[防沉迷减点料] 尝试7k7k防沉迷减料");
            if (开发者配置.启用调试) {
                debugger;
            }
            // unsafeWindow.Play24.prototype.playLoading();
            unsafeWindow.play22.playLoading();
            unsafeWindow.play22.playLoading = () => {}; // 防止重复调用
            减料成功 = 1;
            // unsafeWindow.Play24.prototype.playLoading = ()=> {};
        } catch (err) {
            console.error(err);
        }
    } else if ($ifm && 网址.includes("m.7k7k.com/player")) {
        if (开发者配置.启用调试) {
            debugger;
        }

        if ($ifm.src != location.href && $ifm.src) {
            // 7k7k获取游戏直链2
            try {
                console.log("[防沉迷减点料] 尝试7k7k手机端防沉迷减料");
                if (开发者配置.启用调试) {
                    debugger;
                }
                减料成功 = 1;
                location.href = $ifm.src;
            } catch (err) {
                console.error(err);
            }
        }
    } else if ($app_canvas_frame) {
        if (开发者配置.启用调试) {
            debugger;
        }

        try {
            if ($app_canvas_frame.src && $app_canvas_frame.src != 网址) {
                console.log("[防沉迷减点料] 尝试阻止QQ空间自动跳转1");
                if (开发者配置.启用调试) {
                    debugger;
                }
                减料成功 = 1;
                location.href = $app_canvas_frame.src;
            }
        } catch (err) {
            console.error(err);
        }
    } else if ($full_screen_frame) {
        if (开发者配置.启用调试) {
            debugger;
        }

        try {
            if ($full_screen_frame.src && $full_screen_frame.src != 网址) {
                console.log("[防沉迷减点料] 尝试阻止QQ空间自动跳转2");
                if (开发者配置.启用调试) {
                    debugger;
                }
                减料成功 = 1;
                location.href = $full_screen_frame.src;
            }
        } catch (err) {
            console.error(err);
        }
    } else if (网址.includes("//i.7724.com/user/danjilogin?url=")) {
        if (开发者配置.启用调试) {
            debugger;
        }

        try {
            console.log("[防沉迷减点料] 尝试7724防沉迷减料");
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
        if (开发者配置.启用调试) {
            debugger;
        }

        try {
            console.log("[防沉迷减点料] 尝试9377防沉迷减料");
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
        if (开发者配置.启用调试) {
            debugger;
        }

        try {
            console.log("[防沉迷减点料] 尝试37防沉迷减料");
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
        if (开发者配置.启用调试) {
            debugger;
        }

        try {
            console.log("[防沉迷减点料] 尝试4366防沉迷减料");
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
        if (开发者配置.启用调试) {
            debugger;
        }

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
        } catch (err) {}
    }

    if (开发者配置.输出减料时间) {
        console.log("[防沉迷减点料] 减料结束, 用时" + (new Date().getTime() - 开始) + "ms");
    }
}

function 普通减料() {
    try {
        // 简单暴力的减料方式
        for (let 索引 = 0; 索引 < 一堆伞兵玩意.length; 索引++) {
            const element = 一堆伞兵玩意[索引];
            if (qsa(element)[0]) {
                qsa(element).forEach((el) => {
                    el.remove();
                    console.log("[防沉迷减点料] -减料成功- " + element);
                });
            }
        }

        [".mycmMask", ".myfcmdialog", ".mysdkDialog"].forEach((element) => {
            if (qsa(element)[0]) {
                qsa(element).forEach((el) => {
                    el.remove();
                    console.log("[防沉迷减点料] -解除大人来了成功- " + element);
                });
            }
        });

        try {
            一个弹窗的样式.remove();
            console.log("[防沉迷减点料] 已去除样式");
        } catch (err) {}
    } catch (err) {
        console.error(err);
    }
}

function 减点料() {
    // 多来几次以防万一
    if (!开发者配置.禁用自动防沉迷减料) {
        减料();
        for (let i = 1; i < 10; i++) {
            setTimeout(减料, i * 500);
        }
    }
}

// 加样式表
if (!开发者配置.禁用自动防沉迷减料) {
    let css = "";
    for (let 索引 = 0; 索引 < 一堆伞兵玩意.length; 索引++) {
        const element = 一堆伞兵玩意[索引];
        css += element + ",";
    }
    css += `#ctmdfcm {
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
    console.log("[防沉迷减点料] 加样式表成功");
}

// 一些无关紧要的代码
setTimeout(() => {
    GM_addValueChangeListener("开始智障减料", (name, old_value, new_value, remote) => {
        智障减料();
    });

    if (self == top) {
        //判断是否在iframe中
        // 烦人的提醒
        if (用了多少天 >= 3 && GM_getValue("已提建议") == "0") {
            GM_setValue("已提建议", "1");
            GM_notification(
                "请给我提点建议,帮助这个脚本变得更好",
                "🎇🎇🎇防沉迷减点料🎇🎇🎇 用的怎样?",
                "",
                () => {
                    GM_openInTab("https://greasyfork.org/zh-CN/scripts/437233/feedback");
                }
            );
        }
        更新菜单();

        // 精美图片
        console.log(
            "%c    ",
            "font-size:512px;background-size:100% 100%;background-repeat:no-repeat;background-image:url(https://fcmsb250.github.io/fuck-anti.webp);"
        );
    }
}, 1);

// 快捷键
document.addEventListener(
    "mousedown",
    function (e) {
        if (GM_getValue("停用快捷键") == "0") {
            if (e.button == 1 && e.shiftKey && !e.altKey) {
                大人来了();
            }
            if (e.button == 2 && e.shiftKey && e.altKey) {
                let el = document.elementFromPoint(e.x, e.y);
                console.log(
                    "[防沉迷减点料] -手动减料成功- ." +
                        el.className +
                        " #" +
                        el.id +
                        " <" +
                        el.tagName +
                        ">"
                );
                el.style.display = "none";
            }
            if (e.button == 1 && e.altKey && !e.shiftKey) {
                减料成功 = 0;
                减料();
                普通减料();
            }
        }
    },
    true
);

addEventListener("load", () => {
    减点料();

    setTimeout(() => {
        // 以防万一
        qsa("canvas").forEach((element) => {
            element.addEventListener(
                "mousedown",
                function (e) {
                    if (GM_getValue("停用快捷键") == "0") {
                        if (e.button == 1 && e.shiftKey) {
                            大人来了();
                        }
                        if (e.button == 1 && e.altKey) {
                            减料成功 = 0;
                            减料();
                        }
                    }
                },
                true
            );
        });
    }, 5000);

    if (location.href.includes("ptlogin.4399.com")) {
        setTimeout(() => {
            if (document.querySelector(".ptlogin_btn")) {
                document.querySelector(".ptlogin_btn").addEventListener("mouseup", () => {
                    alert("请在稍后刷新网页");
                });
            }
        }, 1000);
    }

    // 准备游戏真实地址管理器();
});

减点料();

if (开发者配置.在控制台使用脚本变量函数和GM) {
    unsafeWindow.更新在控制台使用的脚本变量函数和GM = () => {
        // GM_*
        unsafeWindow._GM_addStyle = GM_addStyle;
        unsafeWindow._GM_getValue = GM_getValue;
        unsafeWindow._GM_info = GM_info;
        unsafeWindow._GM_notification = GM_notification;
        unsafeWindow._GM_openInTab = GM_openInTab;
        unsafeWindow._GM_registerMenuCommand = GM_registerMenuCommand;
        unsafeWindow._GM_setValue = GM_setValue;
        unsafeWindow._GM_unregisterMenuCommand = GM_unregisterMenuCommand;

        // 普通变量
        unsafeWindow._D = D;
        unsafeWindow._最后一个菜单id = 最后一个菜单id;
        unsafeWindow._玩了几分钟 = 玩了几分钟;
        unsafeWindow._用了多少天 = 用了多少天;
        unsafeWindow._减料成功 = 减料成功;
        unsafeWindow._脚本信息 = 脚本信息;
        unsafeWindow._开发者配置 = 开发者配置;
        unsafeWindow._一堆伞兵玩意 = 一堆伞兵玩意;

        // 自定函数
        unsafeWindow._改变值 = 改变值;
        unsafeWindow._初始化值 = 初始化值;
        unsafeWindow._检测状态 = 检测状态;
        unsafeWindow._更新菜单 = 更新菜单;
        unsafeWindow._大人来了 = 大人来了;
        unsafeWindow._检测网址是否包含指定字符串 = 检测网址是否包含指定字符串;
        unsafeWindow._游戏中 = 游戏中;
        unsafeWindow._减料 = 减料;
        unsafeWindow._普通减料 = 普通减料;
        unsafeWindow._减点料 = 减点料;
        unsafeWindow._一个弹窗的样式 = 一个弹窗的样式;
    };
    unsafeWindow.更新在控制台使用的脚本变量函数和GM();
}

console.log("[防沉迷减点料] " + 网址 + "\n\n脚本信息: ", 脚本信息, "\n\n开发者配置: ", 开发者配置);

console.log(
    "[防沉迷减点料] 脚本执行完毕, 用时" + (new Date().getTime() - D.getTime()) + "ms ",
    网址
);
