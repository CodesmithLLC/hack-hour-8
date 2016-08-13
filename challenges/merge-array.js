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

// function mergeArrays(arr1, arr2) {
//   if (!arr1) return arr2;
//   if (!arr2) return arr1;
//
//   return arr1.concat(arr2).sort((a, b) => a - b);
// }

function mergeArrays(arr1, arr2) {
  if (!arr1) return arr2;
  if (!arr2) return arr1;

  let i;

  for (i = 0; i < (arr1.length > arr2.length ? arr1.length : arr2.length); i++) {
    if (arr2[i] <= arr1[i]) {
      arr1.splice(i, 0, arr2[i]);

      // arr2.splice(i, 1);
    } else if (arr1[i] < arr2[i]) {
      arr1.splice(i + 1, 0, arr2[i]);

      // arr2.splice(i, 1);
    }
  }

  return arr1;
}

module.exports = mergeArrays;
