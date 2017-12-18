const plugins = require('./plugins');

const BabelLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    cacheDirectory: true
  }
};

const CSSLoader = {
  test: /\.css$/,
  use: plugins.ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        query: {
          modules: true,
          importLoaders: 1
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => ([
            require('postcss-import')(),
            require('postcss-cssnext')(),
            require('autoprefixer')({
              browsers: ['last 2 version', 'ie >= 9']
            })
          ])
        }
      }
    ]
  })
};

module.export = {
  BabelLoader : BabelLoader,
  CSSLoader: CSSLoader
}
