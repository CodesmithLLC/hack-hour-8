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
	// let mergedArrays = arr1.concat(arr2);
	// mergedArrays.sort((a, b) => { return a - b;})
	// return mergedArrays;

	let i = 0,
			j = 0,
			storage = [];

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			storage.push(arr1[i]);
			i++;
		} else if (arr1[i] > arr2[j]) {
			storage.push(arr2[j]);
			j++;
		}
	}

	// test case for different length arrays
	let slicedArr;
	
	if (arr1.length > arr2.length) {
		slicedArr = arr1.slice(arr2.length);
		storage.concat(slicedArr1)
	}
	
	if (arr1.length < arr2.length) {
		slicedArr = arr2.slice(arr1.length);
		storage.concat(slicedArr2)
	}
	
	return storage;
}

module.exports = mergeArrays;
