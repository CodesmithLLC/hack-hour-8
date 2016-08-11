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
//loop through array pushing numbers to new array and checking indexof to see if element is in new array - not timely
 //Slow way, O(n)^2
var a = [1,2,3,4,5,6,7,8,9,3,10,11,12,13];
// function repeatNumbers(array) {
// 	var results = [];
// 	for(var i = 0; i < array.length; i++) {
// 		if(results.indexOf(array[i]) !== -1) {
// 			return array[i]
// 		} else {
// 			results.push(array[i])
// 		}
// 	}
// }
function repeatNumbers(array) {
	return array.sort(function(a, b) {
		return a-b
	}).filter(function(elem, ind, array) {
		if(elem === array[ind + 1]) {
			return elem
			}
	})[0]
}

module.exports = repeatNumbers;
