'use strict'
/*
19.用js实现随机选取10--100之间的10个数字，存入一个数组，并排序。
 */
function randomFunc(start, end) {
    let v = Math.floor(Math.random() * end);
    return v < 10 ? (v + start) : v;
}

function getRandomArray(count, start, end) {
    let arr=[];
    for (let i = 0; i < count; i++) {
        arr.push(randomFunc(start, end))
    }
    return arr;
}
let arr=getRandomArray(10,10,100);
arr.sort(function(a,b,index){
	return a-b;
})
console.log(arr)
