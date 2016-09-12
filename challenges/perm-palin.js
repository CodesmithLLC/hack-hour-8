/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  var data = str.split('');
  var permutations = [],
  stack = [],
  output = false; //default output 

  function doPerm() {
    if (data.length == 0) {
      permutations.push(stack.slice());
    }
    for (var i = 0; i < data.length; i++) {
      var character = data.splice(i, 1);
      stack.push(character);
      doPerm();
      stack.pop();
      data.splice(i, 0, character);
    }
  }

  doPerm();
  for(var i = 0; i < permutations.length; i++){
  	if(permutations[i].join('') === permutations[i].reverse().join('')) {
  		return output = true;
  	}
  }

  return output;

}

module.exports = permPalin;