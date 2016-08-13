/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  function combine(arr1, arr2) {
    const res = [];
    res.push(arr1[0]);
    res.push(arr2[1]);
    return res;
  }

  // sort times ascending according to start time
  const input = [...array];
  for (let i = 1; i < input.length; i++) {
    let j = i - 1;
    let temp = input[i];
    while (j >= 0 && input[j][0] > temp[0]) {
      input[i] = input[j];
      j = j - 1
    }
    input[j + 1] = temp;
  }

  // check each time with the next time for overlaps and combine as necessary
  const res = [];
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i][1] >= input[i + 1][0]) {
      res.push(combine(input[i], input[i + 1]));
      i = i + 1;
    } else {
      res.push(input[i]);
    }
  }

  return res;
}


module.exports = mergeRanges;
