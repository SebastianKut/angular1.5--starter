var path = require('path');
module.exports = {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader:
          'ngtemplate?relativeTo=' + path.resolve(__dirname) + '/app/!html',
        include: path.resolve(__dirname, 'app'),
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  devServer: {
    open: true,
  },
  context: __dirname,
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/webpack-dev-server',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
  },
};
