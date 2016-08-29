//http://www.infoq.com/cn/articles/es6-in-depth-iterators-and-the-for-of-loop
'use strict'
let myArray = [1, 2, 3];
/**
 * for in is a bad way to traverse array
 * for-in循环用来遍历对象属性。
 * @param  {[type]} let index         in myArray [description]
 * @return {[type]}     [description]
 */
for (let index in myArray) {
    console.log(`typeof index ${typeof index},value:${myArray[index]}`)
}

/**
 * ES6 for of
 * for-of循环用来遍历数据—例如数组中的值。
 */
for (let index of myArray) {
    console.log(`typeof index ${typeof index},value:${myArray[index]}`)
}
