import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'server', 'index.js')
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']]
          }

        }
      }
    ]
  },
  devServer: {
    contentBase: 'dist',
    open: true,
  },
}