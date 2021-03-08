var body = $response.body;
var url = $request.url;

const svip = '/v1/vip/vip_show.json';
const  vip= '/v1/user/show.json';

if (url.indexOf(svip) != -1) {
    let obj = JSON.parse(body);
    obj.data.is_valid_user = 1;
    obj.data.vip_type = 1;
    obj.data.sub_type = 3;
	body = JSON.stringify(obj);  
 }

if (url.indexOf(vip) != -1) {
    let obj = JSON.parse(body);
	obj.data.vip_type = 1;
    obj.data.show_producer_level = 2;
	body = JSON.stringify(obj); 
 }

$done({body});
