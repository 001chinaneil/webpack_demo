const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const purifyCssPlugin = require('purifycss-webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');

const entry = require('./webpack_config/entry_config');

const webpack = require('webpack');

// const webSite = {
//     publicPath: 'http://127.0.0.1:1773'
// }
let webSite;
//利用Node的语法来读取type的值
if(process.env.type== "build"){
    webSite = {
        publicPath:"http://127.0.0.1:1780"
    }
}else{
    webSite = {
        publicPath:"http://cdn.jspang.com/"
    }
}
console.log( encodeURIComponent(process.env.type) );
module.exports = {
    //入口配置
    entry: entry.path, //改成模块化加载了
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
            },
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
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
        }),
        new webpack.BannerPlugin('wy_neil@126.com neil版权所有'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['jquery','vue'],
            filename: 'assets/js/[name].js',
            minChunk: 2
        }),
        new copyWebpackPlugin([{
            from: __dirname + '/src',
            to: './public'
        }]),
        new webpack.HotModuleReplacementPlugin({

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
        port: 1780
    },
    devtool: 'source-map', //调试模式
    watchOptions: {
        poll: 1000, //检测修改的时间
        aggregeateTimeout: 500, //在500ms内的重复按键 不算
        ignored: /node_modules/  //忽略检测
    }
}