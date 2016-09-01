/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	//base case target has been found
	if(target === arr[0]) return true;

	//base case target is not in array
	if(arr.length === 1) return false;

	//split array into two sub arrays
	var arr1 = arr.slice(0, Math.floor(arr.length/2));
	var arr2 = arr.slice(Math.floor(arr.length/2));

	//check if target is at end of 1st half or beginning of 2nd half
	if(target === arr1[arr1.length-1] || target === arr2[arr2.length-1]) return true;

	//check if target would be in first half or 2nd half and recurse
	if(target < arr1[arr1.length-1]) return findInOrderedSet(arr1, target);
	else return findInOrderedSet(arr2,target);
}

module.exports = findInOrderedSet;
