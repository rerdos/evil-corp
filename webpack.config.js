const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildFolder = 'dist';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(buildFolder),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader!eslint-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader!eslint-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:'css-loader!sass-loader'
                })
            }
        ]
    },
    externals: {
      'envConfig': JSON.stringify(require('./client/conf/dev.conf'))
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin('styles.css')
    ]
}