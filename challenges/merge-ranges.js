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

	var result = array.slice().sort(function(a, b) {
            return a[0] > b[0];
        }),
        i = 0;

    while(i < result.length - 1) {
        var current = result[i],
            next = result[i+1];

        if(current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1]);
            result.splice(i+1, 1);
        } else {
        	
            i++;
        }
    }
    return result;
}

}

module.exports = mergeRanges;
