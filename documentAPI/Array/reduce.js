/*
reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。
 */

function maxValue(arr) {

    return arr.reduce((a, b) => {
        return a > b ? a : b;
    })
}

console.log(maxValue([1, 8, 22, 3, 7, 9]))

function sum(arr) {
    return arr.reduce((a, b) => {
        return a + b;
    })
}
console.log(sum([1, 8, 22, 3, 7, 9]))

function combinArray(arr) {
   return arr.reduce(function(a, b) {
        return a.concat(b);
    });
}
console.log(combinArray([[0, 1], [2, 3], [4, 5]]))

