/*
2.如何消除一个数组里面重复的元素？
 */
function delReaptArray(arr) {
    var obj = {};
    var newArr = [];
    arr.forEach(function(a) {
        if (!obj[a]) {
            obj[a] = a;
            newArr.push(a)
        }

    })
    return newArr;
}
var arr = [1, 2, 3, 3, 4, 4, 5, 5, 6, 1, 9, 3, 25, 4];
console.log(delReaptArray(arr))
