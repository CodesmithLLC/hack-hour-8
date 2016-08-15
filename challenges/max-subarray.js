/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

const maxSubarray = (arr) => {
  let tempMax = Number.NEGATIVE_INFINITY;
  let resMax = Number.NEGATIVE_INFINITY;
  let i = 0;

  if (!arr) return 0;

  for (i; i < arr.length; i++) {
    tempMax = Math.max(arr[i], tempMax + arr[i]);
    resMax = Math.max(resMax, tempMax);
  }

  return resMax;
};

module.exports = maxSubarray;
