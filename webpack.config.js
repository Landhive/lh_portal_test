const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './lib/main.dart',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public', to: '.' },
            ],
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: false, // Disable source maps
            }),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '-',
            enforceModuleSeparations: true,
        },
    },
};