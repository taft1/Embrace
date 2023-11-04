const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = function override(config, env) {
  config.plugins.push(
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: env !== 'production',
    })
  )

  return config
}
