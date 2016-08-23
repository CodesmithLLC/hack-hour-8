/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	var low = 0,
		high = array.length - 1,
		mid,
		current
	while(low <= high) {
		mid = Math.floor((lo + hi) /2, 10);
		element = arr[mid];
		if(element < target) {
			low = mid + 1
		} else if(element > key) {
			high = mid -1
		} else {
			return mid
		}
	}
	return false
}


module.exports = findInOrderedSet;
