module.exports = {
  plugins: {
    'postcss-import': {
      path: '/public/assets/stylesheets'
    },
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
      features: {
        customProperties: {
          variables: {
            primaryColor: '#d57500',
            primaryColorDark: '#8f3b1b',
            secondaryColor: '#668d3c',
            secondaryColorDark: '#404f24',
            text: '#300',
            darkText: '#444'
          }
        }
      }
    },
    'cssnano': {
      'autoprefixer': false
    }
  }
}
