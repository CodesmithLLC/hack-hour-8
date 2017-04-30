/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

//uses binary search
function findInOrderedSet(arr, target) {

	var minIndex = 0;
	var maxIndex = arr.length - 1;
	var currentIndex, currentElement;

	while (minIndex <= maxIndex) {
		currentIndex = (minIndex + maxIndex) / 2 | 0;
		currentElement = arr[currentIndex];

		if(currentElement < target) {
			minIndex = currentIndex + 1;
		} else if (currentElement > target) {
			maxIndex = currentIndex - 1;
		} else {
			return true;
		}
	}
	
	//if can't find return false
	return false;
}


module.exports = findInOrderedSet;
