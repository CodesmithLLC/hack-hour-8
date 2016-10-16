/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * let times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  // need to sort array first, will do...
  let srtArr = array.sort(function(a, b) {
    return a[0] - b[0];
  });
  const result = [];
  for (let i = 0; i < srtArr.length; i++) {
    if (srtArr[i][srtArr[i].length - 1] >= srtArr[i + 1][0]) {
      let catted = srtArr[i].concat(srtArr[i + 1]);
      result.push([Math.min(...catted), Math.max(...catted)]);
      i++;
    } else {
      result.push(srtArr[i]);
    }
  }
  return result;
}

// let times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

// console.log(mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
