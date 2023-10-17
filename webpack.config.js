const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devServer: {
    port: 3010,
    magicHtml: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      layouts: path.resolve(__dirname, './src/layouts'),
      lib: path.resolve(__dirname, './src/lib'),
      pages: path.resolve(__dirname, './src/pages'),
      src: path.resolve(__dirname, './src')
    }
  },
  externals: {
    react: 'React'
  }
}
