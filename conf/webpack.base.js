var config = require("../conf/config");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var baseConfig = {
	entry: {
		app: config.srcDir + "/app.js"
	},
	output: {
		path: config.buildDir + '/assets/',
		filename: 'scripts/[name].js'
	},
	module: {
		rules: [{
			test: /\.vue?$/,
			loader: "vue-loader",
			options: {
				loaders: {
					css: ExtractTextPlugin.extract({
						loader: "css-loader",
						fallbackLoader: "vue-style-loader"
					})
				}
			}
		}],

	},
};
module.exports = baseConfig;