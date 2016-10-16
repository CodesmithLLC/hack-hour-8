/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
 //  2 3 4 7 -> 5
 //  -3 -2 1 8 -> 6
 //  3 4 5 12 12 34 -> 32
 //  -2 1 3 3 7 -> 10
 //
 // a b c d
 // a c d
 // a d
 // b c d
 // b d
 // c d
 // d
  // sum #'s consecutively
  // if sum goes over target or if you reach the end of the set, start summing
  // again beginning with the same element but skipping the element after it

  // first loop is the base number that we will be summing the rest of the #'s on to
  for (var i = 0; i < array.length; i++) {
    let sum = array[i];

    for (var y = i+1; y < array.length; y++) {
      sum += array[y];
      if (sum = target) return true;
      if (sum > target) break;
    }
  }
  return false;
}

module.exports = subsetSum;
