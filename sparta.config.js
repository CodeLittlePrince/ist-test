const proxyServerConfig = require('./config/proxyServer')

module.exports = {
  favicon: 'favicon.ico',

  webpack: {
    entry: 'src/index.ts',
    publicPath: process.env.NODE_ENV === 'production' ? process.env.CDN : '/'
  },

  devServer: {
    proxy: [{
      context: ['/api', '/mock-switch'],
      target: `http://localhost:${proxyServerConfig.port}`
    }],
    historyApiFallback: true,
  }
}