const { join } = require('path');

module.exports = {
  mode: 'production',
  entry: join(__dirname, 'index.js'),
  output: {
    path: join(__dirname, '..')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  resolve: {
    extensions: ['.js']
  }
};
