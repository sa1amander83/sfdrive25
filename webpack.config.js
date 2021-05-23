const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const esLintWebpackPlugin = require('eslint-webpack-plugin');
// const webpack = require('webpack')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const PATHS = {
  src: path.join(__dirname,'./src'),
  dist: path.join(__dirname,'./dist'),
  assets: path.join(__dirname,'./dist')
};
module.exports = {
          entry: "./src/index.js",
        mode: "development",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "main.js"
        },
            devServer: {
            contentBase: "./dist",
            port: 8000,
            stats: {
                children: false,
                maxModules: 0
            },
            hot: true
        },








    // mode:'development',
    // target: ['web'],
    // devtool: 'inline-source-map',




    // externals: {
    //     paths: PATHS
    // },
    // entry:{ 
    //     index: './src/index.js'},

    // output: {
    //         path: '/dist',
    //     filename: 'bundle.js',
    //                 // path: PATHS.dist,
    //         publicPath: 'dist/'
    // },
    // devServer: {
    //     open: true,
    //     watchContentBase: true,
    //     contentBase: './dist',
    //     port: 8000,
    //     hot:true,
    //     historyApiFallback: true

    // },
      module: {
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude: '/node_modules/',
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
    resolveLoader: {
        modules: [
            path.join(__dirname, './node_modules')
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, './node_modules')]},
    plugins: [

  
        // new CleanWebpackPlugin( {cleanAfterEveryBuildPatterns: ['dist']} ),
        new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
        new CopyWebpackPlugin ({
                patterns:  [
                    {    from: './src/components/img', to: './img' }],

        }),

    new HtmlWebpackPlugin ({
        template: `${PATHS.src}/index.html`,
        filename: './index.html',
        minify: false

    }),
    // new webpack.HotModuleReplacementPlugin(),
           new esLintWebpackPlugin ({

        }),

    
    ],
    
        optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 5120000,
        maxAssetSize: 5120000
    },
    
};

