const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/demo/' : '/',
  configureWebpack: {
    devServer: {
      open: process.platform === 'darwin',
      // host: '127.0.0.1',
      port: 9099,
      https: false,
      hotOnly: false,
      proxy: null // 设置代理
      // before: app => {}
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/Workers',
          to: 'cesium/Workers'
        }
      ]),
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/ThirdParty',
          to: 'cesium/ThirdParty'
        }
      ]),
      new CopyWebpackPlugin([
        { from: 'node_modules/cesium/Build/Cesium/Assets', to: 'cesium/Assets' }
      ]),
      new CopyWebpackPlugin([
        {
          from: 'node_modules/cesium/Build/Cesium/Widgets',
          to: 'cesium/Widgets'
        }
      ]),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify('./cesium')
      })
    ],
    module: {
      unknownContextCritical: false
    }
  }
}
