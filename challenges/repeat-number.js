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
/*
Approach: so getting the solution with 2 for loops is clear, but no fun. With just 1 loop, push each 
number into an object as a key, check if that key exists in the object, if not, add it, if so, 
you found your repeated num. 
*/
  var obj = {}; 
  for (let i = 0; i < array.length; i++){
    if (obj[array[i]]) return array[i]; 
    obj[array[i]] = array[i]; 
  }
}

module.exports = repeatNumbers;
