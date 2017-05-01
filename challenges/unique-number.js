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
	// only works with even number of duplicates
	var cache = {};
	array.forEach(function(num){
		if(!cache[num]) cache[num] = true;
		else delete cache[num];
	})
	if (Object.keys(cache).length !== 1) return false;
	return parseInt(Object.keys(cache)[0]);
}

module.exports = uniqueNumber;
