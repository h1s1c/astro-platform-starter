const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

export default function handler(req, res) {
    // هدایت درخواست‌ها به سرور V2Ray
    proxy.web(req, res, {
        target: 'http://yourdomain.com/v2ray',  // آدرس سرور V2Ray
        changeOrigin: true,
    });
}
