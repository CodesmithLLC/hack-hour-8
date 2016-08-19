/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	let temp = arr;
	let isIn = false;
	while (temp.length > 1 && isIn === false) {
		let len = Math.floor(temp.length / 2)
		let left = temp.slice(0, len);
		if (left[left.length - 1] === target) isIn = true;
		else if (left[left.length - 1] > target) temp = left;
		else {
			let right = temp.slice(len);
			if (right[0] === target) isIn = true;
			else if (right[0] < target) temp = right;
			else break;
		}
	}
	return isIn;
}


module.exports = findInOrderedSet;
