const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: '/static',
        historyApiFallback: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    entry: {
        index: './index.ts',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'S-engine demos',
            template: 'index.html',
            inject: true,
            filename: 'index.html',
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
}
