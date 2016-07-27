/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time and O(n) space
 *
 */

function mergeArrays(arr1, arr2) {
  var bigArr = arr1.concat(arr2);
  function mergeSort(array) {
  	// base case
  	if (array.length === 1) return array;

  	let halfSize = array.length/2;
  	let firstHalf = array.slice(halfSize);
  	let secondHalf = array.slice(0, halfSize);
  	function compareAndConcat(x, y){
  		let depth = x.length + y.length
  		let res = [];
  		while (res.length < depth){
  			if (x.length === 0){
  				res = res.concat(y);
  				return res;
  			}
  			if (y.length === 0){
  				res = res.concat(x);
  				return res;
  			}
  			if (x[0] < y[0]) {
  				res.push(x[0]);
  				x.shift();
  			} else {
  				res.push(y[0]);
  				y.shift();
  			}
  		}
  	}
  	return compareAndConcat(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  return mergeSort(bigArr);
}

module.exports = mergeArrays;
