/*
[rewrite_local]
#小睡眠🔓会员（by黑黑酱）
^https:\/\/api\.psy-1\.com\/cosleep\/user\/info url script-response-body xsm.js

[MITM]
hostname:api.psy-1.com
*/

re('"is_vip":\\d@"vip_expires":\\d+@"point_expires_time":\\d','"is_vip":1@"vip_expires":1900839229000@"point_expires_time":1900839229000@"')

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

