const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    server: './server/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
              ]
          }
        }
      },
      {
        test: /\.ts|tsx$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
      extensions: ['.js', '.jsx', '.tsx'],
  },
  devServer: {
    contentBase: 'dist',
    open: true,
  },
}