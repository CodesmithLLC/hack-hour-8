/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)){return 'not array'}
  let sortedArr = array.sort(function(a,b){return a-b;});


	return sortedArr[array.length-1]*sortedArr[array.length-2]*sortedArr[array.length-3];
}


module.exports = highestProduct;
