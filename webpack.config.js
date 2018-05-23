const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
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
            }
        ]
    },
    //插件
    plugins: [
        new uglify()
    ],
    devServer: {
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 1721
    }
}