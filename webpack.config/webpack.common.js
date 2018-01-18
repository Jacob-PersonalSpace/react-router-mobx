const path = require('path');
const root = path.resolve(__dirname, '../')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(root, 'src/App.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(root, 'dist')
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
        })
    ],
};
