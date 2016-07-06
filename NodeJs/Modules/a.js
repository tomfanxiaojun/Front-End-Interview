console.log('a starting');
exports.done = false;
exports.foo=function(){
	console.log(`this is a msg from a.js.`);
}
const b = require('./b.js');

console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');