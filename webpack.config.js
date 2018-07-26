const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './index.html',
    filename: './index.html',
    load: './assets/loader.gif',
});


module.exports = {
    entry: [
        './index.js',
    ],
    devServer: {
        hot: true,
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    context: resolve(__dirname, 'src'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$|.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{ loader: 'url-loader?limit=15000&name=images/[name].[ext]' }]
            },
            {
                test: /\.mp3$/,
                use: [{ loader: 'url-loader?limit=15000&name=media/[hash].[ext]' }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{ loader: 'url-loader?limit=15000&name=fonts/[hash].[ext]' }]
            },
        ]
    },
    // devServer: {
    //     historyApiFallback: true,
    // },
    plugins: [ 
        htmlWebpackPlugin
        // preloadWebpackPlugin
    ]
};
