const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module:
  {
      rules:
      [
          {
              test: /\.(glb|gltf)$/,
              use:
              [
                  {
                      loader: 'file-loader',
                      options:
                      {
                          outputPath: '/assets/model/'
                      }
                  }
              ]
          },
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: '/index.html' })
  ],
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
  },
}