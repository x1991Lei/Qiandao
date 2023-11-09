```ini
[Script]
cron "0 0 * * *" script-path=alipay_signin.js

[MITM]
hostname = mapi.alipay.com

[Script]
var url = $request.url;
var body = $response.body;

if (url.indexOf('service/check') != -1) {
    var obj = JSON.parse(body);
    obj.canCheck = true;
    obj.canCheckIn = true;
    obj.canGet = true;
    obj.canGetIn = true;
    body = JSON.stringify(obj);
}
