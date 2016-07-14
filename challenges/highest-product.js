/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length <= 3) {
    return array.reduce(function(a ,b) {
      return a*b;
    });
  }
  var max = 0;
  var cache = {};
  function recursive(arr, count, extract) {
    if (count >= 2) {
      for (var j = 0; j < arr.length; j++) {
        var product = arr[j] * extract;
        if (product > max) {
          max = product;
        }
      }
      return;
    } else {
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr.slice()
        var extract2 = arr2.splice(i, 1);
        extract2 = extract * extract2[0];
        var count2 = count + 1;
        recursive(arr2, count2, extract2);
      }
    }
  }
  recursive(array, 0, 1);
  return max;
}

// console.log(highestProduct([1,2,3,8,2,3,4,0]))
// console.log(highestProduct([5,5,5,10,100]));
// console.log(highestProduct([5,2,8,1,7,2]))
// console.log(highestProduct([2,1,2,9,1,2]))
// console.log(highestProduct([1,2,3]))
// console.log(highestProduct())
// console.log(highestProduct())
// console.log(8*4*4)


module.exports = highestProduct;
