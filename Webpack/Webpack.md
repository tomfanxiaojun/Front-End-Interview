# Webpack
## dev(webpack.dev.conf.js)
### webpack-dev-server
* 开发环境启动一个server
* npm script
    * webpack-dev-server --inline --progress  --config build/webpack.dev.conf.js
### devtool
###   devServer
* contentBase
    * 服务启动的文件内容的路径
* host
    * 启动的主机，默认是localhost
* port
    * server 的端口号
        * process.env.PORT
        * config.dev.port
        * portfinder 通过这个库来生成一个可用的端口号
            * Demo
             * > module.exports = new Promise((resolve, reject) => {
             * >   portfinder.basePort = process.env.PORT || config.dev.port
             * >   portfinder.getPort((err, port) => {
             * >     if (err) {
             * >       reject(err)
             * >     } else {
             * >       // publish the new Port, necessary for e2e tests
             * >       process.env.PORT = port
             * >       // add port to devServer config
             * >       devWebpackConfig.devServer.port = port
             * > 
             * >       // Add FriendlyErrorsPlugin
             * >       devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
             * >         compilationSuccessInfo: {
             * >           messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`]
             * >         },
             * >         onErrors: config.dev.notifyOnErrors
             * >         ? utils.createNotifierCallback()
             * >         : undefined
             * >       }))
             * > 
             * >       resolve(devWebpackConfig)
             * >     }
             * >   })
             * > })

* open
    * true: 自动打开浏览器，并且打开页面
* openPage
    * 在浏览器自动打开时，打开一个指定的页面
* hot
    * true: 启动热更新
        * 1， 设置: hot: true
        * 2, 配置webpack 自带的热更新插件new webpack.HotModuleReplacementPlugin()
        * 3, 在项目主文件中添加: if(module.hot) {module.hot.accept();}
    * 热更新，不是刷新页面，devSever 默认文件改变就会刷新页面, 表示变量值进行了修改，但是不刷新页面， 也会直接修改成功。
* setup
    * devServer 内置了一个express 服务器，可以在这里自定义中间件 
     * > setup(app){
     * >   app.get('/some/path', function(req, res) {
     * >     res.json({ custom: 'response' });
     * >   });
     * > }

* publicPath
    * 这个路径下的文件，可以在浏览器中访问
        * publicPath: "/assets/"
            * 则可以在浏览器中直接访问http://localhost:8080/assets/bundle.js
        * 路径必须以斜杠/ 开头和结尾
* public
* proxy
    * 用来解决跨域问题
        * demo:
            * proxy: {
  "/api": "http://localhost:3000"
}
                * 请求到/api/users将会被代理到: http://localhost:3000/api/users
            * proxy: {
  "/api": {
    target: "http://localhost:3000",
    pathRewrite: {"^/api" : ""}
  }
}
                * 如果想请求:http://localhost:3000/api/users , 直接调用/users
* quiet
    * 用来控制信息输出，如果设置true,则意味着来自webpack 的错误信息和警告信息都不会在控制台显示
* watchOptions
    * 监视文件系统的变更，可以获取文件改变的通知
        * aggregateTimeout
        * ignored
            * 不监听的文件，可以用正则表达式
                * ignored: /node_modules/
                * ignored: "files/**/*.js"
        * poll
            * 值为true 或者一个数值（毫秒为单位）
* progress 
    * 这个参数只能用于命令行，不能用于配置文件，webpack-dev-server --progress， 将运行的进度输出到控制台
* overlay
    * 当脚本存在编译错误时， 在浏览器显示全屏，覆盖之前的的内容， 默认是关闭的
     * > overlay: {
     * >   warnings: true,
     * >   errors: true
     * > }

* compress
    * 是否启用gzip 压缩，可以使用于命令行webpack-dev-server --compress
* clientLogLevel
*     historyApiFallback
    * 任何的404 相应都需要被替代为index.html
        * 可以启动rewrites 配置，进行更精细的控制，在不同的路由下出现404， 跳转到不同的页面
         * > historyApiFallback: {
         * >   rewrites: [
         * >     { from: /^\/$/, to: '/views/landing.html' },
         * >     { from: /^\/subpage/, to: '/views/subpage.html' },
         * >     { from: /./, to: '/views/404.html' }
         * >   ]
         * > }

* headers 
    * 在所有的请求的响应中添加首部内容headers: {
  "X-Custom-Foo": "bar"
}
* https
    * 默认情况下devServer 启动的是http 服务，而不是https, 设置https: true 或者是一个自定义对象
     * > https: {
     * >   key: fs.readFileSync("/path/to/server.key"),
     * >   cert: fs.readFileSync("/path/to/server.crt"),
     * >   ca: fs.readFileSync("/path/to/ca.pem"),
     * > }

* lazy 
    * 惰性模式，webpack 不会监听文件，只有在请求是采取编译包
## build(webpack.prod.conf.js)
### 直接用webpack api 构建
* npm script
    * node build/build.js
## base configuration(webpack.base.conf.js)
### dev 和build 继承于这个基本的配置文件
* webpack-merge（merge）
    * 利用merge 合并base conf 和不同环境相应特殊的配置
    * mrege(baseWebpackConfig, {// 不同环境特殊的配置})
    * 基本的配置
        * context
            * 配置基础目录， 一个绝对路径，用于从配置中解析入口起点(entry)和loader
                * context: path.resolve(__dirname, '../')
                 * > 配置的entry 的对应的文件，都是基于这个路径去查找的

        * entry
            * 配置入口文件
                * 单入口文件
                    * ｛main: './main.js'｝
                * 多入口文件
                    * {home: './home.js', about: './about.js'
                * 动态入口
                    * entry: () => new Promise((resolve) => resolve(['./demo', './demo2']))
        * output
            * path
                * 编译后输出文件保存的路径
            * filename
                * 编译后的文件名称
                    * [name].bundle.js
                        * name: 使用的是入口文件名称,也就是entry 对象中的key 
                    * [id].bundle.js
                        * id: 使用的是内部的chunk id
                    * [name].[hash].bundle.js
                        * hash：每次构建过程中生成了唯一的hash 值（205199ab45963f6a62ec）
                    * [chunkhash].bundle.js
            * hashFunction
                * 生成hash值指定的规则函数
                    * 默认是md5
                    * hashFunction: require('metrohash').MetroHash64
            * publicPath
        * resolve(解析)
            * extensions
                * 自动解析确定的扩展
                    * 默认值是: ['.js', '.json']
                    * ['.js', '.vue', '.json'
                        * 添加了对Vue 文件的识别
            * alias
                * 对模块进行重命名，便于简单调用
                    * ｛‘vue$’: 'vue/dist/vue.esm.js','@': path.join(__dirname, '../src' ,'$': './src/jquery.js'｝
                        * 如果要引用../src/components/Layout file, 可以直接简洁的写成: import Layout from '@/components/Layout'
        * module
            * rules(rules 是一个数组，每个元素都有个对应的匹配的规则)
                * test
                    * 一个正则表达式,用来匹配对应的文件
                    * test: /\.vue$/ 
                        * 匹配.vue为后缀的文件
                    * test: /\.(png|jpe?g|gif|svg)(\?.*)?$/
                        * 匹配图片资源
                * include
                    * 是一个数组， 如果配置该属性，则test 正则只适用对应的目录下的文件
                * exclude
                    * 是一个数组， 如果配置该属性， 则text 正则不适用对应文件夹下的文件
                * use
                    * 对应的配置是一个数组， 如; user: ['style-loader', 'css-loader', 'less-loader']
                    * 数组里面的元素可以是一个字符串，则表示使用对应的名称的loader, 也可以是一个对象， 则是对对应的loader 进行相应的配置， 如: user: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}} , {loader: 'less-loader', options: {noIeCompat: tre}}]
                * loader
                    * loader 是user: [loader: '.vue-loader']的简写: loader: 'vue-loader'
                * loaders
                    * 由于要支持use, 所以改属性已经删除
                * options
                    * rules 里面的options 其实对应就是use 中每个loader 的简写
            * 1， loader 是针对匹配的资源，用相应的loader 进行编译 2， 如果一个rules 应用多个loader , 则执行从右边到左边。
                * 常用的loader
                    * 跟js 有关的loader
                        * babel-loader
                    * 跟框架有关的loader
                        * vue-loader
                    * 跟css有关的loader
                        * less-loader
                        * sass-loader
                        * stylus-loader
                        * css-loader
                        * style-loader
                        * postcss-loader
                            * 使用postcss-loader 和 autoprefixer 给css3 添加前缀
                             * > 1, 在项目路径下面创建: postcss.config.js
                             * > module.exports = {
                             * >     plugins : [
                             * >         require('autoprefixer')({
                             * >             browsers : ['last 5 versions']
                             * >         })
                             * >     ]
                             * > }
                             * > 2, 
                             * >         {
                             * >                 test: /\.css$/,
                             * >                 exclude: /(node_modules)/,
                             * >                 use: [ 
                             * >                     'style-loader', {
                             * >                         loader : 'css-loader',
                             * >                         options : {
                             * >                             importLoaders : 1
                             * >                         },
                             * >                     },
                             * >                     'postcss-loader'
                             * >                 ]
                             * >             }

                        * demo
                         * > {
                         * >               test: /\.less$/,
                         * >               use: 		            ExtractTextPlugin.extract({
                         * >                   fallback: 'style-loader',
                         * >                   use: [
                         * >                   'css-loader',
                         * >                   'less-loader'
                         * >                   ]
                         * >               })
                         * >           },
                         * >  plugins：[
                         * >       new ExtractTextPlugin('[name].css'),  //[name] 默认  也可以自定义name  声明使用
                         * >    ]

                        * Summary: 编译css 预编译文件
                    * 跟html有关的loader
                        * html-loader
                        * ejs-loader
                    * 跟资源有关的loader
                        * url-loader
                            *    options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].
         [ext]')
  }
                            * 1， 当文件大小小于limit(kb)时， 会将文件转换成DataURL
                            * 2, 当文件大小大于limit(kb) 时， 会调用file-loader 处理
                        * file-loader
                            * 主要是解决项目中引用url的问题
                             * > {
                             * >                 test: /\.(png|gif|jpg|svg|jpeg)$/i,
                             * >                 use: {
                             * >                     loader: 'file-loader',
                             * >                     query : {
                             * >                         name : 'assets/[hash].[ext]'
                             * >                     }
                             * >                 }
                             * >             }

        * plugins
            * 插件是Webpack 的支柱功能，解决loader 无法解决的其他事情
            * 是一个具有apply 属性的JavaScript 的对象, apply 属性会被Webpack compiler 调用，并且compiler 对象在整个周期访问
                * demo
                 * > const pluginName ='FirstPlugin';
                 * > class FirstPlugin {
                 * > 	apply (compiler){
                 * > 		compiler.hooks.run.tab(pluginName, comilation => {console.log('webpack build begin'))})
                 * > 	}
                 * > }

            * 多页面配置
                * 1， 在entry 中配置多个入口文件
                * 2，利用HtmlWebpackPlugin 配置多个页面，也就是多个HtmlWebpackPlugin 的插件
                 * > plugins: [
                 * >         new HtmlWebpackPlugin({
                 * >             template: './src/index.html',   
                 * >             filename: 'index.html',
                 * >             chunks: ['index']   // 对应关系,index.js对应的是index.html
                 * >         }),
                 * >         new HtmlWebpackPlugin({
                 * >             template: './src/login.html',
                 * >             filename: 'login.html',
                 * >             chunks: ['login']   // 对应关系,login.js对应的是login.html
                 * >         })
                 * >     ]

            * 常用插件
                * DefinePlugin
                    * 可以在编译是配置全局变量， 对于开发模式和发布模式，有不同的行为非常有用
                        *     new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')，
      'SERVICE_URL': JSON.stringify("http://dev.example.com")}),
                        *    new webpack.DefinePlugin({
      'process.env': env
    }),
                * EnvironmentPlugin
                    * 是通过DefinePlugin 来设置process.env 的
                    * 接收的是一个数组， 如: new webpack.EnvirnmentPlugin(['NODE_ENV', 'DEBUG'])
                    * 上面写法等同于：new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
})
                * DllPlugin
                * HtmlWebpackPlugin
                    * 会将js 注入到html 页面， 可以指定对应的chunks
                    * 如果是多页面应用，可以引用多个Plugin
                    *    template: './src/index.html',   
   filename: 'index.html',
   chunks: ['index']  , inject
                * ExtractTextWebpackPlugin
                    * 会将所有的chunk 中的css ，移动到一个单独分离的css 文件， css 不再嵌套到bundle中
                    * 多个实例的demo
                     * > const ExtractTextPlugin = require('extract-text-webpack-plugin');
                     * > 
                     * > // 创建多个实例
                     * > const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
                     * > const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');
                     * > 
                     * > module.exports = {
                     * >   module: {
                     * >     rules: [
                     * >       {
                     * >         test: /\.css$/,
                     * >         use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
                     * >       },
                     * >       {
                     * >         test: /\.less$/i,
                     * >         use: extractLESS.extract([ 'css-loader', 'less-loader' ])
                     * >       },
                     * >     ]
                     * >   },
                     * >   plugins: [
                     * >     extractCSS,
                     * >     extractLESS
                     * >   ]
                     * > };

                    * 配置为对象的
                     * > new ExtractTextPlugin({
                     * >     filename:  (getPath) => {
                     * >       return getPath('css/[name].css').replace('css/js', 'css');
                     * >     },
                     * >     allChunks: true
                     * >   })

                        * use
                        * fallback
                        * publicPath
                        * filename
                        * allChunks
                * CopyWebpackPlugin
                    * 复制相应的文件到对应的路径，主要是对静态资源的处理
                    *     new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
                * clean-webpack-plugin
                    * new CleanWebpackPlugin(['dist'])
                * UglifyJsPlugin
                    * 对js 脚本进行压缩， 一般用在production 环境
                    * test
                    * include
                    * parallel
                    * sourceMap
                    * uglifyOptions
                * OptimizeCSSPlugin
                    * 优化和压缩CSS资源
                    * new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      canPrint: true
    })
                * optimize
                    * ModuleConcatenationPlugin
                    * CommonsChunkPlugin
                        * 将公共的模块拆分出来， 最终合成的文件在系统中只需要加载一次， 以便于缓存
                        *     new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),2
                        *     new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),
                * CompressionWebpackPlugin
                * FaviconsWebpackPlugin
                * FriendlyErrorsWebpackPlugin
                * HotModuleReplacementPlugin
                * NamedModulesPlugin
                * NoEmitOnErrorsPlugin
                * ProvidePlugin
                * BannerPlugin
                    * 为每个chunk 添加一个头部banner
        * node

*XMind: ZEN - Trial Version*