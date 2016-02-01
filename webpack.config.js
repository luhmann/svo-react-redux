require('dotenv').config()
const Clean = require('clean-webpack-plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: PATHS.app,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'svo.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      inject: false,
      template: './config/baseTemplate.ejs',
      title: 'Stove vs oven',
      appMountId: 'app'
    })
  ]
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 8080
    },
    devtool: '#eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    plugins: [
      new Clean([PATHS.build]),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
}
