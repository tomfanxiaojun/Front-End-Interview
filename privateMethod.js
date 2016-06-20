var QQ = (function() {
	// 构造函数
    var _qq = function(qqNum) {
        this._qqNum = qqNum;
        return this;
    }
    //原型链，定义一些实例化对象方法
    _qq.prototype = {
        constructor: _qq,
        init: function() {
            var info=getQQInfoByQQNum(this._qqNum);
            this._qqName=info.name;
            return info;
        }
    }
    // 定义静态方法
    _qq.staticMethod=function(){
    	console.log('This is a static method.');
    }
    //定义私有方法
    function getQQInfoByQQNum(qqNum) {
        return {
            id: qqNum,
            name: 'Ivan Fan'
        }
    }
    return _qq;
}())
QQ.staticMethod();
var qq = new QQ('123');
console.log(qq.init());
