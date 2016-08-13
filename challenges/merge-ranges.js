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
  // array.sort(function(a,b){
  //   return a[0] > b[0];
  // })
  let retArr = [array[0]];
  for (let i=2; i < array.length; i+=2){
	   let comb = array[i].concat(array[i - 1]);
     retArr.push([Math.min(...comb), Math.max(...comb)]);
	}
  return retArr;
}

module.exports = mergeRanges;
