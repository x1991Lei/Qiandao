[Script]
# 上汽大众自动签到
cron "0 0 * * *" script-path=VWAutoCheckin.js

[MITM]
hostname = vwapp.com

[Script]
var url = "https://vwapp.com/checkin"; // 签到接口地址

$httpClient.post(url, function(error, response, data){
    if (error) {
        $notification.post("上汽大众签到", "签到失败", error);
    } else {
        var result = JSON.parse(data);
        if (result.code == 200) {
            $notification.post("上汽大众签到", "签到成功", result.msg);
        } else {
            $notification.post("上汽大众签到", "签到失败", result.msg);
        }
    }
});
```
