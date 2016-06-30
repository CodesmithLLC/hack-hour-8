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
	var half = Math.floor(array.length/2);
	var end = array.length-1;
	var holder;
	for (var i = 0; i < half; i++){
		holder = array[i];
		array[i] = array[end-i];
		array[end-i] = holder;
	}
	return array;
}

module.exports = reverseInPlace;