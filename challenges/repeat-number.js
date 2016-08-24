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
//store array values into an object, if key exists in object, return key
var storage = {};
var repeatedNum;
for(var i = 0; i < array.length; i++){
  if(storage[array[i]]) repeatedNum = array[i]
  else storage[array[i]] = 1
}
return repeatedNum;
}

module.exports = repeatNumbers;

console.log(repeatNumbers([1,2,3,4,5,6,7,8,8]));
