/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let t = {};
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    if (t[key]) return array[i]
    else {
      t[key] = 1
    }
  }
  return -1;
}

module.exports = repeatNumbers;
