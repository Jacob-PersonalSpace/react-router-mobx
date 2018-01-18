const path = require('path');
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname, '../')
const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
    entry: {
        app: path.join(root, 'src/App.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(root, 'dist'),
        publicPath: ASSET_PATH
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'),
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        })
    ],
};
