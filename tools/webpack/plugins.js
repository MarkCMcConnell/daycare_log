const webpack = require('webpack');
const paths = require('./paths');
const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const _ExtractTextPlugin = require('extract-text-webpack-plugin');

// Allows use of env vars in code
const DefinePlugin = new webpack.DefinePlugin({
  'process.env.ASSETS': JSON.stringify(paths.ASSETS)
});

const HtmlWebpackPlugin = new HtmlWebpack({
  template: path.join(__dirname, '.././index.html'),
  filename: 'index.html',
  inject: 'body',
});

const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: true
  }
});

const ExtractTextPlugin = new _ExtractTextPlugin('[name].bundle.css');

module.exports = {
  DefinePlugin: DefinePlugin,
  HtmlWebpackPlugin: HtmlWebpackPlugin,
  UglifyJsPlugin: UglifyJsPlugin,
  ExtractTextPlugin: ExtractTextPlugin
}
