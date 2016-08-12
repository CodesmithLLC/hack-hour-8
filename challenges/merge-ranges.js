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
	// sort array by their first value
	array.sort(function(a,b) {
		return a[0] - b[0];
	});
	
	// loop through each array
	for (var i = 0; i < array.length; i++) {

		// if current's max value is greater than next's min value
		if (array[i][1] >= array[i+1][0]) {

			// remove the current's max value
			array[i].pop();

			// remove the next's min value
			array[i+1].shift();

			// merge the two singular values
			array[i].push.apply(array[i], array[i+1]);

			// remove extra white space
			array.splice(i+1, 1);
		}
	}
	
	return array;
}

module.exports = mergeRanges;
