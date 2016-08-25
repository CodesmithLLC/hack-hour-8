/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	// // O(n) time
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] === target) return true;
	// }

	// return false;

	// O(log n)
	let half = Math.floor(arr.length / 2);

	// check if middle value is the target value
	if (arr[half] === target) return true;

	// we checked all values and still did not find target
	if (arr.length === 1) return false;
	

	if (arr[half] > target) {
		findInOrderedSet(arr.slice(0, half), target);
	}

	if (arr[half] < target) {
		// We add 1 because the we need to make up for the floored half value
		findInOrderedSet(arr.slice(half + 1), target);
	}
}


module.exports = findInOrderedSet;
