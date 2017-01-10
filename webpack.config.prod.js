var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');
var CompressionPlugin = require("compression-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = webpackMerge.smart(commonConfig, {

    output: {
        path: './dist',
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    module: {
        loaders: [
            {
                test: /styles\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',

                    /* No need for sourceMap in production,
                    we will minify and even perhaps gzip. */

                    // https://github.com/webpack/css-loader
                    // ?minimize adds minification.
                    loader: ['css-loader?minimize', 'postcss-loader', 'sass-loader']
                })
            }
        ]
    },

    plugins: [
        // http://dev.topheman.com/how-to-fail-webpack-build-on-error/
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'PRODUCTION': JSON.stringify(true)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false
        }),
        new ExtractTextPlugin("styles.[hash].css"),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|css)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]

});