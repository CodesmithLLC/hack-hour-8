/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function looper(index, array) {
  if(index > 0) {
  	return array.slice(index).concat(array.slice(0,index));
  }
  return array;
}

function anagrams(string) {
  var output = [];
  var arr = string.split('');
  for(var i = 0; i < arr.length; i++){
  	
  }

}

var result = anagrams('abc');
//console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
console.log(looper(0,['a','b','c']));
console.log(looper(1,['a','b','c']));
console.log(looper(2,['a','b','c']));

module.exports = anagrams;
