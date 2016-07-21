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
  // O(nlogn) complexity
  // return arr1.concat(arr2).sort(function(a,b){
    // return a - b;
  // })

  // wrong...
  // for(var i = 0; i < arr1.length; i++){
    // if(arr1[i] < arr2[i]){
      // return arr1[i].concat(mergeArrays(arr1.slice(i)), arr2);
    // }else{
      // return arr2[i].concat(mergeArrays(arr2.slice(i)), arr1);
    // }
  // }
  
  //Another wrong..
  // for(var i = 0; i < arr1.length; i++){
    // if((arr1[i] < arr2[i]) && (arr1[i + 1] > arr2[i + 1])){
      // arr1.splice(i + 1, 0, arr2.splice(i + 1, 1));
    // }else if((arr1[i] > arr2[i]) && (arr1[i + 1] < arr2[i + 1])){
      // arr1.splice(i + 1, 0, arr2.splice(i + 1, 1));
    // }
  // }

    return arr1.concat(arr2).
      reduce(function(prev, curr, idx){
        // return prev.concat(prev.concat(curr));
        // if(curr < prev) return curr.concat(prev);
      });

}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array)); //[1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

// module.exports = mergeArrays;
