'use strict'
/*
splice() 方法用新元素替换旧元素，以此修改数组的内容。
array.splice(start, deleteCount[, item1[, item2[, ...]]])
可以实现在指定的位置插入元素
1,删除元素
2,在指定地方插入元素
 */
let myFish = ["angel", "clown", "mandarin", "surgeon"];

//从第 2 位开始删除 0 个元素，插入 "drum"
var removed = myFish.splice(2, 0, "drum");