/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, target) {
  // iterate thru array
  // subtract target by each number and put the result in a hash table
  // check every number in array to see if it exists in the hash table
  var hash = {};
  var diff;
  for (var i = 0; i < arr.length; i++) {
    if (hash.hasOwnProperty(arr[i].toString())) return true;
    diff = target - arr[i];
    hash[diff] = arr[i];
    console.log(hash);
  }
  return false;
}

// console.log(twoSum([100, 100, 0], 100));
// console.log(twoSum([5, 5, 1, 10, 5], 10));
// console.log(twoSum([], ));
// console.log(twoSum([], ));
// console.log(twoSum([], ));


module.exports = twoSum;
