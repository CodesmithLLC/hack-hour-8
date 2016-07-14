/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  function sortnum(a,b){
		return a-b;
	}

	let sortedArr = arr.sort(sortnum);


	return sortedArr[arr.length-1]*sortedArr[arr.length-2]*sortedArr[arr.length-3];
}


module.exports = highestProduct;
