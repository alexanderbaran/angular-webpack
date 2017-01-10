var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/app/main.ts',

    module: {
        // rules: [
        /* Need to use the older syntax without "rules" and "use" because
        of extract-text-webpack-plugin compability issues. */
        // https://github.com/webpack/extract-text-webpack-plugin/issues/265
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript', 'angular2-template', 'angular2-router']
            },
            {
                test: /\.html$/,
                // use: 'html'
                loader: 'html'
            },
            // {
            //     test: /\.scss$/,
            //     exclude: /styles\.scss/,
            //     // No sourcemaps here.
            //     // https://github.com/angular/angular/issues/9664
            //     loaders: ['raw', 'postcss', 'sass']
            // },
            {
                // Will only do plain css for components because of lack of AOT support.
                test: /\.css$/,
                loaders: ['raw']
            },            
            {
                test: /styles\.scss$/,
                /* Need ?sourceMap on both css and sass. If only on css then
                sass variables are not shown, if only on sass then nothing
                is shown. */

                // https://github.com/webpack/style-loader
                /* Note about source maps support and assets referenced with url: when
                style loader is used with ?sourceMap option, the CSS modules will be
                generated as Blobs, so relative paths don't work (they would be relative
                to chrome:blob or chrome:devtools). In order for assets to maintain correct
                paths setting output.publicPath property of webpack configuration must be
                set, so that absolute paths are generated. */
                loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
            }
            // {
            //     test: /\.css$/,
            //     exclude: /styles\.css/,
            //     use: ['raw', 'postcss']
            // },
            // {
            //     test: /styles\.css$/,
            //     // https://github.com/webpack/css-loader/issues/228
            //     use: ['style', 'css?sourceMap&importLoaders=1', 'postcss']
            // }
        ]
    },

    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        // https://github.com/joshbuchea/HEAD
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/favicon.ico'
        }),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            './src' // location of your src
        )
    ],

    resolve: {
        extensions: ['*', '.js', '.ts']
    },

    resolveLoader: {
        moduleExtensions: ['-loader']
    },

    performance: {
        hints: false
    }    
};