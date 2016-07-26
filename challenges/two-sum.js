/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 2) return false;

  let res = false;
  let i;
  let diff;

  for (i = 0; i < arr.length; i++) {
    diff = n - arr[i];
    if (arr.includes(diff)) {
      res = true;
      break;
    }
  }

  return res;
}

module.exports = twoSum;
