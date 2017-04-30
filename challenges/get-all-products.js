/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

 function getAllProducts(array) {
 	var products = [];
 	findProducts(array, 0);
 	function findProducts(array, i) {
 		if (i === array.length) return;
 		var tempVal = array.splice(i,1);
 		var mult = array.reduce(function(a,b) { return a*b; });
 		products.push(mult);
 		array.splice(i,0,tempVal);
 		i = i+1;
 		findProducts(array, i);
 	}
 	return products;
 }

module.exports = getAllProducts;
