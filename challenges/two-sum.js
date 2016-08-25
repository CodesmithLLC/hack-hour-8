/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  var t = {};
  for (var i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (t[n - key]) return true;
    else {
      t[key] = 1;
    }
  }
  return false;
}

module.exports = twoSum;
