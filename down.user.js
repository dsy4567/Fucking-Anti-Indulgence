// ==UserScript==
// @name         4399, 7k7k flash 游戏下载 + flash 播放器
// @description  ✨下载 4399, 7k7k flash 游戏, 并提供 flash 播放器✨
// @namespace    https://fcmsb250.github.io/
// @version      0.1.2
// @author       mininb666 https://greasyfork.org/zh-CN/users/822325-mininb666 / dsy4567 https://github.com/dsy4567
// @match        *://www.4399.com/flash/*
// @match        *://www.7k7k.com/swf/*
// @grant        GM_registerMenuCommand
// @grant        GM_openInTab
// @grant        unsafeWindow
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://greasyfork.org/scripts/381311-download-js/code/downloadjs.js?version=685821

// @homepageURL  https://fcmsb250.github.io/
// @supportURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/
// @updateURL    https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/down.user.js
// @installURL   https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/down.user.js
// @downloadURL  https://github.com/dsy4567/Fucking-Anti-Indulgence/raw/main/down.user.js

// ==/UserScript==

(function () {
    "use strict";
    GM_registerMenuCommand("注意: 请勿直接下载 h5 游戏");
    GM_registerMenuCommand(
        "若 7k7k 无法下载或遇到访问错误, 可以安装防沉迷减点料",
        () => {
            GM_openInTab("https://greasyfork.org/zh-CN/scripts/437233");
        }
    );
    GM_registerMenuCommand("打开flash播放器", () => {
        GM_openInTab("https://fcmsb250.github.io/flash.html");
    });

    GM_registerMenuCommand("下载4399 flash 游戏", () => {
        try {
            let url = unsafeWindow.webServer + unsafeWindow._strGamePath;
            if (url == location.href || !url) {
                throw "";
            }
            download(url);
        } catch (e) {
            alert("出现错误, 或游戏未完成加载");
        }
    });
    GM_registerMenuCommand("用浏览器打开 4399 flash 游戏", () => {
        try {
            let url = unsafeWindow.webServer + unsafeWindow._strGamePath;
            if (url == location.href || !url) {
                throw "";
            }
            location.href = url;
        } catch (e) {
            alert("出现错误, 或游戏未完成加载");
        }
    });

    GM_registerMenuCommand("下载7k7k flash 游戏 - 1", () => {
        try {
            let url = document.querySelector("#gameobj").src;
            if (url == location.href || !url) {
                throw "";
            }
            download(url);
        } catch (e) {
            alert("出现错误, 或游戏未完成加载");
        }
    });
    GM_registerMenuCommand("用浏览器打开 7k7k flash 游戏 - 1", () => {
        try {
            let url = document.querySelector("#gameobj").src;
            if (url == location.href || !url) {
                throw "";
            }
            location.href = url;
        } catch (e) {
            alert("出现错误, 或游戏未完成加载");
        }
    });

    GM_registerMenuCommand("下载7k7k flash 游戏 - 1", () => {
        try {
            var game_path = "";
            var game_id = unsafeWindow.gameInfo.gameId;
            //同步请求
            $.ajaxSettings.async = false;
            $.get(
                "http://www.7k7k.com/open_api/request?action=Flash.Game&game=" + game_id,
                function (data) {
                    try {
                        game_path = JSON.parse(data).result.url;
                        GM_download(game_path);
                    } catch (e) {
                        alert("出现错误, 或游戏未完成加载");
                    }
                }
            );
            $.ajaxSettings.async = true;
        } catch (e) {
            alert("出现错误, 或游戏未完成加载");
        }
    });
    GM_registerMenuCommand("下载7k7k flash 游戏 - 2", () => {
        try {
            var game_path = "";
            var game_id = unsafeWindow.gameInfo.gameId;
            //同步请求
            $.ajaxSettings.async = false;
            $.get(
                "http://www.7k7k.com/open_api/request?action=Flash.Game&game=" + game_id,
                function (data) {
                    try {
                        game_path = JSON.parse(data).result.url;
                        download(game_path);
                    } catch (e) {
                        alert("出现错误, 或游戏未完成加载");
                    }
                }
            );
            $.ajaxSettings.async = true;
        } catch (e) {
            alert("出现错误, 或游戏未完成加载");
        }
    });
    GM_registerMenuCommand("用浏览器打开 7k7k flash 游戏 - 2", () => {
        try {
            var game_path = "";
            var game_id = unsafeWindow.gameInfo.gameId;
            //同步请求
            $.ajaxSettings.async = false;
            $.get(
                "http://www.7k7k.com/open_api/request?action=Flash.Game&game=" + game_id,
                function (data) {
                    try {
                        game_path = JSON.parse(data).result.url;
                        location.href = game_path;
                    } catch (e) {
                        alert("出现错误, 或游戏未完成加载");
                    }
                }
            );
            $.ajaxSettings.async = true;
        } catch (e) {
            alert("出现错误, 或游戏未完成加载");
        }
    });
})();
