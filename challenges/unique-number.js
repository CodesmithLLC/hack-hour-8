/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
 function uniqueNumber(array) {
 	array = array.sort();
 	var prevLen = 0;
 	var obj = {};
 	for (var i = 0; i < array.length; i++) {
 		prevLen = Object.keys(obj).length;
 		obj[array[i]] = array[i];
 		if (i % 2 !== 0 && Object.keys(obj).length > prevLen) return array[i-1];
 	}
 }

module.exports = uniqueNumber;
