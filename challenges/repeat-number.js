/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */
//BRUTE FORCE: store in another array and everytime check if it an indexOf that array
//O(n^2) time and O(n) space

//O(n^2) time because of indexOf 
function repeatNumbers(array) {
	for(var i =array.length-1; i>=0; i--){
		array[i] *= -1;
		if(array.indexOf(-array[i]) !== -1) return -array[i];
	}
}

module.exports = repeatNumbers;
