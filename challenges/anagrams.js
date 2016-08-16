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

function anagrams(string) {
  var combos = [];
  var stringArr = string.split('');

  permutation(stringArr, []);

  function permutation(begArr,arr) {
  	  if (begArr.length === 0) combos.push(arr.join(''));
  	  for (var i = 0, l = begArr.length; i < l; i++) {
  	    let s = begArr.splice(i,1);
  	    arr.push(s);
  	    permutation(begArr,arr);
  	    arr.pop();
  	    begArr.splice(i,0,s);
  	  }
  	}
  	return combos;
}

module.exports = anagrams;
