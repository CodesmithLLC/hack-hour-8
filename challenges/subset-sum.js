/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

/*
create an array of numbers smaller than or equal to the target
check for target in array
check if sum of whole array equals target
sort the array in descending order
subtract the first element in the array from t.
  if that is zero, return true
compare the remaining elements in the array against the new value of t
  if (arr.includes(t)) return true;

*/


function subsetSum(array, target) {
  let t = target;
  const lessThanT = (val) => val <= t;
  const sortAsc = array.sort((a, b) => a - b);
  let arr = array.filter(lessThanT);
  const len = arr.length;
  let i;
  let j;

  arr = arr.sort(sortAsc).reverse();

  if (arr.includes(t)) return true;
  if (arr.reduce((a, b) => a + b) === t) return true;

  return false;
}

module.exports = subsetSum;
