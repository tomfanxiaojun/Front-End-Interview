/*
22.有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，
请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，
将其按key-value形式返回到一个json结构中，如{a:'1', b:'2', c:'', d:'xxx', e:undefined}。
 */

var url = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e';
var pares = url.split('?')[1].split('&');
var result = {};
for (var i = 0; i < pares.length; i++) {
    var temp = pares[i].split('=');
    temp.length > 1 ? (result[temp[0]] = temp[1]) : result[temp[0]] = undefined;
}
console.log(result)
