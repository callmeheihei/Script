let obj = JSON.parse($response.body);
obj = {
{
  "degrade": 0,
  "ret": 0,
  "error_code": 0,
  "error": "Ok",
  "msg": "成功",
  "data": {
    "id": 6764763235121907911,
    "gid": 2100249674,
    "uid": 1794626726,
    "avatar_url": "http://maavatar1.meitudata.com/5fbde7a5c10621905.jpg",
    "screen_name": "黑黑酱.",
    "platform": 2,
    "is_valid_user": 1,
    "vip_type": 1,
    "sub_type": 3,
    "sub_name": "包年",
    "renew": 2,
    "valid_time": 1612845221,
    "in_valid_time": 1613450021,
    "create_time": 1612845238
  }
}
  }]
};

$done({body: JSON.stringify(obj)});
