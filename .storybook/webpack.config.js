const path = require('path')

const PROJECT_ROOT = path.resolve(__dirname, '..', 'app')

module.exports = {
  resolve: {
    alias: {
      assets: path.resolve(PROJECT_ROOT, 'assets'),
      lib: path.resolve(PROJECT_ROOT, 'lib'),
      styles: path.resolve(PROJECT_ROOT, 'styles'),
      sharedComponents: path.resolve(PROJECT_ROOT, 'components', 'shared')
    }
  },
  module: {
    loaders: [
     {
        test: /\.svg$/,
        loaders: ['raw-loader'],
        include: PROJECT_ROOT 
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&name=[hash].[ext]&mimetype=application/font-woff',
        include: PROJECT_ROOT 
      }, 
    ] 
  }
}
