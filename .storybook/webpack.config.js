const path = require('path')

const PROJECT_ROOT = path.resolve(__dirname, '..', 'app')

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(PROJECT_ROOT, 'components'),
      lib: path.resolve(PROJECT_ROOT, 'lib'),
      styles: path.resolve(PROJECT_ROOT, 'styles')
    }
  },
  module: {
    loaders: [
     {
        test: /\.svg$/,
        loaders: ['raw-loader'],
        include: PROJECT_ROOT 
      } 
    ] 
  }
}
