/*
QX:
[rewrite_local]
#轻颜相机（by黑黑酱）
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-response-body qyxj.js


MITM:commerce-api.faceu.mobi

*/

let obj = JSON.parse($response.body);
obj.data.flag = true ;
obj.data.end_time = 253410801668 ;
$done({body:JSON.stringify(obj)});
