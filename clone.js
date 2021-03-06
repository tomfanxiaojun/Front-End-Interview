/*
1.实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制
 */
Object.prototype.clone = function() {
    var o = this.constructor === Array ? [] : {};
    for (var e in this) {
        if (this.hasOwnProperty(e)) {
            o[e] = typeof this[e] === 'object' ? this[e].clone() : this[e];
        }

    }
    return o;
}
var s = { name: 'ivan', age: 27, company: {name: 'epam', address: 'shenzhen' } };
var t = s.clone(); 
var sArr=[1,2,3,4,s];
var tArr=sArr.clone();
console.log(tArr)
console.log(sArr)
tArr[0]=99;
console.log(tArr)
console.log(sArr)

 

