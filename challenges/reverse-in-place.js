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
	if(array.length ===0) return "error"
	for(var i = 0; i < array.length; i++) {
		if(array[i] !== /^[a-zA-Z]+$/) return "error"
	}
	var last;
	var first;
	var temp;
	for( first = 0, last = array.length -1; first < last; first++, last--) {
	
	temp = array[first]
	array[first] = array[last]
	array[last] = temp
	
	}
	return array;
	// return array
	//return array.reverse()
}

reverseInPlace([1,2,3,4,5,6]);
//[a,b,c,d];
//[1,2,3,4,5,6]
//[6,2,3,4,5,1]
//[6,5,3,4,2,1]
//[6,5,4,3,2,1]

//loop through array with one pointer and start and one at encodeURIComponent
//loop until you hit half way point of array
//first iteration, switch the first and last index values
//second iteration, switch the second and second to last, etc...
//handle edge cases like empty array, or array with improper values

//put j in temp variable, put index 0 at array.length -1, put j at index zero





module.exports = reverseInPlace;