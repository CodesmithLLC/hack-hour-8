/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	// Sorted array
	arr.sort((a,b) => { return a - b })
	
	// Test if arr can be added
	if (arr === null || arr.length === 0) return false

	let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let x = arr[i] + arr[j];

    // If the array sum is less than target, increase
    // index from start of array
    if (x < n) { ++i }

    // If the array sum is less than target, decrease
    // index from end of array
    else if (x > n) { j-- }
    	
    else { return true }
  }
  
  return false;
}

module.exports = twoSum;
