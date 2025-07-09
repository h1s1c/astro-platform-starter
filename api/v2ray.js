const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

export default function handler(req, res) {
    // هدایت درخواست‌ها به سرور V2Ray
    proxy.web(req, res, {
        target: 'geri.asdfghjkl2asdfghjkl.cfd:2053',  // آدرس سرور V2Ray خود را وارد کنید
        changeOrigin: true,
    });
}
