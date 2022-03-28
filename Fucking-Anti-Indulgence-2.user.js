// ==UserScript==
// @name         防沉迷减点料 (超级精简, 仅限4399小游戏)
// @description  用一行代码 (不包括16行注释) 解决问题
// @namespace    https://fcmsb250.github.io/
// @version      0.1
// @icon         https://fcmsb250.github.io/favicon.ico
// @author       mininb666 https://greasyfork.org/zh-CN/users/822325-mininb666 / dsy4567 https://github.com/dsy4567
// @run-at       document-start
// @include      *://www.4399.com/flash/*
// @grant        unsafeWindow
// @homepageURL  https://fcmb250.github.io/
// @supportURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/
// @updateURL    https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// @installURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// @downloadURL  https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/Fucking-Anti-Indulgence-2.user.js
// ==/UserScript==
try { Object.defineProperty(unsafeWindow, "getBizid", { value: "", writable: false }) } catch (e) {}