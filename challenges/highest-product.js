/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 //if negative, then take two lowest numbers and 
	//brute force method

function highestProduct(array) {
	if (array.length <= 3) return array.reduce(function(curr, accum){return curr * accum; }, 1);
	var prod;
	array.sort(function(a,b){return b-a;});
	prod = array[array.length-1] * array[array.length-2] * array[0];
	if(prod <= 0) prod = array[0] * array[1] * array[2];
	return prod;
}

module.exports = highestProduct;
