const paths = require('./paths');

const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
	mode: `production`,
	
	devtool: false,
	
	output: {
		path: paths.build,
		publicPath: `/`,
		filename: `js/[name].[contenthash].bundle.js`,
	},

	plugins: [
		// Extract CSS into separate files
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

	optimization: {
		minimize: true,
		minimizer: [
			// for CSS
			new CssMinimizerPlugin(),
			// for JS
			new TerserPlugin(),
		],
		// Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
		runtimeChunk: {
			name: `runtime`,
		},
		// Get all from node_modules and build it to vendors/name-of-module.[hash].bundle.js
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					minSize: 0,
					maxInitialRequests: Infinity,
					name(module) {
						// Get the name, e.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

						// Return modified name of file with replaces "@"
						return `vendors/${packageName.replace(`@`, ``)}`;
					},
					chunks: `all`,
				},
			},
		},
	},

	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});