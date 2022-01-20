const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROT = NODE_ENV === 'production';

function setupDeftool() {
    if (IS_DEV) return 'eval';
    if (IS_PROT) return false;
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', 'json', '.ts', 'tsx'],
    },
    mode: NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
    ],
    devServer: {
        port: 3001,
        open: true,
        hot: IS_DEV,
    },
};
