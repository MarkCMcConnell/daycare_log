const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/Main.js'
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.json', '.jsx', '.js']
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.json$/,
        use: {
          loader: 'json-loader'
        }
      },
      {
        test: /\.css$/,
        // oneOf is used here to allow for the use of package specific css files
        // intended for the styling of the components.  It determines first
        // whether the import statement refers to a node_module.  If so, it will
        // use css-loader and then style-loader.  Otherwise, it will get
        // processed through postcss-loader, css-loader and ExtractTextPlugin.
        oneOf: [
          {
            include: /node_modules/,
            use: ['style-loader', 'css-loader']
          },
          {
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                  }
                },
                'postcss-loader'
              ]
            }))
          }
        ]
      },
      // Load and optimize images
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 string
              name: 'public/assets/images/[hash]-[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquant: {
                quality: '75-90',
                speed: 3
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: './index.html'
    }),
    // ExtractTextPlugin pulls CSS out of the bundle and saves to styles.css
    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
    new CopyWebpackPlugin([
      { from: 'public/assets/images', to: 'images' }
    ])
  ]
}
