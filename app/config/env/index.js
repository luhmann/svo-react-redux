if (true || process.env.NODE_ENV === 'production') {
  module.exports = require('./production.json')
} else {
  module.exports = require('./dev.json')
}
