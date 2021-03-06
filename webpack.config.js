/**
* The first part of the file (from the entry to the output property) is just 
* telling webpack where our project starts, where the compiled version 
* should be output, and how to resolve TypeScript files. 
* The latter part, under plugins, defines some of the webpack additions it 
* needs in order to work with Phaser.
**/

const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: './src/main.ts',
		vendors: ['phaser']
	},

	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/
		}]
	},

	devtool: 'inline-source-map',

	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},

	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'development',

	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
	},

	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'index.html'),
					to: path.resolve(__dirname, 'dist')
				},

				{
					from:
						path.posix.join(path.resolve(__dirname, "assets").replace(/\\/g, "/"),
							"**".replace(/\\/g, "/"),
							"*"
						),
					to: path.resolve(__dirname, 'dist'),
				}
			]
		}),

		new webpack.DefinePlugin({
			'typeof CANVAS_RENDERER': JSON.stringify(true),
			'typeof WEBGL_RENDERER': JSON.stringify(true)
		}),
	],

	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},

	watchOptions: {
		ignored: /node_modules/
	}
};