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
	var store = {};
	for (var i = 0; i < array.length; i++) {
		if(store[array[i]]) store[array[i]] = false;
		else store[array[i]] = true;
	}
	console.log(store);
	for (var prop in store) {
		console.log(store[prop])
		if(store[prop]) return parseInt(prop);
	}
}

module.exports = uniqueNumber;
