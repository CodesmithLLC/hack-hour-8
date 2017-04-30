/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
/*  Approach: because we are looking at consecutive items in the array, 
we can use a loop as opposed to recursion.  We first check if adding the current
item to temp variable increases or decreases the max.  If increases, we take that
new number as temp, otherwise stick with existing temp var.  To handle negtive
numbers, we keep a finalMax var that checks adding newest item in array against max
of previous items in array. 
*/
    var curr = Number.NEGATIVE_INFINITY;
  var max = Number.NEGATIVE_INFINITY;

  for (var i = 0; i < arr.length; i++) {
    curr = Math.max(arr[i], curr + arr[i]);
    max = Math.max(max, curr); 
   // console.log('arr[i]', arr[i], 'currMax', curr, 'max', max)
   
  }
  return max;
}


module.exports = maxSubarray;
