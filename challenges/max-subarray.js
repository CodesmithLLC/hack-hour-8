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

	for (let i = 0; i < arr.length; i++){
		let allJ = 0;
		for (let j = i; j < arr.length; j++){
			allJ += arr[j];
			if (arr[j+1] < 0){
				cache[allJ] = true;
			}
		}
		cache[allJ] = true;
	}
	return Math.max(...Object.keys(cache));
}

module.exports = maxSubarray;
