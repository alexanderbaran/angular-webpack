var webpackMerge = require('webpack-merge');
var prodConfig = require('./webpack.config.prod');

module.exports = webpackMerge.smart(prodConfig, {

    entry: './src/app/main.aot.ts',

    // TODO: Run component css through postcss-cli and autoprefix before AOT.
    // https://github.com/code42day/postcss-cli

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript',
                    'angular2-template',
                    'angular2-router?aot=true&genDir=dist/src/app'
                ]
            }
        ]
    }

});