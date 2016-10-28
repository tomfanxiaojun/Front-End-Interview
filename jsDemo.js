//http://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651550987&idx=1&sn=f7a84b59de14d0b99d5e12a265d55fd2&scene=21#wechat_redirect
/*
44 个 Javascript 变态题解析 (上)
 */
//
let str='1,988.3'
str=str.replace(/,/gim,'');
console.log(str);
console.log(/^(-?\d+)(\.\d+)?$/.test(str));

let sdate='2016-10-5';
// console.log(/^\d{4}\-\d{1,2}-\d{1,2}$/.test(sdate));

console.log(/^\d{4}[-,/]\d{1,2}[-,/]\d{1,2}$/.test(sdate));

let sdate01='2016/10/5';



console.log(/^\d{4}[-,/]\d{1,2}[-,/]\d{1,2}$/.test(sdate01));


//let s='-1,11---22/44.34'.toUpperCase();
let s='n/a'.toUpperCase();

s=s.replace(/[\,.,\-,/]/gim,'');
console.log(s);
console.log(/^(-?\d+)$/.test(s));


 