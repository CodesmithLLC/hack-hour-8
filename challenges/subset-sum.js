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
  for (var i = 0; i < array.length; i++) {
    var sum = 0;
    for (var j = 0; j < array.length; j++) {
      sum += array[j];
      if (sum === target) {
        return true;
      }
    }
    var temp = array.pop();
    array.unshift(temp);
  }
  return false;
}

function ArrayAddition(arr, target) {
    var max = target;
    if (arr.reduce(function(a, b){return a + b;}) == max) return true;
    function recursive(arr, int = 1, check = 1) {
        if (check > arr.length || int > arr.length) return false;
        var test = arr.slice(0, check);
        if (test.reduce(function(a, b){return a + b;}) == max) return true;
        var num = arr.shift();
        arr.push(num);
        return recursive(arr, ++int, check) || recursive(arr, 1, ++check);
    }
    return recursive(arr);
}

// console.log(subsetSum([7, 1, 15, 37, 89], 15+89));
console.log(ArrayAddition([7, 1, 15, 37, 89], 15+89));
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32) );
// console.log(subsetSum([8, 2, 4, 12], 13));
// console.log(subsetSum([8, -2, 1, -3], 6));
// module.exports = subsetSum;
