var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    './components/App.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
        mangle: {
          except: ['$super', '$', 'exports', 'require']
        }
      })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  }
};