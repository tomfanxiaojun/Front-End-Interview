function Foo() {
	console.log('Foo');
    this.value = {age: 42};
}
Foo.prototype = {
    method: function() {}
};

function Bar() {
	console.log('Bar');
}

// 设置Bar的prototype属性为Foo的实例对象
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// 修正Bar.prototype.constructor为Bar本身
Bar.prototype.constructor = Bar;

var t1 = new Bar() // 创建Bar的一个新实例
var t2 = new Bar();
console.log(t1.value);
console.log(t2.value);
t2.value.age =44
console.log(t1.value);
console.log(t2.value);