'use strict'
/*

 */
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
console.log('i='+i)
/*
闭包的处理方式，返回一个函数
 */
var b=[];
for(var i=0;i<10;i++){
	b[i]=(function(a){
		return function(){
			console.log(a);
		}
		
	})(i);
}
b[6]();
console.log('i='+i)
/*
Let 局部变量的处理
1,不存在变量提升
2,暂时性死区：只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
3,不能重复声明
 */
let c=[];
for(let i=0;i<10;i++){
	c[i]=function(){
		console.log(i);
	}
}
c[6]();
console.log('i='+i)