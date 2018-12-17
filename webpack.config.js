var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: MiniCssExtractPlugin.loader
			}, {
				loader: 'css-loader'
			}, {
				loader: 'postcss-loader',
				options: {
					ident: 'postcss',
					"plugins": (loader) => [
						require('autoprefixer')(),
						require('cssnano')()
					]
				}
			}, {
				loader: "sass-loader"
			}]
		}, {
			test: /\.(png|svg|jpg)$/,
			use: [
				'file-loader'
			]
		}, {
			test: /\.(woff|woff2)$/,
			use: [
				'file-loader'
			]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'app.css',
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'test.html',
			template: './src/test.html'
		})
	]
};