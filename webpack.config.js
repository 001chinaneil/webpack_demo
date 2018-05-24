const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
module.exports = {
    //入口配置
    entry: {
        entry: './src/entry.js'
    },
    //出口配置
    output: {
        //node的知识
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    //依赖包
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
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
        })
    ],
    devServer: {
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 1728
    }
}