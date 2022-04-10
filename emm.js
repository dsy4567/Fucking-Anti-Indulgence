// 初始化值("自动保存游戏真实地址", "1");
// 初始化值("一堆游戏真实地址", [null]);

// ---

// 即将推出的游戏真实地址管理器
// var 游戏真实地址管理器已准备好 = 0;
// var 游戏真实地址管理器;
// var 一堆游戏真实地址管理器元素;
// var 一堆游戏真实地址 = GM_getValue("一堆游戏真实地址", [null]);
// var 游戏真实地址; // 在游戏真实地址管理器中显示
// var 真实地址; // 指定在游戏真实地址管理器中显示的内容
// var 关闭;
// var 要删除的真实地址;
// var 确定;
// var 开关;
// var 状态;
// var 说明;

// ---

// ["🌐管理已保存的游戏真实地址", 管理游戏真实地址, undefined],

// ---

// 即将推出的游戏真实地址管理器
// function 准备游戏真实地址管理器() {
//     一堆游戏真实地址管理器元素 = [];

//     游戏真实地址管理器 = document.createElement("div");
//     游戏真实地址管理器.id = "fuckAnti-urls";
//     游戏真实地址管理器.style.cssText =
//         "z-index:99999;background-color:white;color:black;width:100%;height:100vh;position:fixed;top:0;left:0;display:none;";

//     关闭 = document.createElement("span");
//     关闭.onclick = () => {
//         游戏真实地址管理器.style.cssText =
//             "z-index:99999;background-color:white;color:black;width:100%;height:100vh;position:fixed;top:0;left:0;display:none;";
//     };
//     关闭.innerHTML = " 关闭 ";
//     一堆游戏真实地址管理器元素.push(关闭);

//     要删除的真实地址 = document.createElement("input");
//     要删除的真实地址.type = "text";
//     要删除的真实地址.placeholder = "在这里输入要删除的真实地址的id, 以英文逗号分隔";
//     要删除的真实地址.style.width = "512px";
//     一堆游戏真实地址管理器元素.push(要删除的真实地址);

//     确定 = document.createElement("button");
//     确定.onclick = () => {
//         try {
//             let ids = JSON.parse("[" + 要删除的真实地址.value + "]");
//             if (typeof ids[0] != "number") {
//                 return alert("格式不正确, 或id有误");
//             }

//             if (confirm("即将删除id为以下的游戏真实地址, 请确认: " + ids)) {
//                 ids.forEach((东西) => {
//                     if (东西 <= 0) {
//                         return;
//                     }

//                     一堆游戏真实地址.splice(东西, 东西);
//                     GM_setValue("一堆游戏真实地址", 一堆游戏真实地址);
//                     展示游戏真实地址();
//                 });
//             }
//         } catch (e) {
//             alert("格式不正确, 或id有误");
//         }
//     };
//     确定.innerHTML = "->";
//     一堆游戏真实地址管理器元素.push(确定);

//     开关 = document.createElement("button");
//     开关.onclick = () => {
//         改变值("自动保存游戏真实地址", "1");
//         状态.innerHTML = 检测状态("自动保存游戏真实地址") + "<br />";
//     };
//     开关.innerHTML = "启用/禁用自动保存游戏真实地址";
//     一堆游戏真实地址管理器元素.push(开关);

//     状态 = document.createElement("span");
//     状态.innerHTML = 检测状态("自动保存游戏真实地址") + "<br />";
//     一堆游戏真实地址管理器元素.push(状态);

//     说明 = document.createElement("span");
//     说明.innerHTML =
//         "这是一个有助于为那些在防沉迷规定时间外开始游戏时没有加载游戏(无法直接获取游戏真实地址, 且直接去除防沉迷弹窗无效)的游戏平台的防沉迷减料的工具, 使用该功能需要在游戏平台登录账号并完成实名认证(防沉迷规定必须实名后才能游戏, 不用管你是不是未成年), 之后当您在防沉迷规定的时间内开始游戏后, 脚本将自动保存游戏真实地址以供日后随时开玩<br />该功能不会记录带参数( ? 和 & )的真实链接(比如页游)<br />该功能仅支持 h5 游戏<br />该功能目前仅支持7724小游戏, 将来会添加更多游戏平台<br />游戏专业户请定期清理数据或慎用此功能, 因为数据过多会带来性能问题<br />以下是已保存的数据<br />";
//     一堆游戏真实地址管理器元素.push(说明);

//     游戏真实地址 = document.createElement("span");
//     一堆游戏真实地址管理器元素.push(游戏真实地址);

//     一堆游戏真实地址管理器元素.forEach((元素) => {
//         游戏真实地址管理器.appendChild(元素);
//     });
//     document.body.appendChild(游戏真实地址管理器);
//     游戏真实地址管理器已准备好 = 1;
// }

// function 展示游戏真实地址() {
//     console.log("[防沉迷减点料] 一堆游戏真实地址: ", 一堆游戏真实地址);
//     let id = 0;
//     真实地址 = "";

//     一堆游戏真实地址.forEach((东西) => {
//         if (东西 == null) {
//             return id++;
//         }

//         真实地址 +=
//             "<br />id: " +
//             id +
//             " | 游戏标题: " +
//             东西.游戏标题 +
//             " | 原地址: " +
//             东西.原地址 +
//             " | 真实地址: " +
//             东西.真实地址 +
//             "<br />";
//         id++;
//     });

//     if (真实地址 == "") {
//         真实地址 = "啥都没有";
//     }
//     游戏真实地址.innerHTML = 真实地址;
// }

// function 管理游戏真实地址() {
//     if (!游戏真实地址管理器已准备好) {
//         return alert("游戏真实地址管理器未准备好, 请稍后再试");
//     }

//     展示游戏真实地址();
//     游戏真实地址管理器.style.cssText =
//         "z-index:99999;background-color:white;color:black;width:100%;height:100vh;position:fixed;top:0;left:0;";
// }

// function 保存和打开游戏真实地址() {
//     let 当前游戏已保存真实地址 = 0;

//     let 规则 = [{ 名称: "7724小游戏", iframe选择器: "" }];
//     规则.forEach((_规则) => {
//         try {
//             let url = document.querySelector("iframe" + _规则.iframe选择器).src;
//             if (url || url != location.href) {
//                 一堆游戏真实地址.push({
//                     游戏标题: document.title,
//                     原地址: location.origin + location.pathname,
//                     真实地址: url,
//                 });
//                 GM_setValue("一堆游戏真实地址", 一堆游戏真实地址);
//             }
//         } catch (e) {}
//     });
// }
