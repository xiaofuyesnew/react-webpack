const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, '../src/app.jsx')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, '../src')
    }]
  }
}