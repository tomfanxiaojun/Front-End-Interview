const sum = (a, b) => a + b;

sum(2, 3)
// => 6

const curriedSum = (a) => ((b) => a + b);

console.log(curriedSum(40)(2));
// => 42.

const add2 = curriedSum(2); 
console.log(add2)
// (b) => 2 + b

console.log(add2(10));
// => 12