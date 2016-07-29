/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!Array.isArray(arr)){
		return 'not array';
	}
	if (isNaN(n)){
		return 'NaN';
	}

	var map = {};

	for (let i = 0; i < arr.length; i++){
		map[n-arr[i]] = true;
	}
	for (let j = 0; j < arr.length; j++){
		if (map[arr[j]]!== undefined){
			return true;
		}
	}
	return false
}

module.exports = twoSum;
