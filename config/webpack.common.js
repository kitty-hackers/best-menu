const path = require('paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, `./src/index.js`),
	},

	output: {
		path: path.resolve(__dirname, `./dist`),
		filename: `[name].bundle.js`,
		publicPath: `/`,
	},

	plugins: [
		// Cleans build folders & unused assets on rebuild
		new CleanWebpackPlugin(),

		// Generates an HTML file to dist folder from template
		// Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
		new HtmlWebpackPlugin({
			title: `webpack Boilerplate`,
			template: path.resolve(__dirname, `./src/template.html`),
			filename: `index.html`,
		}),
	],

	module: {
		rules: [
			// Transpile JS via Babel
			{ test: /\.js$/, exclude: /node_modules/, use: [ `babel-loader` ], },
			
			// Copy images to build folder
			{ test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: `asset/resource`, },

			// Fonts & SVGs: Inline data
			{ test: /\.(woff(2)?|eot|ttf|otf|svg)$/, type: `asset/inline`, },

			// Inject CSS inth the head with source maps
			{
				test: /\.css$/,
				use: [
					`style-loader`,
					{ loader: `css-loader`, options: { sourceMap: true, }},
					{ loader: `postcss-loader`, options: { sourceMap: true, }}
				],
			},
		]
	},
};