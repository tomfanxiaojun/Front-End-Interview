'use strict'
function Person (name) {
	this.name=name;	
}

Person.prototype.prefixName = function(arr) {
	let that=this;
	return arr.map(function(c){
		return that.name+'-'+c;
	})
};

let p=new Person('ivan');
let arr=p.prefixName(['a','b','c'])
console.log(...arr)