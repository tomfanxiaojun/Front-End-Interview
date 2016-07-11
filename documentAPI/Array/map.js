'use strict'
function fuzzyPlural(single) {
  var result = single.replace(/o/g, 'e');  
  if( single === 'kangaroo'){
    result += 'se';
  }
  return result; 
}

var words = ["foot", "goose", "moose", "kangaroo"];
var newWords=words.map(fuzzyPlural);
console.log(words);
console.log(newWords);