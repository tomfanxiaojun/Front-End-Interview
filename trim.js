/*
25.写一个function，清除字符串前后的空格。（兼容所有浏览器）
 */
String.prototype.trimN = function() {
    return this.replace(/^\s+/m, '').replace(/\s+$/m, '');
}
var str = ' ba c f ';
console.log(str.length);
str = str.trimN();
console.log(str);
console.log(str.length);

var selector1=".cffssdd";
var reg = /^(#)?(\.)?(\w+)$/img;
var regResult = reg.exec(selector1);
console.log(regResult)
