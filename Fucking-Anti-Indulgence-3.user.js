// ==UserScript==
// @name         防沉迷减点料 (智障版本)
// @description  使用万能规则通杀大部分游戏平台的防沉迷, 它无与伦比的误杀率将为您带来终身难忘的使用体验
// @namespace    https://fcmsb250.github.io/
// @version      0.1
// @icon         https://dsy4567.github.io/logo.svg
// @author       mininb666 https://greasyfork.org/zh-CN/users/822325-mininb666 / dsy4567 https://github.com/dsy4567
// @license      GPL-3.0

// @match        *://*/*

// @grant        GM_addStyle
// @grant        GM_addValueChangeListener
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @homepageURL  https://fcmsb250.github.io/
// @supportURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/
// @updateURL    https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-3.user.js
// @installURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-3.user.js
// @downloadURL  https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-3.user.js
// ==/UserScript==

function 首字母大写(str) {
    str = str[0].toUpperCase() + str.substring(1, str.length);
    return str;
}

function 智障减料() {
    let 游戏元素id或class = ["flash", "game", "play", "youxi", "swf", "flash"];
    let 防沉迷元素id或class = [
        "anti",
        "fcm",
        "verify",
        "mask",
        "certify",
        "dialog",
        "popup",
        "login",
        "cover",
    ];
    let 临时数组 = [];
    let 样式表 = "";

    游戏元素id或class.forEach((str) => {
        临时数组.push(
            "iframe[id*='" + str + "'],",
            "iframe[class*='" + str + "'],",
            "iframe[id*='" + str.toUpperCase() + "'],",
            "iframe[class*='" + str.toUpperCase() + "'],",
            "iframe[id*='" + 首字母大写(str) + "'],",
            "iframe[class*='" + 首字母大写(str) + "'],"
        );
    });
    临时数组.forEach((str) => {
        样式表 += str;
    });
    样式表 += `#ctmdfcm
            {
                display: block !important;
                left: 0 !important;
                top: 0 !important;
                position: absolute !important;
                z-index: 999999 !important;
            }`;
    临时数组 = [];

    防沉迷元素id或class.forEach((str) => {
        临时数组.push(
            "[id*='" + str + "'],",
            "[class*='" + str + "'],",
            "[id*='" + str.toUpperCase() + "'],",
            "[class*='" + str.toUpperCase() + "'],",
            "[id*='" + 首字母大写(str) + "'],",
            "[class*='" + 首字母大写(str) + "'],"
        );
    });
    临时数组.forEach((str) => {
        样式表 += str;
    });
    样式表 += `#ctmdfcm
            {
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
    临时数组 = [];

    GM_addStyle(样式表);
}

GM_addValueChangeListener("开始智障减料", (name, old_value, new_value, remote) => {
    智障减料();
});

GM_registerMenuCommand("👉智障减料(不保证实用性)", () => {
    GM_setValue("开始智障减料", Math.random());
});
