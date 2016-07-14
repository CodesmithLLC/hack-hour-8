/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	var sortedArr = array.sort(function(a, b)
{
    return b - a;	
});
	var highestProduct = sortedArr[0] * sortedArr[1] * sortedArr[2];
	return highestProduct;
	
}


module.exports = highestProduct;
