/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let middle = Math.floor(arr.length/2);
  let low = 0;
  let high = arr.length - 1;
  let counter = 0;

  while (arr[middle] !== target) {
  	if (target > arr[middle]) {
  		low = middle;
  		middle = Math.floor((high + low) / 2)
  	} else if (target < arr[middle]) {
  		high = middle
  		middle = Math.floor((high + low)  /2 )
  	}
  	counter++;
  	if (counter > arr.length){
  		break;
  	}
  };

  return counter < arr.length ? true : false;

}


module.exports = findInOrderedSet;
