/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length < 3) {
		console.log('Please enter an array with more than 3 integers.');
		return;
	}

	// Sort array from highest to lowest
	array.sort(function (a,b) {
		return b-a;
	});

	let highestProduct = array[0] * array[1] * array[2];
	
	// console.log('highestProduct');
	return highestProduct;
}


module.exports = highestProduct;
