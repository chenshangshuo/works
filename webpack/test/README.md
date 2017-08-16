### webpack打包示例
webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。
![image.png](http://upload-images.jianshu.io/upload_images/6470442-5ae10eee4fab70a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
1.配置
`npm install webpack -g` 全局安装webpack命令
对应的项目目录下
`npm init  //创建package.json文件` 
`npm install --save-dev webpack `
2.对js、css之类的整理下，以 commonJS 的形式来书写脚本。
其中的一个脚本文件示例
```
	var $ = require('./jquery.min.js')    //require到对应的jQuery文件
	module.exports = function(){   //module.exports导出文件
		function Button1($ct){
			this.$ct = $ct
			this.bind()
		}
		Button1.prototype = {
			bind: function(){
				this.$ct.click(function(){
					$('.box').css({'background': 'red'})
				})
			}
		}
		new Button1($('.button1'))
	}
```
再看看相应的entry.js(入口文件)
```
require('../css/test.css')
var $ = require('./jquery.min.js')
var button1 = require('./button1.js')
var button2 = require('./button2.js')
var button3 = require('./button3.js')
button1()
button2()
button3()
```
入口文件可以require到css文件吗？可以的，需要借助loader 
>Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。

`npm install --save-dev css-loader style-loader` 即可解决该问题
3.创建webpack.config.js
```
const path = require('path');
let base = {
  index:'./src/js/entry.js'   //入口问价
};
module.exports = {
	entry: base,
	output:{
		path: path.resolve(__dirname, './public'),  //绝对路径的形式
		filename:"bundle.js"  //输出的文件名称
	},
	module:{   //加载器配置
		loaders:[
		{test:/\.css$/,loader:'style-loader!css-loader'},  //.css 文件使用 style-loader 和 css-loader 来处理
		]
	}
};
```
4.项目上线后，创建`.gitignore`，如果和`node_modules`同级目录则输入：node_modules。即可隐藏。
