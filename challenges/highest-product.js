/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	// edge case empty array
	if (array.length === 0 && !array[0]) return 0;
	// only 3 elements
	if (array.length <= 3) return returnHighest(array);
	// sort array highest to lowest
	array.sort(function(a,b){
		return b-a;
	});
	// find # of negatives in three largest numbers
	if(array[array.length-1]*array[array.length-2]>array[1]*array[2]) return returnHighest(array.splice(1, array.length-3);
	var negArray = array.slice(0,3);
	var negatives = negArray.reduce(function(negative, item){
		if (item < 0) return ++negative;
		else return negative;
	},0);
    //	if any negatives in set of three largest, replace two smallest with two 'largest' negative numbers
	if (negatives === 1 || negatives === 2) {
		array.splice(1,array.length-3);
	}
	return returnHighest(array.slice(0, 3));
}

// helper function to get product
function returnHighest(array){
	return array.reduce(function(product, item){
			return product *= item;
	}, 1);
}
module.exports = highestProduct;
