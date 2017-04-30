/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
 	if (array.length < 4) return array.reduce(function(a,b) { return a*b; });
 	var sorted = array.sort(function(a,b) { return a - b; });
 	if ((sorted[0] * sorted[1]) > (sorted[sorted.length - 2] * sorted[sorted.length - 3])) {
 		return sorted[0] * sorted[1] * sorted[sorted.length - 1];
 	} else return sort[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3];
}


module.exports = highestProduct;
