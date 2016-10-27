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

 /*
	Hack hour solution approach:
		1. Take array
		2. Get length of array to determine number of loops which will be the floor of length/2
		3. Go "outside in" starting with index 0 and index (length -1)
		4. Swap values of the two items by using a temp var to store one of the values
		5. increment/decrement towards the middle
		6. return reversed array.


 */

function reverseInPlace(array) {
	
	for (var x = 0, y = array.length-1; x < array.length/2; x++, y-- ) {
		var temp = array[x];
		array[x] = array[y];
		array[y] = temp;
	}

	return array;

}

console.log(reverseInPlace(['1','2','3','4']));

module.exports = reverseInPlace;