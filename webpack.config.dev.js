var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');

/* Smart not only overwrites the differences but within the differences
compare it again. So we do not overwrite whole objects, but only the differences
in those objects. */
module.exports = webpackMerge.smart(commonConfig, {

    devtool: 'cheap-module-eval-source-map',

    output: {
        path: '/dist',
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        port: 80,

        /* So we can use slashes instead of hashtag in Angular.
        Will see an output like: "404s will fallback to /index.html"
        on the console when starting the webpack dev server. */
        historyApiFallback: true,

        stats: 'minimal'

        /* The Webpack dev server makes use of http-proxy-middleware to
        optionally proxy requests to a separate, possibly external, backend server.
        https://github.com/chimurai/http-proxy-middleware */

        // proxy: {
        //     '/api/': {
        //         target: 'http://localhost:8080',
        //         secure: false,
        //         changeOrigin: true, // needed for virtual hosted sites
        //         ws: true, // proxy websockets
        //     }
        // }        
    }

});