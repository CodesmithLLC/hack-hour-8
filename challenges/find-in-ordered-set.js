/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target, i = 0) {
    
    if ( arr[i] === target || arr[arr.length - 1 - i] === target) {
        return true;
    } else if ( i > arr.length - 1) {
        return false;
    }
    
    i += 1;
    return findInOrderedSet(arr, target, i);
}


module.exports = findInOrderedSet;
