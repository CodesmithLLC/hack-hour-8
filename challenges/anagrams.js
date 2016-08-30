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
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    let left = string.slice(0, i);
    let right = string.slice(i + 1, string.length);

    let extra = right + left;
    result.push(current + extra);

    for (let n = 1; n < extra.length; n++) {
      let curr = extra[n];
      let prev = extra.slice(0, n);
      let next = extra.slice(i + 1, string.length);

      result.push(current + curr)
    }
  }

  console.log(result);
}

module.exports = anagrams;
