'use strict'
function log(str){
	console.log(str);
}
// Math.ceil(x) 返回一个大于或等于数 "x" 的最小整数。
log(Math.ceil(1.1))
//Math.floor(x) 函数返回小于或等于数 "x" 的最大整数。
log(Math.floor(-1.1))
//Math.trunc() 方法会将数字的小数部分去掉，只留整数部分。
log(Math.trunc(-1.1))
// Math.max() 函数返回一组数中的最大值
log(Math.max(1,2-1,88,9))
log(Math.max(...[1,2,-1,88,9]))
log(Math.min(...[1,2,-1,88,9]))
//Math.random()  函数返回 [0-1) 的浮点值伪随机数（大于等于0，小于1）。
log(Math.random())
// 1-100之间的随机数
log(Math.floor((Math.random()*100)))