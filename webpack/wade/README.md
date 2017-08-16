### 使用webpack打包之前的练习。
#### 中途出了一次bug，一个模块报错，经万能的谷歌后发现在某些版本的JQ下，脚本中的`$(window).load(function(){})`会报错
#### 为避免引起bug，最好写成`$(window).on('load', function(){})`
