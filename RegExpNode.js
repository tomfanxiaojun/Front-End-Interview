//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
/*
	
（点号，小数点）匹配任意单个字符，但是换行符除外，包括：\n \r \u2028 或 \u2029。

需要注意的是，m 多行（multiline）标志不会改变点号的表现。因此为了匹配多行中的字符集，可使用[^] 
（当然你不是打算用在旧版本 IE 中），它将会匹配任意字符，包括换行符。

例如，/.y/ 匹配 "yes make my day" 中的 "my" 和 "ay"，但是不匹配 "yes"。
*/
var str='yes make my sy day';
var myRe = /.y/g;
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = 'Found ' + myArray[0] + ', ';
  msg += 'Next match starts at ' + myRe.lastIndex;//lastIndex	下一次匹配开始的位置  
  console.log(msg);
}
/*	
\d
匹配基本拉丁字母表（basic Latin alphabet）中的一个数字字符。等价于[0-9]。

例如，/\d/ 或 /[0-9]/ 匹配 "B2 is the suite number." 中的 '2'。 
*/
var str="B2 is the suite number.";
console.log(/\d/.test(str));
/*	
\D
匹配任意一个不是基本拉丁字母表中数字的字符。等价于[^0-9]。

例如，/\D/ 或 /[^0-9]/ 匹配 "B2 is the suite number." 中的 'B'。
*/
var str="B2 is the suite number.";
console.log(/\D/.test(str));
/*	
\w	
匹配任意来自基本拉丁字母表中的字母数字字符，还包括下划线。等价于 [A-Za-z0-9_]。

例如，/\w/ 匹配 "apple" 中的 'a'，"$5.28" 中的 '5' 和 "3D" 中的 '3'。
*/
var str="apple";
console.log(/\w/.test(str));