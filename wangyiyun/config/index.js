dev: {
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }