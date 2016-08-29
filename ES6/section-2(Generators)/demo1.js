//http://www.infoq.com/cn/articles/es6-in-depth-generators
'use strict'
function* quips(name){
	yield `你好${name}!`;
	yield `希望你能喜欢这篇介绍ES6的译文`;
	if (name.startWith('x')){
		yield `你的名字${name} 首字母是x,这很酷!`;
	}
	yield `我们下次再见!`;
}

const iter=quips('ivan');
console.log(`typeof ${iter}`);
const step1=iter.next();
console.log(`${step1.value}`)
const step2=iter.next();
console.log(`${step2.value}`)