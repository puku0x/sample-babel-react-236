module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  target: ['web', 'es5'],
};
