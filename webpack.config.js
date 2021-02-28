const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const esLintWebpackPlugin = require('eslint-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
const PATHS = {
  src: path.join(__dirname,'./src'),
  dist: path.join(__dirname,'./dist'),
  assets: path.join(__dirname,'./dist')
};
module.exports = {
    mode:'production',
    devtool: 'inline-source-map',
    target: 'node',
    externals:[nodeExternals(), {paths: PATHS}, {react:'React'}],

    entry: {
        index: './src/index.js'},
        output: {
        filename: '[name].js',
            path: PATHS.dist,
            publicPath: '/'
    },

    devServer: {
        contentBase:__dirname + '/dist',
        port:8081,
                hot:true,
        historyApiFallback: {index:'/dist'}
    },

    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        }},

      module: {
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude: '/node_modules/',
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"] }
            },
            {
                test: /\.jsx$/,
                loader:'babel-loader',
                exclude: '/node_modules/',
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"] }
            },





            {   test: /\.js$/,
                exclude: "/node_modules/",
                loader: "eslint-loader",
            },

            {
                test: /\.(css|scss)$/,
                use: [
                MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('node-sass'),
                        },
                    },
                ],
            },
            {
                test: /\.(woff|ttf|eot|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './asset'
                }
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
                  ]
    },
target:'node',
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
        new CopyWebpackPlugin ({
                patterns:  [
                    {    from: './src/img', to: './img' }],

        }),
    new HtmlWebpackPlugin ({
        template: `${PATHS.src}/index.html`,
        filename: './index.html',
        minify: false

    }),


        new esLintWebpackPlugin ({

        })
    ], optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 5120000,
        maxAssetSize: 5120000
    }

};