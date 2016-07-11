'use strict'
/*
Slice 是浅复制
 */
let arr=[{name:'ivan'},{name:'king'},{name:'anna'}];
let newArr=arr.slice(1,2);
console.log(newArr)
newArr[0].name="new King";
console.log(newArr)
console.log(arr);
/*
slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个数组。你只需将该方法绑定到这个对象上。下述代码中 list 函数中的 arguments 就是一个类数组对象。
 */
function toList(){
	return Array.prototype.slice.call(arguments);
}
console.log(toList(1,2,3,4))