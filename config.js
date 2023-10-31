// 代理配置文件
var log = console.log;
log("1111111");
module.exports = {
  //在向服务器发出请求前，AnyProxy会调用这个接口，可以在此时修改发送请求的参数
  replaceRequestOption: function (req, option) {
    var newOption = option;
    // delete newOption.headers["if-modified-since"];
    log("----------");
    return newOption;
  },
  // 在接受服务器发来的请求时
  // replaceServerResDataAsync: function (req, res, serverResData, callback) {
  //   //append  "hello world"  to  all  web pages
  //   // if (/html/i.test(res.headers["content-type"])) {
  //   //   var newDataStr = serverResData.toString();
  //   //   newDataStr += "hello world!";
  //   //   callback(newDataStr);
  //   // } else {
  //   //   callback(serverResData);
  //   // }
  //   callback(serverResData);
  // },
  // // 将所有响应延迟的秒数
  // pauseBeforeSendingResponse: function (req, res) {
  //   //delay  all  the response  for  1500ms
  //   // return 1500;
  //   return 0;
  // },

  /** 下面两个是配合的 */
  // 是否在本地直接发送响应（不再向服务器发出请求）
  // shouldUseLocalResponse: function (req, reqBody) {
  //   //intercept  all  options request
  //   // if (req.method == "OPTIONS") {
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }
  //   return false;
  // },
  // // 如果shouldUseLocalResponse返回true，会调用这个函数来获取本地响应内容（异步接口）
  // dealLocalResponse: function (req, reqBody, callback) {
  //   if (req.method == "OPTIONS") {
  //     callback(200, mergeCORSHeader(req.headers), "");
  //   }
  // },
};

/**
 * https://blog.csdn.net/weixin_30617561/article/details/95626191
 * 
收到用户请求之后
shouldUseLocalResponse:(req,reqBody) ，是否在本地直接发送响应（不再向服务器发出请求）
dealLocalResponse:(req,reqBody,callback) 如果shouldUseLocalResponse返回true，会调用这个函数来获取本地响应内容（异步接口）

向服务端发出请求之前
replaceRequestProtocol 替换向服务器发出的请求协议，支持http和https的替换
replaceRequestOption:(req,  option  ) 替换向服务器发出的请求参数，即nodeJS中的 request option
replaceRequestData 替换请求的body

向用户返回服务端的响应之前
replaceResponseStatusCode 替换服务器响应的http状态码
replaceResponseHeader: (req,res,header) 替换服务器响应的http头
replaceServerResDataAsync :(req,res,serverResData,callback)替换服务器响应的数据（异步接口）
pauseBeforeSendingResponse: (req,res) 在请求返回给用户前的延迟时间

 */
