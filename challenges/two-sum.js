/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
// [ 2, 3, 4, 9] tgt = 7 -> true
//  ''  tgt = 10 -> false

// poss 1 : create a for loop that begins with 0 -> end, then nest a for loop
// at that for loop plus one to add adjacent components incrementally BUT! -> O(n^2)

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === n) return true;
    }
  }
  return false;
}
// poss 2: need to reduce O time...

console.log(twoSum([1,2,3,3,4,9], 12));

module.exports = twoSum;
