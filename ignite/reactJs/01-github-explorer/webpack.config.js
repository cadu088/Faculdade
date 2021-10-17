const { resolve } = require('path')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ReactRefrashWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const IsDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: IsDevelopment ? 'development' : 'production',
    devtool: IsDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist', ),
        filename: 'bundle.js'
    },
    resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
    devServer: {
        //contentBase: path.resolve(__dirname, 'public'), 
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        hot: true,
    },
    plugins: [
        IsDevelopment && new ReactRefrashWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ].filter(Boolean),
    module: {
        rules: [{
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            IsDevelopment && require.resolve('react-refresh/babel')

                        ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
}