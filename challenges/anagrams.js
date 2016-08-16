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
  if (typeof string !== 'string' || string.length === 0) return false;

  const len = string.length;
  const res = [];
  const stringRes = '';
  let i;
  let j;
  const letters = string.split('');

  const helper = (len, str) => {
    if (len === 0) {
      return stringRes.concat(str);
    }

    for (i = 0; i < len; i++) {
      helper(len - 1, str.concat(str));
    }
  };

  for (j = 0; j < letters.length; j++) {
    res.push(helper(len, letters[j]));
  }

  return res;
}

module.exports = anagrams;
