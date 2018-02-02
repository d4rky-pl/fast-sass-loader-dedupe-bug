const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'index.build.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract([
          'css-loader', 
          'fast-sass-loader'
        ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'result.css'
    })
  ]
}
