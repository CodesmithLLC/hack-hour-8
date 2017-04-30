/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const cache = {};
  let max = Number.NEGATIVE_INFINITY;
  let len = arr.length;

  if (arr.length < 1) return arr;

  while (len) {
    for (let i = 0, x = 0, j = len; x < arr.length - len; x++, i++, j++) {
      let sub = arr.slice(i, j);
      let sum = sub.reduce((a, b) => a + b);
      if (sum > max) {
        max = sum;
        cache[max] = JSON.stringify(sub);
      }
    }
    len--;
  }

  return JSON.parse(cache[max]);
}

module.exports = maxSubarray;
