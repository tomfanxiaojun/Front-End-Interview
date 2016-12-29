'use strict'
var testFoo = function(time, value) {
	return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(value);
    }, time * 1000);
  });
};
var tasks = {
  task1: function() {
    return testFoo(11, 2);
  },
  task2: function() {
    return testFoo(1.3, 3);
  },
  task3: function() {
    return testFoo(1.5, 1);
  }
};
var main = function() {
  return Promise.race([tasks.task1(), tasks.task2(), tasks.task3()]);
}
main().then(function(result) {
  console.log(result);
});