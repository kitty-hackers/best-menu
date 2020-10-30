# Best Menu

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![David](https://img.shields.io/david/dev/bargamut/best-menu)

Best menu site

## Installation

```
git clone git@github.com:bargamut/webpack-boilerplate-bargamut
cd webpack-boilerplate-bargamut
npm i
```

or

```
git clone git@github.com:bargamut/webpack-boilerplate-bargamut my-project
cd my-project
npm i
```

## Usage

### Linting

```bash
npm run lint
```

This will start editorconfig checker for linting files

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [React](https://reactjs.org/)
- [PostCSS](https://postcss.org/)

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
<!-- - [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration -->

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for React

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`css-minimizer-webpack-plugin`](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) - Optimize and minimize CSS assets
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Optimize and minimize JavaScript

### Tools

- [`editorconfig-checker`](https://github.com/editorconfig-checker/editorconfig-checker) - Verifying that your files are in harmony with your .editorconfig

## Author

- [Paul Petrov](https://bargamut.ru)

## License

This project is open source and available under the [MIT License](LICENSE).
