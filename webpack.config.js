var DevWebpack = require("./conf/webpack.dev");
var PropWebpack = require("./conf/webpack.prop");
console.log(process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
	case "dev":
		module.exports = DevWebpack;
	case "prop":
		module.exports = PropWebpack;
	default:
		module.exports = DevWebpack;
}