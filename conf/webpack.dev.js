var webpackBase = require("./webpack.base");
var config = require("./config");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require("path");
var webpack = require("webpack");

var devConfig = merge(webpackBase, {
	resolve: {
		alias: {
			vue: "vue/dist/vue.js"
		}
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "scripts/[name].js"
		}),
		new ExtractTextPlugin("style/[name].css"),
		new HtmlWebpackPlugin({
			template: config.srcDir + '/index.html',
			filename: config.buildDir + '/views/index.html',
		})
	],
});
module.exports = devConfig;