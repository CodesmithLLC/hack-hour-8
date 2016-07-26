/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 2) return false;

  let res = false;
  const sortArr = [];
  let i;
  let j;
  let diff;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < n) sortArr.push(arr[i]);
  }

  for (j = 0; j < sortArr.length; j++) {
    diff = n - sortArr[j];
    if (sortArr.includes(diff)) {
      res = true;
      break;
    }
  }

  return res;
}

module.exports = twoSum;
