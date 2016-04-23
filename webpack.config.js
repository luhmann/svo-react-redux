require('dotenv').config()
const Clean = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const NpmInstallPlugin = require('npm-install-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

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
        test: /\.jsx?$/, // js and jsx
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: PATHS.app
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'
        )
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },
  output: {
    path: PATHS.build,
    filename: 'svo.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      appMountId: 'app',
      inject: false,
      mobile: true,
      template: './app/config/baseTemplate.ejs',
      title: 'Stove vs oven',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
}

if (TARGET === 'dev' || !TARGET) {
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
    devtool: '#source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('dev')
        }
      }),
      new NpmInstallPlugin({ save: true, saveDev: true }),
      new ExtractTextPlugin('app.css', { allChunks: true }),
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
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new Clean([PATHS.build]),
      new ExtractTextPlugin('styles.css?[chunkhash]'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
}
