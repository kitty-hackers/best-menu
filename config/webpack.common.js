const paths = require('./paths');

const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: [ paths.src + `/index.js` ],

  output: {
    path: paths.build,
    filename: `[name].bundle.js`,
    publicPath: `/`,
  },

  plugins: [
    // Cleans build folders & unused assets on rebuild
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: `assets`,
          globOptions: {
            ignore: [ `*.DS_Store` ],
          },
        },
      ],
    }),

    // Generates an HTML file to dist folder from template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: `Best Menu`,
      template: `${paths.src}/template.html`,
      filename: `index.html`,
    }),
  ],

  module: {
    rules: [
      // Transpile JS via Babel
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: [ `babel-loader` ], },

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

  resolve: {
    extensions: [ `.js`, `.jsx`, `.json` ]
  }
};
