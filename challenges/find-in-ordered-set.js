/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (arr.length === 1) return arr[0] === target;
  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);

  if (target >= left[0] && target <= left[left.length - 1]) return findInOrderedSet(left, target);
  else return findInOrderedSet(right, target);
}


module.exports = findInOrderedSet;
