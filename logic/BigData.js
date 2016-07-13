 /*
  实现两个超出整数存储范围的两个大整数相加 function add(a,b);
  Tencent
 */
 var a = "1235955";
 var b = "789";

 function add(a, b) {
     // 现将参数转换成String
     a = a + '';
     b = b + '';
     // 取得最大数据的长度
     var maxLen = a.length > b.length ? a.length : b.length;
     var gapLen = 0;
     // 填充较小数的高数位为：0
     if (a.length < maxLen) {
         gapLen = maxLen - a.length;
         for (var i = 0; i < gapLen; i++) {
             a = '0' + a;
         }
     } else if (b.length < maxLen) {
         gapLen = maxLen - b.length;
         for (var i = 0; i < gapLen; i++) {
             b = '0' + b;
         }
     }
     // 拆分字符串成数组，并且反转
     var aArr = a.split('').reverse();
     var bArr = b.split('').reverse();
     // 最终的输出结果字符数组
     var result = [];
     //用来保存最大位的数据和是否大于10的标记
     var maxLevel = 0;
     aArr.forEach(function(e, index) {
         var tempResult = (+e) + (+bArr[index]);
         if (tempResult >= 10) {
             tempResult = tempResult + '';
             result.push(tempResult.substr(1, 1));
             if (index >= maxLen - 1) {
                 result.push()
                 maxLevel = 1;
             } else {
                 aArr[index + 1] = ((+aArr[index + 1]) + 1) + '';
             }
         } else {
             result.push(tempResult)
         }

     });
     
     result.reverse();
     if (maxLevel > 0) {
         result.unshift(1);
     }
     return result.join('');
 }

 console.log(add(a, b));
