### 利用webpack打包之前的项目
### 中途遇到些问题，万幸这些坑stackoverflow上都有人帮我踩过
#### 打包过程中，jQ中的有些版本可能会和一些脚本中这样的代码发生冲突，如：`$(window).load(function(){})`
#### 改写成`$(window).on('load',function(){})`
