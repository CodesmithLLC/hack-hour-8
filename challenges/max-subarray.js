/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // find the greatest sum of contiguous numbers in the given array
  // brute force is to start at arr[0], sum the slice of arr[0]++(iterate), store
  // in collection; then do the same for arr[1], repeat
  // TIME COMPLEXITY = O(n^2 n) if using keys, iterate to key value to return subarray and max sum
  // improve to O(n^2), no need to return the subarray
  // imporve to O(n), set the slice end point to be arr.length - i
  var sumObj = {};
  var sumValueArr = [];
  for(var i = 0; i < arr.length -1 ; i++){
    for(var j = 1 ; j <= arr.length; j++){
      var toAdd = arr.slice(i, j);
      if(toAdd.length){
       var toAddSum = toAdd.reduce((a,b)=> a + b)
       sumObj[toAddSum] = toAdd;
       sumValueArr.push(toAddSum);
      }
    }
  }
  return Math.max.apply(Math, sumValueArr);
}

module.exports = maxSubarray;
