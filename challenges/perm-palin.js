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
  let cache = Array.prototype.reduce.call(str,
    (prev, curr) => {
      prev[curr] = ++prev[curr] || 1;
      return prev;
    }, {});

  return Object.keys(cache).filter((ele) => {
    return cache[ele] % 2 !== 0;
  }).length < 2;
}

// console.log(permPalin('babcab')); // => true

module.exports = permPalin;
