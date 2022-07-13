const path = require("path");

module.exports = {
	mode: "development",
	target: "electron-renderer",
	devtool: "inline-source-map",
	watch: true,
	watchOptions: {
		ignored: [
			"index.js",
			"**/node_modules"
		] ,
	},
	stats: "errors-only",
	entry: path.resolve(__dirname, "./src/index.jsx"),
	output: {
		path: path.resolve(__dirname, "./public/"),
		filename: "app.bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: path.resolve(__dirname, "/node_modules/"),
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react"
						]
					}
				}
			},
			{
				test: /\.s?[ac]ss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	}
};