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
  var letterCount = 0;

// count occurance of each letter and store in an obj.
  var uniq = str.split('').map((letter) => {
    return { count: 1, letter: letter }
  }).reduce((a, b) => {
		a[b.name] = (a[b.name] || 0) + b.count
    return a
  }, {});

// iterate through that object and check if each occurance is even
// if letter's occurance is not even add 1 to the count and continue
// if there is more than one letter's occurance that is odd, return false
// else iterate through entire array and if you get to the end, it means that
// either each letter's occurance was even or that only one odd occurance occured
// either way both would account for a palindrome configuration
  for (let i = 0; i < Object.keys(uniq).length; i++) {
    if (letterCount > 1) return false;
    if (Object.keys(uniq)[i] % 2 !== 0) letterCount += 1;
  }
  return true;
}

module.exports = permPalin;
