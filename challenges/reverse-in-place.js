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

  if (!Array.isArray(array)){
		return 'not array';
	}

	let temp = [];
	let count = 0;

	for (let i = array.length - 1; i >= 0; i--){
		temp[count] = array[i];
		count++;
	}

	for (let i = 0; i < array.length; i++){
		array[i] = temp[i];
	}
	return array;

}

module.exports = reverseInPlace;
