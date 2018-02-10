var proxyMiddleware = require('http-proxy-middleware')
var server = express()

server.middleware = [
        proxyMiddleware(['/personalized'], {target: 'http://localhost:3000', changeOrigin: true}),
];

server.use(server.middleware);