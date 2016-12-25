const path = require('path')

const PROJECT_ROOT = path.resolve(__dirname, '..', 'app')

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(PROJECT_ROOT, 'components'),
      'lib': path.resolve(PROJECT_ROOT, 'lib')
    }
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: extractCssModules.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus'
        ),
        exclude: PATHS.styles
      }
    ] 
  }
}
