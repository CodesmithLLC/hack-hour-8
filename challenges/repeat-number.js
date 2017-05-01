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

function repeatNumbers(array) {
	let store = {};
	for(let i = 0; i < array.length; i++){
		if(!store[array[i]]) store[array[i]] = true;
		else return array[i];
	}
}
console.log(repeatNumbers([1,2,3,4,5,3]));

module.exports = repeatNumbers;
