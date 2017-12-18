const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const paths = require('./tools/webpack/paths');
// const plugins = require('./tools/webpack/plugins');
// const loaders = require('./tools/webpack/loaders');

let config = {
    context: path.resolve(__dirname, './'),
    entry: './src/App.js',
    // entry: {
    //   app: paths.APP
    // },
    output: {
      path: path.resolve(__dirname, './public/dist'),
      filename: '[name].bundle.js'
    },
    resolve: {
      extensions: ['.json', '.jsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.scss$/,
          use: ExtractTextWebpackPlugin.extract({
            loader: ['css-loader', 'sass-loader'],
            fallback: 'style-loader'
          })

        }
      ]
    },
    plugins: [
      new ExtractTextWebpackPlugin('styles.css'),
      new webpack.optimize.UglifyJsPlugin()
    ]
    // module: {
    //   rules: [
    //     loaders.BabelLoader,
    //     loaders.CSSLoader
    //   ]
    // },
    // plugins: [
    //   plugins.DefinePlugin,,
    //   plugins.HtmlWebpackPlugin,
    //   plugins.UglifyJsPlugin
    // ]
  }
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}
