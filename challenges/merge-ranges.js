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
  let holder = [];
	let result = [];

	function concatAndPush() {
    let temp = [];
		holder.push(array[i]);
		holder = holder.reduce(function(a,b){
			return a.concat(b);
		}).sort(function(a,b){
			return a-b;
		});
		temp.push(holder[0], holder[holder.length-1]);
		result.push(temp);
		holder = [];
  }

  for (var i = 0; i < array.length-1; i++) {
	  if (array[i][1] < array[i+1][0] && array[i][1] < array[i+1][1]) concatAndPush();
	  else holder.push(array[i]);
  }

  holder.push(array[array.length-1]);
  concatAndPush();
  return result;
}

module.exports = mergeRanges;
