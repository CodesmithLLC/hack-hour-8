/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *testing
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
	/*
	recursion is needed. How do you check all combinations?
	base case is if array.length = 0?
	start at position 0
	while loop, n < arr.length
	*/
	if (array.length === 0) return false;
	else {
		let n = 1;
		let x = 0;
		let sum = array[0];
		while (n < array.length){
  		if (array[0] + array[n] === target || sum === target) return true;
  		sum += array[n]
  		n++;
		}
	}
	array.shift();
	return subsetSum(array, target)

}
module.exports = subsetSum;
//
