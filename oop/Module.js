'use strict'
var Person = (function(_person) {
    _person.getName = function() {
        console.log(`My name is ${this.name}`);
    }
    _person.getAge = function() {
        console.log(`My age is ${this.age}`);
    }
   return _person;

})(this.Person || {})

export  {Person};




