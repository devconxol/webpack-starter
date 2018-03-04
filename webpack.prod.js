const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {

	output: {
		filename: '[name].bundle.js',
		//chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},



	optimization: {
		splitChunks: {
			chunks: "all"
		}
	},

	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
});