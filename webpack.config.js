const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/script.js'),
    output: {
       publicPath: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'production',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|woff|ttf|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(jpg|jpeg|cur|png|bmp|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',


            }
        ],
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    }
};