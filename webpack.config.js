const path = require('path');
//SET UP HTML LOADER!!! SEE IF THAT FIXES OUR PROBLEM
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        pageload: './src/page-load.js',
    },
    devtool: 'inline-source-map',
    plugins: [
            new HtmlWebpackPlugin({
                title: 'Testing Development',
            }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};