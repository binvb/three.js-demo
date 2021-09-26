const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({ template: '/index.html' })],
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
  },
}