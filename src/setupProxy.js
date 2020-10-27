const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://git.heroku.com/pizza-nodejs.git',
            changeOrigin: true,
        })
    );
};