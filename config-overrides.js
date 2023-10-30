const ImageminPlugin = require('imagemin-webpack-plugin').default
const path = require.resolve('path-browserify')

module.exports = function override(config, env) {
    config.plugins.push(
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            disable: env !== 'production',
        })
    )

    return config;
}

module.exports = function override(config, env) {
    config.resolve = {
        ...config.resolve,
        fallback: {
            ...config.resolve.fallbacl,
            path,
        }
    }

    return config
}