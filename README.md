# Front-End-Interview

前端经典面试题集锦

1，HTTP 协议
2，性能问题 http://www.cnblogs.com/dojo-lzz/p/4591446.html
    减少HTTP请求
     减少图片资源的请求：
     雪碧图，内联图片，icon font
     减少脚本文件和样式文件的请求: 压缩合并文件，按需加载文件。
    页面内部优化
     样式文件放在头部，脚本文件放在底部，去除没用脚本，利用 async/defer 提高脚本并行加载速度， console.time,console.tiomEnd
    启用缓存
    减少下载量
     启用Gzip
    网络连接上的优化
    CDN, DNS, 减少重定向
3，安全问题：
  3.1 XSS(跨站脚本攻击http://blog.csdn.net/ghsau/article/details/17027893)
    XSS：跨站脚本攻击
    它允许用户将恶意代码植入到提供给其他用户使用的页面中，可以简单的理解为一种javascript代码注入。
    XSS的防御措施：
    过滤转义输入输出
    避免使用 eval、 newFunction等执行字符串的方法，除非确定字符串和用户输入无关
    使用cookie的httpOnly属性，加上了这个属性的cookie字段，js是无法进行读写的
    使用innerHTML、document.write的时候，如果数据是用户输入的，那么需要对象关键字符进行过滤与转义
  3.2 CSRF（Cross-site request forgery），中文名称：跨站请求伪造 http://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html
    其实就是网站中的一些提交行为，被黑客利用，在你访问黑客的网站的时候进行操作，会被操作到其他网站上
    CRSF防御措施：
    检测http referer是否是同域名
    避免登录的session长时间存储在客户端中
    关键请求使用验证码或者token机制
    
4，跨域问题
5，BFC
 块级格式化上下文
 BFC 生成的方法：
 1，float 不为none
 2, display 为inline-block , table-cell, table-caption
 3, position : fixed, absolute
 4, overflow:不为visible,
 BFC 约束规则:
   内部的Box会在垂直方向上一个接一个的放置
  垂直方向上的距离由margin决定。（完整的说法是：属于同一个BFC的两个相邻Box的margin会发生重叠，与方向无关。）
  每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以    超出他的包含块边界）
  BFC的区域不会与float的元素区域重叠
  计算BFC的高度时，浮动子元素也参与计算
  BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然
 BFC 应用：
 1， BFC 消除Margin 塌陷
 2， BFC 里面的float 元素，也参与高度的计算， 所以可以消除Float元素的高度塌陷问题
 3， BFC 不会覆盖相邻的Float元素，可以实现多栏布局
 
 BFC兼容： 
 IE 有个haslayout 与BFC的功能类似，用zoom： 1 可以实现触发haslayout
 
6，垂直居中
7，ES6
8，设计模式
9，构建工具
10，React
11，Angular
12，Vue
13, 盒子模型  http://www.toutiao.com/i6192083023846539777/
14，Javascript事件总结
15，Node js , Express, Koa, Mongodb
16,浏览器缓存
17， React 构建组件的几种方式
18，虚拟Dom 元素
19, margin 塌陷 http://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html
 折叠的结果：
两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
两个外边距一正一负时，折叠结果是两者的相加的和。
产生折叠的必备条件：margin必须是邻接的!

折叠产生的条件：
而根据w3c规范，两个margin是邻接的必须满足以下条件：

必须是处于常规文档流（非float和绝对定位）的块级盒子,并且处于同一个BFC当中。
没有线盒，没有空隙（clearance，下面会讲到），没有padding和border将他们分隔开
都属于垂直方向上相邻的外边距，可以是下面任意一种情况
元素的margin-top与其第一个常规文档流的子元素的margin-top
元素的margin-bottom与其下一个常规文档流的兄弟元素的margin-top
height为auto的元素的margin-bottom与其最后一个常规文档流的子元素的margin-bottom
高度为0并且最小高度也为0，不包含常规文档流的子元素，并且自身没有建立新的BFC的元素的margin-top和margin-bottom

消除折叠的方式：
创建了新的BFC的元素（例如浮动元素或者'overflow'值为'visible'以外的元素）与它的子元素的外边距不会折叠
浮动元素不与任何元素的外边距产生折叠（包括其父元素和子元素）
绝对定位元素不与任何元素的外边距产生折叠
inline-block元素不与任何元素的外边距产生折叠
一个常规文档流元素的margin-bottom与它下一个常规文档流的兄弟元素的margin-top会产生折叠，除非它们之间存在间隙（clearance）。
一个常规文档流元素的margin-top 与其第一个常规文档流的子元素的margin-top产生折叠，条件为父元素不包含 padding 和 border ，子元素不包含 clearance。
一个 'height' 为 'auto' 并且 'min-height' 为 '0'的常规文档流元素的 margin-bottom 会与其最后一个常规文档流子元素的 margin-bottom 折叠，条件为父元素不包含 padding 和 border ，子元素的 margin-bottom 不与包含 clearance 的 margin-top 折叠。
一个不包含border-top、border-bottom、padding-top、padding-bottom的常规文档流元素，并且其 'height' 为 0 或 'auto'， 'min-height' 为 '0'，其里面也不包含行盒(line box)，其自身的 margin-top 和 margin-bottom 会折叠。
