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
  if (!Array.isArray(arr1) || !Array.isArray(arr2)){
  	return 'not array'
  }
  let j = 0;
  let i = 0
  let newArr = [];

	while (i<arr1.length && j<arr2.length){
		if (arr1[i]>arr2[j]){
			newArr.push(arr2[j]);
			j++;
		}
		else {
			newArr.push(arr1[i]);
			i++;
		}
	}

	if (i < arr1.length){
		let arr1Left = arr1.slice(i)
		newArr = newArr.concat(arr1Left)
	}
	if (j < arr2.length){
		let arr2Left = arr2.slice(j)
		newArr = newArr.concat(arr2Left)
	}

	return newArr;

}

module.exports = mergeArrays;
