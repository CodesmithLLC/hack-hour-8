/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  var store = arr;

	function recur (store, target) {
	if (target === store[Math.floor(store.length/2)]) return true;
	else if (target > store[Math.floor(store.length/2)] && store.length > 1) {
		store = store.slice(-(Math.floor(store.length/2)))
		recur (store, target);
	} else {
		store = store.slice(0, Math.floor(store.length/2));
		recur (store, target);
	}
	}
}


module.exports = findInOrderedSet;
