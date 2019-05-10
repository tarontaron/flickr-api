const path = require('path')
const parentDir = path.join(__dirname, './')

module.exports = {
  entry: [path.join(parentDir, 'index.js')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      UiAtoms: path.resolve(__dirname, 'core/ui-library/atoms/')
    },
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./core/ui-library'),
      path.resolve('./core'),
      path.resolve('./conf'),
      path.resolve('./'),
      path.resolve('./node_modules')
    ]
  }
}
