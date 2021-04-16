/*
QX:
[rewrite_local]
#轻颜相机（by黑黑酱）
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-response-body https://github.com/callmeheihei/QuantumultX/blob/master/Js/qyxj.js

MITM:commerce-api.faceu.mobi

*/

const path1 = "v1/subscription/user_info";

let obj = JSON.parse($response.body);
if ($request.url.indexOf(path1) != -1){

	obj.data.user_info["flag"] = "true";

	obj.data.user_info["start_time"] = "1587654321";

	obj.data.user_info["end_time"] = "1975566110";
	obj.data.user["is_cancel_subscribe"] = "true";
把
if ($request.url.indexOf(ad) != -1) {

}
$done({body: JSON.stringify(obj)});

