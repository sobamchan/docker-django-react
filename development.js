import path from 'path'

const src  = path.resolve(__dirname, './assets/js')
const dist = path.resolve(__dirname, './assets/js')

export default {
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },

  plugins: []
}
