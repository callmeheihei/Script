/*
QX:
[rewrite_local]
#轻颜相机（by黑黑酱）
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-response-body https://github.com/callmeheihei/QuantumultX/blob/master/Js/qyxj.js

MITM:commerce-api.faceu.mobi

*/
let obj = JSON.parse($response.body);
obj.data.start_time = 1577813990;
obj.data.end_time = 4102491933;
obj.data.is_first_subscribe = true;
obj.data.is_cancel_subscribe = true;
obj.data.flag = true;
$done({body: JSON.stringify(obj)});
