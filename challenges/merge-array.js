/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
  var merged = [];
  for(var i = 0; arr1.concat(arr2).length; i++) {
  	var highest = arr1[0] < arr2[0] ? arr1.splice(0,1) : arr2.splice(0,1);
  	console.log(highest);
  	merged = merged.concat(highest);
  }
  return merged
}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
mergeArrays(my_array, another_array);


module.exports = mergeArrays;
