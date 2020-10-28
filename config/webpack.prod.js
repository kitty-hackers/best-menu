const paths = require('./paths');

const webpack = require('webpack');
const common = require('./webpack.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: `production`,
	
	devtool: false,
	
	output: {
		path: paths.build,
		publicPath: `/`,
		filename: `js/[name].[contenthash].bundle.js`,
	},

	plugins: [
		// Extract CS into separate files
		// Note: style-loader is for development, MiniCssExtractPlugin is for production
		new MiniCssExtractPlugin({
			filename: `styles/[name].[contenthash].css`,
			chunkFilename: `[id].css`,
		}),
	],

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: `css-loader`,
						options: { sourceMap: false, },
					},
					`postcss-loader`,
				],
			},
		],
	},
};