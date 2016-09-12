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
  const cache = {};

  for (i = 0; i < str.length; i++) {
    if (!cache[str.charAt(i)]) cache[str.charAt(i)] = 0;
    cache[str.charAt(i)] += 1;
  }

  let odd = 0;

  Object.keys(cache).forEach(el => {
    if (cache[el] / 2 !== 1) odd++;
  });

  return odd < 2;
}

module.exports = permPalin;
