const path = require("path"); ///Users/elisa/start2impact/code/projects/blog-js-advanced
const HtmlWebpackPlugin = require("html-webpack-plugin");

const metaTags = {
	type: "website",
	url: "https://blog-js-advanced.netlify.app/",
	title: "Tech Blog - Js Advanced",
	description:
		"Blog JS Advanced is a modern blog site designed to showcase dynamic animations, advanced features, and interactivity via JavaScript.",
	image: {
		path: "https://blog-js-advanced.netlify.app/a53fda78764b7eadf3b3930d69206f3b.png",
		width: "600",
		height: "300",
	},
};

const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = "style-loader";

const config = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
		publicPath: "/",
	},
	devServer: {
		port: 5050,
		open: true,
		static: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
			favicon: "./src/assets/img/favicon.png",
			meta: {
				//OpenGraph Protocol
				"og:title": {
					property: "og:title",
					content: metaTags.title,
				},
				"og:type": { property: "og:type", content: metaTags.type },
				"og:url": {
					property: "og:url",
					content: metaTags.url,
				},
				"og:image": {
					property: "og:image",
					content: metaTags.image.path,
				},
				"og:image:width": {
					property: "og:image:width",
					content: metaTags.image.width,
				},
				"og:image:height": {
					property: "og:image:height",
					content: metaTags.image.height,
				},
				"og:description": {
					property: "og:description",
					content: metaTags.description,
				},
				"twitter:card": {
					name: "twitter:card",
					content: "summary_large_image",
				},
				"twitter:image": {
					name: "twitter:image",
					content: metaTags.image.path,
				},
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
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
						// options: {
						// 	outputPath: "images",
						// },
					},
				],
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
