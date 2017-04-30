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
  array.sort();
	for (let i = 1; i < array.length; i++){
		if (array[i]==array[i-1]){
			return array[i];
		}
	}
  return false;
}

module.exports = repeatNumbers;
