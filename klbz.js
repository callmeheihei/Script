/*
[rewrite_local]
#克拉壁纸解锁pro (4.7.4版本） (by-黑黑酱)
^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll) url script-response-body klbz.js

[MITM]
hostname=claritywallpaper.com
*/


re('"isFree":\\w+@"expireTime":\\w+@"level":\\w+','"isFree":true@"expireTime":1609483627@"level":5')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
} 