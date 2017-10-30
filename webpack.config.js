var path = require("path");
var webpack = require("webpack");
module.exports = {
	entry: {
		seller: "./src/javascripts/seller",
		buyer: "./src/javascripts/buyer"
	},
	output: {
		path: path.join(__dirname, "./js"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			filename: "commons.js",
			name: "commons"
		})
	],
  node: {
   fs: "empty"
  },
	module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      }
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
};