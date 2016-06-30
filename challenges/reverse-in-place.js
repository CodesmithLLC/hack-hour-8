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
	var arr = array;
	var temp; 
	var temp2;
	var len = arr.length - 1;
	for(var i = 0; i < len / 2; i++){
		 temp = arr[len - i];
		 temp2 = arr[i];
		 arr[i] = temp;
		 arr[len - i] = temp2;
	}
	return arr;
}

module.exports = reverseInPlace;