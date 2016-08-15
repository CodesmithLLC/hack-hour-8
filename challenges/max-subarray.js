/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
 /*
Approach:
Identify largest value in array.
Build waterfall sum of values above and below the max (assuming there are at least 1 value)
sum max of 0 or value for waterfall values + max value 
 */

function maxSubarray(arr) {
  var maxValue = Math.max.apply(null,arr);
  var maxIndex = arr.indexOf(maxValue);
  var upperValues = [];
  var lowerValues = [];
  if(arr.length-1 > maxIndex){
  	arr.slice(maxIndex+1).reduce(function(prev,current){
  		upperValues.push(prev +current);
  		return prev + current;
  	},0);
  } else (upperValues.push(0));
  if(maxIndex > 0){
  	arr.slice(0,maxIndex).reduceRight(function(prev,current){
  		lowerValues.push(prev +current);
  		return prev + current;
  	},0);
  } else (lowerValues.push(0));

  return maxValue + Math.max.apply(null,upperValues)+Math.max.apply(null,lowerValues);
  
}

module.exports = maxSubarray;
