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
  var length;
  var temp;
  var sorted = [];
  arr1.length >= arr2.length ? length = arr1.length : length = arr2.length;

  for (var i = 0; i < length; i++) {
    if (temp === undefined) {
      if (arr1[i] > arr2[i]) {
        temp = arr1[i];
        sorted.push(arr2[i]);
      } else if (arr1[i] < arr2[i]) {
        temp = arr2[i];
        sorted.push(arr1[i]);
      } else {
        sorted.push(arr1[i]);
        sorted.push(arr2[i]);
      }
    } else {
      if (arr1[i] > arr2[i]) {
        if (temp > arr1[i]) {
          sorted.push(arr1[i]);
          sorted.push(arr2[i]);
        } else if (temp === arr1[i]){
          sorted.push(arr1[i]);
        } else {
          sorted.push(temp);
          temp = arr1[i];
          sorted.push(arr2[i]);
        }
      } else if (arr1[i] < arr2[i]) {
        if (temp > arr2[i]) {
          sorted.push(arr2[i]);
          sorted.push(arr1[i]);
        } else if (temp === arr2[i]) {
          sorted.push(arr2[i]);
        } else {
          sorted.push(temp);
          temp = arr2[i];
          sorted.push(arr2[i]);

        }
      }
    }



  }

}
var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19,1];

console.log(mergeArrays(my_array, another_array))

module.exports = mergeArrays;
