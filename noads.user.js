// ==UserScript==
// @name         4399增强 + 防沉迷减料辅助
// @namespace    https://fcmsb250.github.io/
// @version      0.3.6
// @description  [✨荒岛求生日记 高情商聊天] 无限钻石资源精力金币嗨翻天 [✌防沉迷减料辅助]推荐配合 🔥🔥🔥防沉迷减点料🔥🔥🔥 一起使用, 页游九点以后继续玩  [🔥免广告领奖励] 不用看广告,奖励领到吐 [🚫不用下载4399在线玩] 直接拿专属礼包 [✔️修改提交分数] 0.99 秒冲榜不是梦 (慎用) [★开发者福利] 拒绝4399疯狂调试
// @author       dsy
// @icon         http://4399.com/favicon.ico
// @run-at       document-start

// @include      *://*/*
// 鬼知道哪个地方有4399的API

// @grant        none
// ==/UserScript==

// 感谢这个网站, 让我顺利制作出这个脚本 --> https://open.4399.cn/console/doc

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

// 荒岛求生日记
if (localStorage.getItem("Idle-Arks-Build-At-Sea-goldCount")) {
    localStorage.setItem("Idle-Arks-Build-At-Sea-goldCount", 999999999999999);
    localStorage.setItem("Idle-Arks-Build-At-Sea-moodCount", 999999999999999);
}

// 高情商聊天
if (localStorage.getItem("electric")) {
    localStorage.setItem("kindness", 999999999999999);
    localStorage.setItem("electric", 999999999999999);
}

var 免广告次数 = 0; // 阻止广告并发放奖励次数
function 去他的广告和防沉迷() {
    // h5页游
    if (window.H5API) {
        if (!window.H5API.已修改) {
            window.H5API.已修改 = 1; // 防止重复定义

            // 激励广告API
            // 播放全屏广告，并获得广告播放状态
            window.H5API.playAd = function (回调) {
                if (免广告次数 >= 50) {
                    return alert(
                        "是个人都要恰饭, 游戏作者也是, 要不先暂时禁用这个脚本, 然后主动看几条广告?"
                    );
                }

                if (回调) {
                    回调({
                        code: 10001,
                        message: "播放结束",
                    });

                    console.log("[4399增强] 已阻止广告并发放奖励");
                    console.log("回调:", 回调);
                    免广告次数++;
                } else {
                    console.log("[4399增强] 无效回调");
                }
            };
            // 获得是否可以播放广告及剩余次数
            window.H5API.canPlayAd = function (回调) {
                if (回调) {
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
            window.H5API.openVerify = H5API.verifyState = function (回调) {
                if (回调) {
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
            window.H5API.showGuide = function (回调) {
                if (回调) {
                    回调();
                    alert("领取成功");
                    console.log("[4399增强] 专属礼包领取成功");
                } else {
                    console.log("[4399增强] 无效回调");
                }
            };
        }
    }

    // h5小游戏
    if (window.h5api) {
        if (!window.h5api.已修改) {
            window.h5api.已修改 = 1; // 防止重复定义

            // 激励广告API
            // 播放全屏广告，并获得广告播放状态
            window.h5api.playAd = function (回调) {
                if (免广告次数 >= 50) {
                    return alert(
                        "是个人都要恰饭, 游戏作者也是, 要不先暂时禁用这个脚本, 然后主动看几条广告?"
                    );
                }
                if (回调) {
                    回调({
                        code: 10001,
                        message: "播放结束",
                    });
                    console.log("[4399增强] 已阻止广告并发放奖励");
                    console.log("回调:", 回调);
                    免广告次数++;
                } else {
                    console.log("[4399增强] 无效回调");
                }
            };
            // 获得是否可以播放广告及剩余次数
            window.h5api.canPlayAd = function (回调) {
                if (回调) {
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
            window.h5api.showGuide = function (回调) {
                回调();
                alert("领取成功");
                    console.log("[4399增强] 专属礼包领取成功");
            };

            // 排行榜API
            window.h5api.mySubmitRankScore = window.h5api.submitRankScore;
            window.h5api.submitRankScore = function (排行榜id, 分数, 回调) {
                var 用户想要的分数 = prompt(
                    "您正在提交分数, 请在下方输入您想要的分数 (悠着点,小心封号)\n排行榜id: " +
                        排行榜id,
                    分数
                );
                if (用户想要的分数 == null || 用户想要的分数 == "") {
                    用户想要的分数 = 分数;
                }
                window.h5api.mySubmitRankScore(
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

    // 干掉疯狂调试
    if (window.consoleOpenCallback) {
        try {
            window.consoleOpenCallback = function () {};
            window.check = function () {};
            window.clearInterval(window._windon_handler);
        } catch (e) {
            console.error(e);
        }
    }

    // (a)iwan4399.com 上引用的 ifs-web_sdk
    if (window.PageWebApiSdk) {
        try {
            window.PageWebApiSdkStyle = {};
            window.PageWebApiSdk = {};
            window.CountDown = {};
            window.Tools = {};
            window.PageWebApiSdkConf = {};
        } catch (err) {
            console.error(err);
        }
    }
    if (window.PageWebPlay) {
        try {
            window.PageWebPlay = {};
        } catch (err) {
            console.error(err);
        }
    }

    // web.4399.com 上引用的 fcmv2.js
    if (window.smevent) {
        try {
            window.smevent = function () {};
            window.smevent.IEVersion = function () {};
            window.smevent.flashChecker = function () {
                return { flash: false };
            };
            window.popup = function () {};
            window.poplist = function () {};
            window.immedToWeb = function () {};
            window.toweb = function () {};
            window.exitGame = function () {};
            window.tofcmdjs = function () {};
            window.closePop = function () {};
            window.playGameCountdown = function () {};
            window.countdown = function () {};
            window.news_handle = function () {};
            window.heartbeat = function () {};
            window.popwebtips = function () {};
            window.flashpop = function () {};
            window.a1101824 = function () {};
        } catch (err) {
            console.error(err);
        }
    }
}

setInterval(去他的广告和防沉迷, 5000);
去他的广告和防沉迷();
