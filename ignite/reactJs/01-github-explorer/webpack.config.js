const { resolve } = require('path')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const IsDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: IsDevelopment? 'development' : 'production',
	devtool: IsDevelopment? 'eval-source-map' : 'source-map',
	entry: path.resolve(__dirname, 'src', 'index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist',),
		filename: 'bundle.js'
	},
	resolve: {
    extensions: ['.js', '.jsx']
  },
	devServer: {
    //contentBase: path.resolve(__dirname, 'public'), 
    static: {
      directory: path.resolve(__dirname, 'public')}
  },
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		})
	],
	module: {
  rules: [
		{
			test: /\.jsx$/,
			exclude: /node_modules/,
			use: 'babel-loader',
		}, 
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		}, 
	]
	}
}