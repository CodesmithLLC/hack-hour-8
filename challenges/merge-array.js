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
  let res = [];
  while (arr1.length || arr2.length) {
    if (!arr1.length) {
      res = res.concat(arr2);
      return res;
    } else if (!arr2.length) {
      res = res.concat(arr1);
      return res;
    } else {
      if (arr1[0] <= arr2[0]) {
        res.push(arr1.shift());
      } else {
        res.push(arr2.shift());
      }
    }
  }
  return res;
}

function mergeArrays2(arr1, arr2) {
  let i = 0;
  while (arr2.length) {
    if (arr2[0] < arr1[i]) {
      arr1.splice(i, 0, arr2.shift());
    } else i++;
  }
  return arr1;
}

module.exports = mergeArrays;
