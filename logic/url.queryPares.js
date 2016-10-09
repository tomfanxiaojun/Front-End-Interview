/*
22.有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，
请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，
将其按key-value形式返回到一个json结构中，如{a:'1', b:'2', c:'', d:'xxx', e:undefined}。
 */

var url = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e';
var pares = url.split('?')[1].split('&');
var result = {};
for (var i = 0; i < pares.length; i++) {
    var temp = pares[i].split('=');
    temp.length > 1 ? (result[temp[0]] = temp[1]) : result[temp[0]] = undefined;
}
console.log(result);

function queryParem(url) {
    this.url = url;
    this.parms = {};
    getAllPares.call(this);
    // 私有函数
    function getAllPares() {
        let pArr = this.url.split('?').length > 1 ? this.url.split('?')[1] : [];
        if (pArr.length > 0) {
            let tempPs = pArr.split('&');
            tempPs.forEach((e) => {
                let p = e.split('=');
                if (p.length > 1) {
                    this.parms[p[0]] = p[1];
                } else {
                    this.parms[p[0]] = undefined;
                }
            })
        }
    }

}
// queryParem.prototype.getAllPares = 
queryParem.prototype.getParemByName = function(pName) {
    return this.parms[pName];
};

let queryParemObje = new queryParem(url);
console.log(queryParemObje.parms)
console.log('a:' + queryParemObje.getParemByName('a'))
