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
	var merged = [];
	array = array.sort(function(a,b){ return a[0] - b[0];});
	array.forEach(function(range){
		if( merged.length === 0 || ( (merged[merged.length-1][1] < range[0]) && (merged[merged.length-1[1] < range[1]]) ) ) merged.push(range);
		else merged[merged.length-1][1] = range[1];
	});
	return merged;
}

module.exports = mergeRanges;
