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
	var outputObj = {};
	array.sort(function(a, b) {
		return a - b;
	});

	for(var i = 0; i <= array.length-1; i++){
		if(array.indexOf(array[i]) === i){
			outputObj[array[i]] = array[i];
		}
		if(array.indexOf(array[i]) !== i){
			delete outputObj[array[i]];
		}
	}
	for(var k in outputObj){
		return outputObj[k];
	}
}


module.exports = uniqueNumber;
