/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for(var i = 0; i < arr.length; i++){
    var idx = arr.indexOf(n - arr[i]);
    var lastIdx = arr.lastIndexOf(n - arr[i]);
    if((idx > -1 || lastIdx > -1) && (idx != i && lastIdx != i)) return true;
  }
  return false;
}

// var array = [3,6,7,2,9];
// var num = 15;
// console.log(twoSum(array, num));
module.exports = twoSum;
