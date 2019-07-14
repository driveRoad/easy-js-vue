const HtmlWeppackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require("./node_modules/vue-loader/lib/plugin");

const { resolve } = require('./util');
module.exports = [
    // 清除注释
    // new CleanWebpackPlugin({
        
    // }),

    new VueLoaderPlugin(),

    new HtmlWeppackPlugin({
        template: 'build/tpl/index.html'
    }),

    new MiniCssExtractPlugin({
        filename: resolve('css/[name].css')
    })
    
]