var
  webpack = require('webpack');

module.exports = {
  target: 'node',
  debug: false,

  entry: {
    'window-mock': './src/window-mock'
  },
  output: {
    path: '',
    filename: '[name].min.js'
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader?optional[]=runtime' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};
