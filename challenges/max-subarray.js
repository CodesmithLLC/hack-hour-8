/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
	var subs = {};
	arr.forEach(function(num, index){
		var subArr = arr.slice(index);
		var subSum = subArr.reduce(function(tot, num){
			return tot += num;
		});
		subs[subSum] = subArr;
		subArr.forEach(function(num, index){
			var subSubArr = subArr.slice(0,index+1);
			var subSubSum = subSubArr.reduce(function(tot, num){
				return tot += num;
			});
			subs[subSubSum] = subSubArr;
		});
	});
	var sums = Object.keys(subs).map(function(item){
		return parseInt(item);
	})
	return sums.reduce(function(max, i){
		if(i > max) return i;
		return max;
	})
}

module.exports = maxSubarray;
