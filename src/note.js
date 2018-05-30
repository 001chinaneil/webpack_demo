//系统学习webpack 笔记

//第一节 认识webpack的作用
/*
* 1.作用: 打包、转换、优化
* 2.尽量全用cnpm 淘宝镜像安装环境
* 3.环境都要全局和本地各安装一份
* 4.安装指定版本的webpack:
*   cnpm install webpack@3.6.0 -g
*   cnpm install webpack@3.6.0 --save-dev
* 5.无论是git还是npm 进入项目根目录都要初始化: git init / git npm
* */

//第二节 上手一个DEMO
/*
* 1.webpack {entry file} {destination for bundled file} : 真正的使用是没有花括号的。
* */

//第三节 配置文件: 出口和入口
/*
* 1.entry
* 2.output
* */

//第四节 服务和热更新
/*
* 1.webpack-dev-server 热更新的包环境
* */

//第五节 模块 CSS的文件打包
/*
* 1.loaders作用:
*   可以把SASS文件转换为CSS文件
*   可以把ES6/ES7代码转换为兼容大多数浏览器的JS代码
*   可以把React的JSX转换为JS代码
* 2.webpack.config.js里面的loaders配置:
*   test 用于处理匹配处理文件扩展名的表达式(必选)
*   use  使用的模块名称(必选)
*   include/exclude 手动添加必须/屏蔽处理的文件(可选)
*   query 额外的配置选项(可选)
* 3.需要安装的模块: style-loader css-loader
* 4.解决问题:
*   eg: Error: listen EADDRINUSE
*   result: 端口被占用
* */

//第六节 插件配置: 配置JS压缩
/*
* 1.使用插件: uglifyjs-webpack-plugin(已经集成在webpack中)
* 2.使用在webpack.config.js里面引入，然后在下面的plugins配置项里面：new uglify()
* 3.npm root -g : 查看全局安装目录
* 3.疑问:
*   开发模式？生成模式？
*   执行命令，默认用的是全局环境？
* 4.webpack-dev-server不能用: 版本问题，换个版本就好了。
* */

//第七节 插件配置: HTML的发布
/*
* 1.把html代码放到开发环境中，就是在src目录下
* 2.需要html-webpack-plugin包环境安装到本地项目中
* 3.webpack.config.js里面的插件配置: 先在此文件引入html-webpack-plugin包
*   new htmlPlugin({
*       minify: {
*           removeAttributeQuotes: true
*       },
*       hash: true,
*       template: './src/index.html'
*   })
* */

//第八节 图片迈坑: css中的图片处理
/*
* 1.需要图片解析用的loader: file-loader url-loader
* 2.limit参数: 把小于这个参数值的图片打成Base64格式，写入JS。
* 3.url-loader封装了file-loader
* 4.纠正: 匹配图片的正则表达式: test: /\.(png|gif|jpg)$/ ，技术胖这里写错了。
* */

//第九节: 图片分离: CSS分离与图片路径处理(未完)
/*
* 1.需要CSS从JS文件中分离: extract-text-webpack-plugin
* 2.疑问:
*       多文件一起压缩怎么弄？
* */