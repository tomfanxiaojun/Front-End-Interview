// https://juejin.im/post/59aa71d56fb9a0248d24fae3
var name = 'window'

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => console.log(this.name),
  show3: function () {
    return function () {
      console.log(this.name)
    }
  },
  show4: function () {
    return () => console.log(this.name)
  }
}
person1.show3()() // person1
person1.show3().call(person2) // person2
person1.show3.call(person2)() // person2


var person2 = { name: 'person2' }

person1.show1() // person1
person1.show1.call(person2) // person2

person1.show2() // window
person1.show2.call(person2) // window

person1.show3()() // person1
person1.show3().call(person2) // person2
person1.show3.call(person2)() // person2

person1.show4()() // person1
person1.show4().call(person2) // person1
person1.show4.call(person2)() // person2