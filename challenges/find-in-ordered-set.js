/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {

  var check = 0;

  function recurse(array, targ) {
    var first = array[0],
      last = array[array.length - 1],
      mid = array[Math.ceil((array.length - 1) / 2)];

    if (target === first || target === mid || target === last) {
      return check++;
    }
    if (array.length === 1 && array[0] != target) {
      return check += 0;
    }

    if (target < mid) recurse(array.slice(0, Math.ceil((array.length - 1) / 2)), target)
    if (target >= mid) recurse(array.slice(Math.ceil((array.length - 1) / 2)), target)

    return check += 0;;
  }

  recurse(arr, target);

  return check === 1;
}


module.exports = findInOrderedSet;
// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 2)); // -> true
// findInOrderedSet(nums, 2);  // -> false
