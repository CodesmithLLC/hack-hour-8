/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const sumCache = [];
  const len = arr.length;
  let i;
  let j;

  for (i = 0; i < len; i++) {
    for (j = len; j > i; j--) {
      sumCache.push(sum(arr.slice(i, j)));
    }
  }
  
  // helper sum function
  function sum(array) {
    return array.reduce((p, c) => {
      return p + c;
    });
  }

  return Math.max(...sumCache);
}


module.exports = maxSubarray;
// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
