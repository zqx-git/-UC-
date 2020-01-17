// 动态更改根目录字体大小,最大适配3000宽度的手机屏幕（2k屏幕及以上）
function fontSize() {
  var view_width = document
    .getElementsByTagName("html")[0]
    .getBoundingClientRect().width
  var _html = document.getElementsByTagName("html")[0]
  _html.style.fontSize = (view_width * 100) / 360 + "px"
}
fontSize()
// 监听屏幕宽度变化
window.onresize = function() {
  fontSize()
}
// let i = 0
// let j
// 消息提示框
function message(info, type = "info") {
  let body = document.getElementsByTagName("body")[0]
  let pp = document.createElement("p")
  pp.setAttribute("class", "info " + type)
  pp.innerText = info
  body.appendChild(pp)
  setTimeout(
    'document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("info")[0] || "")',
    1500
  )
}

// 获取地址栏的参数
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return ""
}
// async function message(info, type = "info") {
//   removeMessage(i)
//   i++
//   let body = document.getElementsByTagName("body")[0]
//   let pp = document.createElement("p")
//   pp.setAttribute("class", "info" + i + " " + type)
//   pp.innerText = info
//   body.appendChild(pp)
//   console.log("添加了第" + i + "个")
//   j = i
//   // setTimeout(
//   //   'document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("info")[0] || "")',
//   //   1500
//   // )
//   await setTimeout(function() {
//     removeMessage(j)
//   }, 1500)
//   // 移除消息提示框
//   function removeMessage(i) {
//     let body = document.getElementsByTagName("body")[0]
//     let ppp = document.getElementsByClassName("info" + i)[0] || ""
//     console.log("清除第" + i + "个")
//     if (ppp) body.removeChild(ppp)
//   }
// }

// 获取生产请求头
// let heads = JSON.parse(eggApp.getHeaders())
// heads.baseUrl = heads.baseUrl + "/"
// 测试请求头和线下地址
// let heads = {
//   // baseUrl: "https://api.egg.81youxi.com/",
//   baseUrl: "http://develop.api.egg.81youxi.com/",
//   bundle: "com.egg.more.client",
//   channelID: "Q30",
//   device:
//     "eydvcyc6J2FuZHJvaWQnLCdvc192ZXJzaW9uJzoyNiwnaW1laSc6JycsJ2ltc2knOicnLCdhbmRyb2lkX2lkJzonMmMxNDFjYzBjMzdkMDM0YicsJ21hYyc6J0UwOkEzOkFDOjU0OkUyOkIwJywnbWFrZTonJ0hVQVdFSScsJ21vZGVsOicnRVZBLUFMMDAnLCdicmFuZDonJ0hVQVdFSSd9",
//   token: "717E1AB9-E83E-DF13-7CC0-9E31025F873A",
//   uniqueID: "5f34838d04939a030d6b5e132a112e59",
//   version: 1
// }
// let eggApp = {
//   setTitle: a => console.log(a)
// }

// 2019 12.31 10:00
// 大转盘看过视频，按钮状态false时按钮隐藏
// 修复大转盘抽奖次数不足弹框不显示
// 修复大转盘初次打开偶尔会缓缓变大的动画
// 更新请求地址的配置

// 2020 01.03 16:12
// 上传图片自定义进行中
// 新增用户协议和隐私政策，能相互跳转

// 2020 01.10 13:17
// 落地页优化调整，2s自动轮播，触摸自动打断
// 上传图片自定义完成
// 订单运费与免邮券，与鸡蛋数量，选择鸡蛋数量之间逻辑
// 订单选择地址逻辑完成
// 订单选择修改地址逻辑完成（修改新增未作判断，修改地址暂时走的新增接口）
// 优化隐私政策和用户协议，攻略中左右跳转按钮在平板显示问题
