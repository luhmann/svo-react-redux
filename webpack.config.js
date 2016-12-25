require('dotenv').config()
const Clean = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const NpmInstallPlugin = require('npm-install-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET
const PATHS = {
  app: path.join(__dirname, 'app'),
  styles: path.join(__dirname, 'app', 'global.styl'),
  build: path.join(__dirname, 'build')
}

const extractCssModules = new ExtractTextPlugin('components.css')
const extractGlobalCss = new ExtractTextPlugin('global.css')

const common = {
  entry: {
    app: PATHS.app,
    globalCss: PATHS.styles
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
        test: /\.styl$/,
        loader: extractCssModules.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus'
        ),
        exclude: PATHS.styles
      },
      {
        test: /\.styl$/,
        loader: extractGlobalCss.extract('style', 'css!stylus'),
        include: PATHS.styles
      },
      {
        test: /\.svg$/,
        loaders: ['raw-loader'],
        include: PATHS.app
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
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
  postcss: [
    // require('postcss-initial')({
    //   reset: 'inherited' // reset only inherited rules
    // }),
    // Deactivated on 09-09-16 becuase not completely understood
    // require('postcss-autoreset'),
    require('autoprefixer')({browsers: ['last 2 versions']})
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
    alias: {
      lib: path.resolve(PATHS.app, 'lib'),
      assets: path.resolve(PATHS.app, 'assets'),
      styles: path.resolve(PATHS.app, 'styles'),
      sharedComponents: path.resolve(PATHS.app, 'components', 'shared')
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
      new NpmInstallPlugin({ save: true, saveDev: true }),
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
      new Clean([PATHS.build]),
      new ExtractTextPlugin('styles.css?[chunkhash]'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }))
}
