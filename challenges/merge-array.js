'use strict';
/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
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
  
  let idx1 = 0,
    idx2 = 0,
    result = [];

  for(var i = 0; i < arr1.length; i++){

    if(arr1[idx1] >= arr2[idx2]){
      result.push(arr2[idx2++])
    }else{
      result.push(arr1[idx1++])
    }  
    
    if(idx1 === arr1.length) return result.concat(arr2[idx2]);
    if(idx2 === arr2.length) return result.concat(arr1[idx1]);
  }
}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array)); //[1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

// module.exports = mergeArrays;
