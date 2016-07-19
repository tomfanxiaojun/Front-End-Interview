 (function(_person) {
     if (!_person) {
         _person = function(name, age) {
             this.name = name;
             this.age = age;
         }
     }
     _person.prototype.getName = function() {
         console.log(`My name is ${this.name}`);
     }
     _person.prototype.getAge = function() {
         console.log(`My age is ${this.age}`);
     }
     window.Person = _person;

 })(window.Person);

 (function(_person) {
     if (!_person) {
         _person = function(name, age) {
             this.name = name;
             this.age = age;
         }
     }
     _person.prototype.setName = function(name) {
         this.name = name;
     }
     _person.prototype.setAge = function(age) {
         this.age = aget;
     }
     window.Person = _person;

 })(window.Person)

