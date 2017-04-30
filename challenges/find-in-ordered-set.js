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
	let half = arr.length / 2;

	if (arr.length === 1) {
		return false;
	}
	
	if (arr[half] === target) {
		return true;
	}

	if (arr[half] > target) {
		findInOrderedSet(arr.slice(0, half), target);
	}

	if (arr[half] < target) {
		findInOrderedSet(arr.slice(half), target);
	}
}


module.exports = findInOrderedSet;
