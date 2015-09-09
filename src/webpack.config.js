module.exports = {
  target: 'node',
  debug: false,

  entry: {
    'window-mock': './src/window-mock'
  },
  output: {
    path: '',
    filename: '[name].js'
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
  }
};
