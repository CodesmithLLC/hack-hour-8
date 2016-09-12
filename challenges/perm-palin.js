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
  const letters = str.split('');
  const letterObj = {};
  const freq = [];
  const isOdd = n => n % 2 !== 0;
  let oddFreq = [];
  let i;
  let item;

  for (i = 0; i < letters.length; i++) {
    if (!letterObj[letters[i]]) letterObj[letters[i]] = 1;
    else if (letterObj[letters[i]]) letterObj[letters[i]] += 1;
  }

  for (item in letterObj) {
    freq.push(letterObj[item]);
  }

  oddFreq = freq.filter(isOdd);

  return oddFreq.length === 1;
}

module.exports = permPalin;
