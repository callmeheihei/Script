/*
#美图秀秀会员
QX:
^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/vip\/price\.json url script-response-body https://github.com/callmeheihei/Script/edit/master/Js/mtxx.js

MITM = api.xiuxiu.meitu.com
*/


var obj = JSON.parse($response.body);
obj.data.vip_type = 1;


$done({body: JSON.stringify(obj)}); 
