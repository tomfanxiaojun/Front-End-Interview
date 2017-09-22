// setTimeout(function(){
// console.log(1);
// }, 0);

// new Promise(function(resolve){
// 	console.log(2)
// 	for (var  i= 0 ; i<10000 ; i++) {
// 		i ==99999 && resolve()
// 	}
// 	console.log(3)
// }).then(function(){
// 	console.log(4)
// })
// console.log(5);

function Foo() {
	getName = function (){
		console.log(1);		
	}
	return this;
}

Foo.getName = function () {
	console.log(2)
}


Foo.prototype.getName = function () {
	console.log(3)
}

var getName = function (){console.log(4);};

// 被覆盖了
function getName(){
	console.log(5)
} 

Foo.getName(); // 2
getName();//4
// Foo().getName();// 1
// Foo().getName()
getName();// 4
new Foo.getName();// 2
new Foo().getName();// 3
new new Foo().getName();//3