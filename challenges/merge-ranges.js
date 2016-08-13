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
  //need to sort array first, will do...
  var result = [];
  for(var i = 0; i < array.length; i++){
    if(array[i][array[i].length - 1] > array[i + 1][0]){
      var catted = array[i].concat(array[i + 1]);
      result.push([Math.min(...catted), Math.max(...catted)])
      i++;
    }else{
      result.push(array[i]);
    }
  }
  return result;
}

// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

// console.log(mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
