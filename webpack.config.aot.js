var webpackMerge = require('webpack-merge');
var prodConfig = require('./webpack.config.prod');

module.exports = webpackMerge.smart(prodConfig, {

    entry: './src/app/main.aot.ts',

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