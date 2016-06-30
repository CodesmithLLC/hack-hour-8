/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 * 
 * In some languages, strings are mutable (like in Ruby). In other languages, 
 * such as Python and Javascript, strings are immutable, meaning they cannot 
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

function reverseInPlace(array) {
	for (var left = 0, right = array.length - 1; left < right; left++, right--) {
		var store = array[left];
		array[left] = array[right];
		array[right] = store;
	}

	return array;
}

module.exports = reverseInPlace;