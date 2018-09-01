module.exports = {
  entry: ['babel-polyfill', __dirname + '/src/index.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: '/assets'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
};
