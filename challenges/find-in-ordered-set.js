/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */
//Going for O(Log n);

function findInOrderedSet(arr, target) {
  var mid = Math.floor(arr.length/2);
  if(target === arr[mid]) {
    return true;
  } else if (target < arr[mid]){
    return findInOrderedSet(arr.slice(0, mid), target);
  } else if (target > arr[mid]){
    return findInOrderedSet(arr.slice(mid + 1, arr.length), target);
  } else {
    return false;
  }
}


module.exports = findInOrderedSet;
