/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	// O(n^2) solution
	// for (var i = 0; i < arr.length; i++){
	// 	for(var j = i+1; j<arr.length; j++){
	// 		if (arr[i] + arr[j] === n) return true;
	// 	}
	// }

	// O(n) solution
	for(var i = 0; i < arr.length-1; i++){
		if (arr.slice(1).indexOf(n-arr[i]) > -1) return true;
	}
	return false;
	
	
}

module.exports = twoSum;
