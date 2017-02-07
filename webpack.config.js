
module.exports = {
  entry: './src/entry.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/assets'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]', 'postcss-loader'] }
    ]
  },
};
