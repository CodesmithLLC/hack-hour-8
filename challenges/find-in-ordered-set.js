/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  var end = arr.length;
  var start = end - 1;
  while (end--) {
    if (target === arr[end]) return true;
    if(target === arr[end-start]) return true;
  }
  return end >= 0;
}


module.exports = findInOrderedSet;
