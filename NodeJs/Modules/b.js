console.log('b starting');
exports.done = false;
const a = require('./a.js');
a.foo();
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');