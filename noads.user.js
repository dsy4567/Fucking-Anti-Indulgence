// ==UserScript==
// @name         4399增强 + 防沉迷减料辅助
// @namespace    https://fcmsb250.github.io/
// @version      0.4
// @description  [✨荒岛求生日记 高情商聊天] 无限钻石资源精力金币嗨翻天 [✌防沉迷减料辅助]推荐配合 🔥🔥🔥防沉迷减点料🔥🔥🔥 一起使用, 页游九点以后继续玩  [🔥免广告领奖励] 不用看广告,奖励领到吐,还能自定义奖励倍数 [🚫不用下载4399在线玩] 直接拿专属礼包 [✔️修改提交分数] 0.99 秒冲榜不是梦 (慎用) [🌏修改浏览器UA] 让浏览器变成4399在线玩或4399游戏盒 [★开发者福利] 拒绝4399疯狂调试
// @author       dsy
// @icon         http://4399.com/favicon.ico
// @run-at       document-start

// @include      *://*/*
// 鬼知道哪个地方有4399的API

// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        unsafeWindow
// ==/UserScript==

// 感谢这个网站, 让我顺利制作出这个脚本 --> https://open.4399.cn/console/doc

var D = new Date();

// 防那个啥
try {
    if (
        location.href.indexOf("12377.cn") >= 0 ||
        location.href.indexOf("12321.cn") >= 0 ||
        location.href.indexOf("cyberpolice") >= 0 ||
        location.href.indexOf("jubao.chinaso.com") >= 0 ||
        document.title.indexOf("违法和不良信息") >= 0
    ) {
        try {
            location.href = "about:blank";
        } catch (e) {}
        try {
            location.port = "54088";
        } catch (e) {}
        try {
            document.write("<p></p>");
        } catch (e) {}
        try {
            stop();
        } catch (e) {}
    }
} catch (e) {}

function 激励广告奖励翻几倍() {
    let AD = GM_getValue("AD", 1);
    if (!isNaN(Number(AD))) {
        return Number(AD);
    } else {
        GM_setValue("AD", 1);
        return 1;
    }
}

if (location.host == ("szhong.4399.com" || "sxiao.4399.com")) {
    // 荒岛求生日记
    if (unsafeWindow.localStorage.getItem("Idle-Arks-Build-At-Sea-goldCount")) {
        unsafeWindow.localStorage.setItem(
            "Idle-Arks-Build-At-Sea-goldCount",
            999999999999999
        );
        unsafeWindow.localStorage.setItem(
            "Idle-Arks-Build-At-Sea-moodCount",
            999999999999999
        );
    }

    // 高情商聊天
    if (unsafeWindow.localStorage.getItem("electric")) {
        unsafeWindow.localStorage.setItem("kindness", 999999999999999);
        unsafeWindow.localStorage.setItem("electric", 999999999999999);
    }
}

var 免广告次数 = 0; // 阻止广告并发放奖励次数
function 去他的广告和防沉迷() {
    // h5小游戏
    if (unsafeWindow.h5api) {
        if (!unsafeWindow.h5api.已修改) {
            unsafeWindow.h5api.已修改 = 1; // 防止重复定义

            // 激励广告API
            // 播放全屏广告，并获得广告播放状态
            unsafeWindow.h5api.playAd = function (回调) {
                if (免广告次数 >= 50) {
                    return alert(
                        "是个人都要恰饭, 游戏作者也是, 要不先暂时禁用这个脚本, 然后主动看几条广告?"
                    );
                }

                if (typeof 回调 === "function") {
                    var _激励广告奖励翻几倍 = 激励广告奖励翻几倍();
                    for (let i = 0; i < _激励广告奖励翻几倍; i++) {
                        回调({
                            code: 10000,
                            message: "开始播放",
                        });
                        回调({
                            code: 10001,
                            message: "播放结束",
                        });

                        console.log("[4399增强] 已阻止广告并发放奖励");
                        console.log("回调:", 回调);
                        免广告次数++;
                    }
                } else {
                    console.log("[4399增强] 无效回调");
                }
            };
            // 获得是否可以播放广告及剩余次数
            unsafeWindow.h5api.canPlayAd = function (回调) {
                if (typeof 回调 === "function") {
                    console.log("[4399增强] 正在检测是否能播放广告");
                    回调({
                        canPlayAd: true,
                        remain: 99999,
                    });
                    console.log("回调:", 回调);
                } else {
                    console.log("[4399增强] 无效回调");
                }
                return true;
            };

            // 引导下载API
            unsafeWindow.h5api.showGuide = function (回调) {
                if (typeof 回调 === "function") {
                    回调();
                    alert("领取成功");
                    console.log("[4399增强] 专属礼包领取成功");
                    console.log("回调:", 回调);
                } else {
                    console.log("[4399增强] 无效回调");
                }
            };

            // 排行榜API
            unsafeWindow.h5api.mySubmitRankScore =
                unsafeWindow.h5api.submitRankScore;
            unsafeWindow.h5api.submitRankScore = function (
                排行榜id,
                分数,
                回调
            ) {
                var 用户想要的分数 = prompt(
                    "您正在提交分数, 请在下方输入您想要的分数 (悠着点,小心封号)\n排行榜id: " +
                        排行榜id,
                    分数
                );
                if (用户想要的分数 == null || 用户想要的分数 == "") {
                    用户想要的分数 = 分数;
                }
                unsafeWindow.h5api.mySubmitRankScore(
                    排行榜id,
                    用户想要的分数,
                    function (输出参数) {
                        alert(
                            "分数提交完毕\n状态码: " +
                                输出参数.code +
                                "\n消息: " +
                                输出参数.msg +
                                "\n历史最高分数: " +
                                输出参数.data.score +
                                "\n历史最高排名: " +
                                输出参数.data.rank
                        );
                        回调(输出参数);
                    }
                );
            };
        }
    }

    // (a)iwan4399.com 上引用的 ifs-web_sdk
    if (unsafeWindow.PageWebApiSdk) {
        try {
            unsafeWindow.PageWebApiSdkStyle = {};
            unsafeWindow.PageWebApiSdk = {};
            unsafeWindow.CountDown = {};
            unsafeWindow.Tools = {};
            unsafeWindow.PageWebApiSdkConf = {};
        } catch (err) {
            console.error(err);
        }
    }
    if (unsafeWindow.PageWebPlay) {
        try {
            unsafeWindow.PageWebPlay = {};
        } catch (err) {
            console.error(err);
        }
    }

    // web.4399.com 上引用的 fcmv2.js
    if (unsafeWindow.smevent) {
        try {
            unsafeWindow.smevent = () => {};
            unsafeWindow.smevent.IEVersion = () => {};
            unsafeWindow.smevent.flashChecker = function () {
                return { flash: false };
            };
            unsafeWindow.popup = () => {};
            unsafeWindow.poplist = () => {};
            unsafeWindow.immedToWeb = () => {};
            unsafeWindow.toweb = () => {};
            unsafeWindow.exitGame = () => {};
            unsafeWindow.tofcmdjs = () => {};
            unsafeWindow.closePop = () => {};
            unsafeWindow.playGameCountdown = () => {};
            unsafeWindow.countdown = () => {};
            unsafeWindow.news_handle = () => {};
            unsafeWindow.heartbeat = () => {};
            unsafeWindow.popwebtips = () => {};
            unsafeWindow.flashpop = () => {};
            unsafeWindow.a1101824 = () => {};
        } catch (err) {
            console.error(err);
        }
    }
}
function 去他的广告和防沉迷2() {
    // h5页游
    if (unsafeWindow.H5API) {
        if (!unsafeWindow.H5API.已修改) {
            unsafeWindow.H5API.已修改 = 1; // 防止重复定义

            // 激励广告API
            // 播放全屏广告，并获得广告播放状态
            unsafeWindow.H5API.playAd = function (回调) {
                if (免广告次数 >= 50) {
                    return alert(
                        "是个人都要恰饭, 游戏作者也是, 要不先暂时禁用这个脚本, 然后主动看几条广告?"
                    );
                }

                if (typeof 回调 === "function") {
                    var _激励广告奖励翻几倍 = 激励广告奖励翻几倍();
                    for (let i = 0; i < _激励广告奖励翻几倍; i++) {
                        回调({
                            code: 10000,
                            message: "开始播放",
                        });
                        回调({
                            code: 10001,
                            message: "播放结束",
                        });

                        console.log("[4399增强] 已阻止广告并发放奖励");
                        console.log("回调:", 回调);
                        免广告次数++;
                    }
                } else {
                    console.log("[4399增强] 无效回调");
                }
            };
            // 获得是否可以播放广告及剩余次数
            unsafeWindow.H5API.canPlayAd = function (回调) {
                if (typeof 回调 === "function") {
                    console.log("[4399增强] 正在检测是否能播放广告");
                    回调({
                        canPlayAd: true,
                        remain: 99999,
                    });
                    console.log("回调:", 回调);
                } else {
                    console.log("[4399增强] 无效回调");
                }
                return true;
            };

            // 防沉迷API
            unsafeWindow.H5API.openVerify = H5API.verifyState = function (
                回调
            ) {
                if (typeof 回调 === "function") {
                    console.log("[4399增强] 正在告诉游戏玩家不是未成年");
                    回调({
                        eventType: "_verifyState",
                        data: {
                            needVerify: false,
                            antiIndulge: 1,
                        },
                    });
                    console.log("回调:", 回调);
                } else {
                    console.log("[4399增强] 无效回调");
                }
            };

            // 引导下载API
            unsafeWindow.H5API.showGuide = function (回调) {
                if (typeof 回调 === "function") {
                    回调();
                    alert("领取成功");
                    console.log("[4399增强] 专属礼包领取成功");
                    console.log("回调:", 回调);
                } else {
                    console.log("[4399增强] 无效回调");
                }
            };
        }
    }
}

去他的广告和防沉迷2();
setInterval(去他的广告和防沉迷2, 5000);

if (location.host.includes("4399")) {
    // 干掉疯狂调试
    unsafeWindow.fuck_debugger = () => {
        check = () => {};
        consoleOpenCallback = () => {};
        clearInterval(_windon_handler);
    };
    try {
        Object.defineProperty(unsafeWindow, "check", {
            value: () => {},
            writable: false,
        });
    } catch (e) {}
    try {
        Object.defineProperty(unsafeWindow, "consoleOpenCallback", {
            value: () => {},
            writable: false,
        });
    } catch (e) {}
    try {
        unsafeWindow.consoleOpenCallback = () => {};
        unsafeWindow.check = () => {};
        unsafeWindow.clearInterval(unsafeWindow._windon_handler);
    } catch (e) {}

    去他的广告和防沉迷();
    setInterval(去他的广告和防沉迷, 5000);

    setTimeout(() => {
        // 修改UA
        let customUserAgent = GM_getValue("UA", navigator.userAgent);
        if (customUserAgent != "default") {
            Object.defineProperty(navigator, "userAgent", {
                value: customUserAgent,
                writable: false,
            });
        }
    }, 1500);

    if (self == top) {
        GM_registerMenuCommand("修改UA为4399在线玩", () => {
            GM_setValue("UA", "4399wan");
        });
        GM_registerMenuCommand("修改UA为4399游戏盒广场小游戏", () => {
            GM_setValue("UA", "4399GameCenter minigame");
        });
        GM_registerMenuCommand("修改UA为默认", () => {
            GM_setValue("UA", "default");
        });

        GM_registerMenuCommand("1倍激励广告奖励", () => {
            GM_setValue("AD", "1");
        });
        GM_registerMenuCommand("1000倍激励广告奖励()", () => {
            GM_setValue("AD", "1000");
        });
        GM_registerMenuCommand("自定义激励广告奖励倍数", () => {
            let inp = prompt(
                "请输入数字, 数字过大将导致游戏卡顿",
                激励广告奖励翻几倍()
            );
            if (isNaN(Number(inp)) || Number(inp) == 0) {
                return alert("无效数字");
            }
            GM_setValue("AD", String(inp));
        });
    }
}

console.log(
    "[4399增强] 脚本执行完毕, 用时" +
        (new Date().getTime() - D.getTime()) +
        "ms ",
    location.href
);
