const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        swiper: './scripts/swiper.js',
        main: './scripts/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "[name][ext]",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebPackPlugin({template: "./index.html", filename: "index-dev.html"}),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
}