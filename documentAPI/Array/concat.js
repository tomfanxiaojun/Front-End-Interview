/*
20.把两个数组合并，并删除第二个元素。
 */
let first=['a','b','c'];
let second=['d','e','f','g'];
let result=first.concat(second); 
result.splice(2,1);
console.log(result)
