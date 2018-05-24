const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const webSite = {
    publicPath: 'http://127.0.0.1:1730'
}
module.exports = {
    //入口配置
    entry: {
        entry: './src/entry.js'
    },
    //出口配置
    output: {
        //node的知识
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: webSite.publicPath
    },
    //依赖包
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500000
                    }
                }]
            }
        ]
    },
    //插件
    plugins: [
        new uglify(),
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new extractTextPlugin('/css/index.css')
    ],
    devServer: {
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 1730
    }
}