### 用CSS画皮卡丘实战。
#### 重要练习的还是less的使用，自从在webpack上用过less之后，沉迷于它简洁的嵌套规则中无法自拔。
#### 那么在日常的规则开发中，如何在开发阶段使用它呢？

```
在页面中加入 .less 样式表的链接，并将 rel 属性设置为 "stylesheet/less"：
<link rel="stylesheet/less" type="text/css" href="styles.less" />
接下来，下载 less.js 并通过 <script></script> 标签将其引入，放置于页面的 <head> 元素内：
<script src="less.js" type="text/javascript"></script>
```
### 重要的一点，引入后需要开启本地服务器
#### 开发调试之后，`less style.less styles.css` 改写下html中的文件引入位置。完毕
---
#### 这个练习之后，所有简单的弧线均可通过border-radius实现，值得注意的是 :border-top-left-radius: 90px 150px; 可以实现两个方向上长度的控制。另外一个需要灵活运用box-shadow所制造出的阴影。

[预览链接](https://chenshangshuo.github.io/works/Css3/demo5/index.html)
