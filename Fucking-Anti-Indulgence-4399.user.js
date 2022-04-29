// ==UserScript==
// @name         防沉迷减点料(4399专用, 精简无比)
// @description  代码量极少, 页游也能到点不被踢出
// @namespace    https://fcmsb250.github.io/
// @version      0.1
// @icon         https://dsy4567.github.io/Anti-addiction-terminator/extension/icon/logo.svg
// @author       mininb666 https://greasyfork.org/zh-CN/users/822325-mininb666 / dsy4567 https://github.com/dsy4567
// @run-at       document-start
// @license      GPL-3.0
// @match        *://*.4399.com/*
// @match        *://*.aiwan4399.com/*
// @match        *://*.iwan4399.com/*
// @grant        unsafeWindow
// @homepageURL  https://fcmsb250.github.io/
// @supportURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/
// @updateURL    https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence.user.js
// @installURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence.user.js
// @downloadURL  https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence.user.js
// ==/UserScript==
try {
    Object.defineProperty(unsafeWindow, "smevent", {
        value: null, // 原来是Function, 这样做可以使防沉迷报错
        writable: false,
    });
} catch (e) {}
try {
    Object.defineProperty(unsafeWindow, "PageWebApiSdk", {
        value: null,
        writable: false,
    });
} catch (e) {}
try {
    Object.defineProperty(unsafeWindow, "getBizid", {
        value: null,
        writable: false,
    });
} catch (e) {}
