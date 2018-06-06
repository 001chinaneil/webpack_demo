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

//第九节: 图片分离: CSS分离与图片路径处理()
/*
* 1.需要CSS从JS文件中分离: extract-text-webpack-plugin
* 2.疑问:
*       多文件一起压缩怎么弄？
* */

//第十节: 图片迈坑: 处理HTML中的图片(卡在了这里)
/*
* 1.--save-dev 和 --save的区别和作用？
*   --save-dev: 是开发环境的配置[只在开发环境中使用]
*   --save: 是生产环境的配置，[生产环境同样要使用的配置]
* 2.查看电脑端口号占用情况: lsof -i:占用的端口号  或者 lsof -i tcp:端口号
*   kill 杀死占用端口的进程
* */

//第十一节: CSS进阶: Less文件的打包和分离
/*
* 1.Less是一门预处理语言，扩展了CSS语言，增加了Mixin，变量，函数等特性，使CSS更易维护和拓展，
* 简言之就是给CSS语言加入了编程机制
* 2.安装: less 和 less-loader
* 3.总结:
*   webpack是打包过程，webpack-dev-server是本地热更新也打包了
* */

//第十二节: CSS进阶: SASS文件的打包和分离
/*
* 1.需要的包: node-sass 和 sass-loader
* 2.需要新安装node-sass，因为sass-loader依赖于node-sass，[被依赖的要先安装]
* 3.[后面学一下Less 和 Sass语言]
* 4.SCSS是Sass和CSS过渡的语言，其实是Sass的新语法形式，书写形式和CSS很像。
* 5.总结:
*   webpack 命令 也是就是打包操作，webpack-dev-server是打包热更新操作
*   webpack就是把css和JS打包进了一个文件，这样下去，一个文件超大怎么办？[❤️]
* */

//第十三节 CSS进阶: 自动处理CSS3属性前缀(卡住了)
/*
* 1.需要postcss-loader给CSS3自动添加前缀 和 autoprefixer(自动添加前缀的插件)
* 2.在项目根目录新建 postcss.config.js 文件
* 3.[webpack版本的不同，真是会出现不同的问题啊]
* */

//第十四节 CSS进阶: 消除未使用的CSS
/*
* 1.需要插件 PurifyCSS-webpack purify-css [安装并需要在webpack.config.js里面引入
*   和配合extract-text-webpack-plugin插件使用]
* 2. -D 是 --save-dev的简写
* */

//第十五节 给webpack增加babel支持
/*
* 1.需要 babel-core babel-loader babel-preset-es2015 babel-preset-react
* 2.需要新建 .babelrc 文件放置babel配置文件
* */

//第十六节 打包后如何调试(没体会到作用，等后面实际开发中再说)
/*
* 1.webpack提供了四种调试方式
*   a.source-map
*   b.cheap-module-source-map
*   c.eval-module-source-map
*   d.cheap-eval-module-source-map
* 2.其实一直在使用Node，webpack的使用核心是webpack.config.js的配置，一次配置，处处可复制。
* */

//第十七节 实战技巧: 开发和生产并行设置
/*
* 1.开发依赖: devDependencies
*   生产依赖: dependencies
* 2.安装: --save 是生产环境需要依赖的包    --save-dev 是开发环境需要依赖的包
* 3.npm install 是安装开发环境需要依赖的所有包
*   npm install --production 是安装生产环境需要依赖的包
* 4.配置生产和开发并行: (命令设置)
*   "dev": "set type=dev&webpack"
*   "build": "set type=build&webpack"
* 5.修改webpack.config.js的配置
*   if(process.env.type== "build"){
        var website={
            publicPath:"http://192.168.0.104:1717/"
        }
    }else{
        var website={
            publicPath:"http://cdn.jspang.com/"
        }
    }
  6.Mac下 set 要换成 export;并且是&& (2个)
* */

//第十八节 实战技巧: webpack模块化配置
/*
* 1.module.exports = ... 模块化输出    require() 引入模块
*   重点: exports 有s。
* */

//第十九节 实战技巧: 优雅打包第三方类库
/*
* 1.npm install jquery --save ，然后在需要引入的地方 import $ form 'jquery'
*   (任意想引入的文件都可以)
* 2.plugin方式(这是一种全局性的方式): 需要ProvidePlugin，它是webpack自带的插件，
*   所以要在webpack.config.js里引入webpack
*   eg:
*   const webpack = require('webpack');
*   插件部分的配置: new webpack.ProvidePlugin({
*       $: "jquery"
*   })
* 3.Vue-cli是Vue自己的webpack框架
* */

//第二十节 实战技巧: watch的正确使用方法
/*
* 1.在webpack.config.js中配置watchOptions选项
*   poll: 1000 是检测修改时间
*   aggregeateTimeout: 500 是重复按键时间
*   ignored: /node_modules/ 是忽略检测的文件
* 2.命令: webpack --watch
* 3.自动写 备注插件 BannerPlugin 是webpack自带的
*   eg: 在plugins选项中 new webpack.BannerPlugin('neil 版权所有')
* */

//第二十一节 实战技巧: webpack优化黑技能
/*
* 1.引入第三方类库时，ProvidePlugin是按需打包所需的第三方类库，不需要就不打包，
*   而import方法，则是都要打包的。所以一般情况下，使用插件的形式进行引入。
* 2.抽离第三方类库，分3步走:
*   a.安装 --save
*   b.修改入口文件
*     jquery: 'jquery'
*     vue: 'vue'
*   c.修改CommonsChunkPlugin配置
*     name: ['jquery','vue']
*     filename: 'assets/js/[name].js'
*     minChunk: 2
* 3.抽离第三方类库需要 optimize 插件(是webpack自带的)
*   eg: new webpack.optimize.CommonsChunkPlugin({ })
* */

//第二十二节 实战技巧: 静态资源集中输出
/*
* 1.需要copy-webpack-plugin 插件
* 2.它就是一个复制的插件，把目标文件复制到另一个文件夹下
*   在webpack.config.js的plugins选项下
*   new copyWebpackPlugin([{
*       from: __dirname + '/src',
*       to: './public'
*   }])
*   to就复制到dist文件根目录下了
* */

//第二十三节 实战技巧: Json配置文件的使用
/*
* 1.在入口文件 entry.js 里面引入 eg: var json = require('../config.json');
* 2.启动热更新: 使用 HotModuleReplacementPlugin 插件(webpack自带的)
* */

//第二十四节 总结语
/*
* 1.再接再厉，日日精进。
* */