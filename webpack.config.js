const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({fielname: 'index.html', template: 'src/index.html'}),
        new ExtractTextPlugin("styles.css"),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})},
            { test: /\.(js|jsx)$/, use: "babel-loader" },
            { test: /\.(woff2?|eot|svg|ttf|png|jpg|gif)$/, use: 'file-loader' }
        ]
    },
    devtool: 'inline-source-map'  
}
