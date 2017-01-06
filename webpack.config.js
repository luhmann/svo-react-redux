require('dotenv').config()
const Clean = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const extractCssModules = new ExtractTextPlugin('components.css')
const extractGlobalCss = new ExtractTextPlugin('global.css')

const common = {
  entry: {
    app: PATHS.app
  },
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
        test: /\.svg$/,
        loaders: ['raw-loader'],
        include: PATHS.app
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&name=/[hash].[ext]&mimetype=application/font-woff',
        include: PATHS.app
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false&progrssive=true'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      lib: path.resolve(PATHS.app, 'lib'),
      assets: path.resolve(PATHS.app, 'assets'),
      styles: path.resolve(PATHS.app, 'styles'),
      sharedComponents: path.resolve(PATHS.app, 'components', 'shared'),
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat'
    }
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
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
  module.exports = validate(merge(common, {
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'minimal',
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
      extractCssModules,
      extractGlobalCss,
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  }))
}

if (TARGET === 'build') {
  module.exports = validate(merge(common, {
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
      new CompressionPlugin(),
      new Clean([PATHS.build]),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }))
}
