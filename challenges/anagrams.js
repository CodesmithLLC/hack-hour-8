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
  const res = [];
  if (string.length === 1) {
    res.push(string);
    return res;
  }

  res.push(string.slice(-2, string.length));
  res.push(string.slice(-2, string.length).split('').reverse().join(''));

  if (string.length === 2) return res;

  const temp = [...res];
}

module.exports = anagrams;
