/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if (array.length < 3) throw new Error('Array must contain at least 3 integers');
	 array.sort(function(a,b) {
		 return a - b;
	 });
  var start = array[0] * array[1] * array[array.length - 1];
 	var end = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
 	if (start > end) return start
 	else return end
 }

module.exports = highestProduct;
