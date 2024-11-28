const path = require("path"); ///Users/elisa/start2impact/code/projects/blog-js-advanced
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { type } = require("os");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	devServer: {
		port: 5050,
		open: true,
		static: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Newstories | Hacker News",
			favicon: "./src/assets/images/favicon.png",
			template: "index.html",
			meta: {
				//OpenGraph Protocol
				"og:title": {
					property: "og:title",
					content: "Tech Blog - Js Advanced",
				},
				"og:type": { property: "og:type", content: "website" },
				"og:url": {
					property: "og:url",
					content: "https://blog-js-advanced.netlify.app/",
				},
				// TODO: inserire URL immagine in 'content' + type / width / height / alt
				"og:image": {
					property: "og:image",
					content: "...",
				},
				"og:description": {
					property: "og:description",
					content:
						"Blog JS Advanced is a modern blog site designed to showcase dynamic animations, advanced features, and interactivity via JavaScript.",
				},
				"twitter:card": {
					name: "twitter:card",
					content: "summary_large_image",
				},
				// TODO: inserire URL immagine in 'content'
				"twitter:image": { name: "twitter:image", content: "..." },
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				loader: "babel-loader",
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
