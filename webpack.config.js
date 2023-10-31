const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'timers': require.resolve('timers-browserify'),
    },
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      os: require.resolve('os-browserify/browser'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer/'),
      url: require.resolve('url/'),
      child_process: false,
      crypto: require.resolve('crypto-browserify'),
      assert: require.resolve('assert/'),
      tls: false,
      net: false,
      zlib: require.resolve('browserify-zlib'),
      constants: require.resolve('constants-browserify'),
      timers: require.resolve('timers-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
    },
  },
  externals: {
    'node-gyp': 'commonjs node-gyp',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
            }
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  mode: 'development',
};
