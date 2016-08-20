/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// return arr.includes(target);

/*
write a binary search
split array into two
*/

function findInOrderedSet(arr, target) {
  const mid = Math.floor(arr.length / 2);
  let left;
  let right;
  const split = (array) => {
    left = array.slice(0, mid);
    right = array.slice(mid);
  };

  const checkSet = (a, t) => {

  };

}


module.exports = findInOrderedSet;
