/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
var sum = 0;
function subsetSum(array, target, sum) {
	var origArray = array;
	return subSubsetSum(origArray, origArray, target, sum);
}

function subSubsetSum(origArray, array, target, sum){
	if (sum === target) return true;
	sum += array[0];
	if (array.length === 1)	return subsetSum(origArray.slice(1), target, 0);
	console.log(sum);
	return subSubsetSum(origArray,array.slice(1), target, sum);
}

module.exports = subsetSum;
