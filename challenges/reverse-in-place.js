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
	if (array.length === 1) return array;
	if (!array) return [];
	for(var i = 1; i<array.length; i++){
		array.unshift(array[i]);
		i++;
	}
	return array.splice(0,Math.round(array.length/2));
}

module.exports = reverseInPlace;