const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const purifyCssPlugin = require('purifycss-webpack');
const webSite = {
    publicPath: 'http://127.0.0.1:1770'
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
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500000
                    }
                }]
            },
            {
                test:/\.js$/, //匹配.js文件
                //排除也就是不转换node_modules下面的.js文件
                exclude: /(node_modules|bower_components)/,
                //加载器  webpack2需要loader写完整 不能写babel 要写 bable-loader
                use:[{loader:"babel-loader"}]
            },
            {
                test: /\.less$/,
                // use: [{
                //     loader: "style-loader"
                // },{
                //     loader: "css-loader"
                // },{
                //     loader: "less-loader"
                // }],
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    },{
                        loader: "less-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                // use: [{
                //     loader: "style-loader"
                // },{
                //     loader: "css-loader"
                // },{
                //     loader: "sass-loader"
                // }]
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    },{
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
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
        new extractTextPlugin('css/index.css'),
        new purifyCssPlugin({
            paths: glob.sync(path.join(__dirname,'src/*.html'))
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
        port: 1770
    }
}