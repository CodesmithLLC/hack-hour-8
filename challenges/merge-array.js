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
	// edge cases of one array or the other being empty
	if(arr1.length === 0) return arr2;
	if(arr2.length === 0) return arr1;
	// new arrays identical to parameters arr1, arr2 to keep function pure, depending on which is longer
	var arr3, arr4;
	if(arr1.length>=arr2.length){
		arr3 = [].concat(arr1);
		arr4 = [].concat(arr2);
	}
	else{
		arr3 = [].concat(arr2);
		arr4 = [].concat(arr1);
	}

	for(var i = 0; i < arr3.length; i++){
		if(arr4[0]<arr3[i]) arr3.splice(i,0,arr4.shift());
		if(i === arr3.length-1 && arr4.length > 0) arr3.splice(arr3.length,0,arr4.shift())
	}
	return arr3;
}

module.exports = mergeArrays;
