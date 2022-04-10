// ==UserScript==
// @name         防沉迷减点料 (超级精简)
// @description  精简无比的版本,仅支持常见游戏平台
// @namespace    https://fcmsb250.github.io/
// @version      0.1.1.1
// @icon         https://fcmsb250.github.io/favicon.ico
// @author       mininb666 https://greasyfork.org/zh-CN/users/822325-mininb666 / dsy4567 https://github.com/dsy4567
// @run-at       document-start
// @license      GPL-3.0

// @include      *://*.4399.*/*
// @include      *://*.iwan4399.*/*
// @include      *://*.aiwan4399.*/*
// @include      *://*.zxwyouxi.*/*

// @include      *://*.7k7k.*/*

// @include      *://gameapp.qq.com/*

// @include      *://*.17yy.*/*

// @include      *://*.u7u9.*/*

// @grant        GM_addStyle
// @grant        unsafeWindow
// @homepageURL  https://fcmsb250.github.io/
// @supportURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/
// @updateURL    https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// @installURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// @downloadURL  https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// ==/UserScript==

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

try {
    Object.defineProperty(unsafeWindow, "getBizid", {
        value: "",
        writable: false,
    });
} catch (e) {}

addEventListener("load", () => {
    try {
        unsafeWindow.play22.playLoading();
        unsafeWindow.play22.playLoading = () => {};
    } catch (err) {}
});
