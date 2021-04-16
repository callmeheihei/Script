/*
QX:
[rewrite_local]
#轻颜相机（by黑黑酱）
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-response-body https://github.com/callmeheihei/QuantumultX/blob/master/Js/qyxj.js

MITM:commerce-api.faceu.mobi

*/

const path1 = "/commerce/v1/subscription/user_info";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.start_time = 1584674770;
obj.data.end_time = 4077660370;
obj.data.is_cancel_subscribe = true;
obj.data.flag = true;
}


if ($request.url.indexOf(ad) != -1) {

}
$done({body: JSON.stringify(obj)});
