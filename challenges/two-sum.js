/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  var t = {};
  var key;
  for (var i = 0; i < arr.length; i++) {
    key = arr[i];
    if (t[n - key]) return true;
    else {
      t[key] = 1;
    }
  }
  return false;
}
// console.log('twosum', twoSum([2, 4, 5, 1, -6, -2, 0, 10, 9], -4))
module.exports = twoSum;
