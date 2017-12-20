const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

module.exports = env => {

  if (process.env.NODE_ENV === 'prod') {
    module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({ uglifyOptions: { ...options } }), // Call JS minifier
      new OptimizeCSSAssets()  // Call CSS minifier
    );
  }

  return {
    context: path.resolve(__dirname, './'),
    entry: './src/App.js',
    output: {
      path: path.resolve(__dirname, './public/dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.json', '.jsx', '.js', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.gif'],
      alias: {
        images: path.resolve(__dirname, 'src/assets/images')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.scss$/,
          use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
            use: ['css-loader', 'sass-loader', 'postcss-loader'],
            fallback: 'style-loader'
          }))
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: ['file-loader?name=src/assets/images/&name=images/[path][name].[ext]', {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          }],
          exclude: /node_modules/,
          include: __dirname,
        }
      ]
    }
  }
}
