const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://pizza-nodejs.herokuapp.com',
            changeOrigin: true,
        })
    );
};