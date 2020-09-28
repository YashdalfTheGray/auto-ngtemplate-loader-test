const { join, resolve } = require('path');

module.exports = {
  entry: ['./index.js'],
  context: resolve('src/ng1-app'),
  output: {
    filename: 'bundle.js',
    path: resolve('public'),
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'auto-ngtemplate-loader'],
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ngtemplate-loader',
            options: {
              relativeTo: 'src/',
            },
          },
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  stats: {
    colors: true,
  },
};
