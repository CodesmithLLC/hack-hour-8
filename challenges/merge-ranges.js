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
	var res = [];
	var max, min;
	if(array.length%2 ===1) res.push(array.shift());
	for(var i=0; i<array.length; i+=2){
		max = Math.max(...array[i].concat(array[i+1]));
		min = Math.min(...array[i].concat(array[i+1]));
		res.push([min, max]);
	}

	return res;
}

module.exports = mergeRanges;
