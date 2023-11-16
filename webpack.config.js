const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        swiper: './scripts/swiper.js',
        main: './scripts/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "./images/[name][ext]",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebPackPlugin({template: "./index.html", filename: "index-dev.html"}),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/images'),
                    to:   path.resolve(__dirname, 'dist/images')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/images/brands'),
                    to:   path.resolve(__dirname, 'dist/images/brands')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
}