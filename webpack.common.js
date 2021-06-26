const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Restaurant App',
      short_name: 'Restaurant Pwa',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      theme_color: '#373A40',
      start_url: '/index.html',
      display: 'standalone',
      inject: true,
      ios: true,
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/public/images/icon.png'),
          sizes: [192, 256, 384, 512], // multiple sizes
          purpose: 'any maskable',
          destination: path.join('icons', 'ios'),
          ios: true,

        },
        {
          src: path.resolve('src/public/images/icon.png'),
          sizes: [192, 256, 384, 512], // multiple sizes
          purpose: 'any maskable',
          destination: path.join('icons', 'android'),

        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),

  ],
};
