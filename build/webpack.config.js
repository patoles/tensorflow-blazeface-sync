const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../src/index'),
  target: 'web',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          "presets": [
            ["@babel/preset-env", {
              "useBuiltIns": false,
            }],
          ],
          "plugins": [
            "@babel/plugin-transform-runtime"
          ]
        }
      }
    ]
  },
  plugins: [],
  optimization:{
    minimize: true,
  }
}
