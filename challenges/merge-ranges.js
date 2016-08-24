/**
 * Write a function mergeRanges that takes an array of meeting time
 ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
// sort meeting times by start time
  const arraySorted = array.sort((a, b) => a[0] - b[0]);

// looking at two meeting times, if the 'first' meeting end time is greater than
// the start of the the 'second' meeting time, overlap -> merge
// possible helper function
  let overLapMerged = [];
  const overLaps = function (sortedArray) {
    for (var i = 0; i< sortedArray.length-1; i++){
      if (sortedArray[i][1] > sortedArray[i + 1][0] || arraySorted[i][1] === arraySorted[i + 1][0]) {
        overLapMerged.push([sortedArray[i][0]].concat([arraySorted[i + 1][1]]));
        sortedArray.splice(sortedArray[i], 1);
      } else {
        console.log(sortedArray[i])
        overLapMerged.push(sortedArray[i])
      }

    }
    overLapMerged.push(sortedArray[sortedArray.length - 1]);
  };
  overLaps(arraySorted);
  return overLapMerged;
}

module.exports = mergeRanges;


console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10], [9, 18]]))
