function* f() {
  for(var i=0; true; i++) {
    //这里，如果next没有传参数过来，reset将一直是undefined
    var reset = yield i;
    console.log(typeof reset)
    if(reset) { i = -1; }
  }
}
var g = f();
g.next(); //{value: 0, done: false}
g.next(); //undefined {value: 1, done: false}
g.next(true); //boolean {value: 0, done: false}

console.log('dddddd');