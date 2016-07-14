/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) throw new Error('Array must contain at least 3 integers');
  array.sort(function(a, b) {
    return a - b;
  });
  function multiply(a, b, c) {
    return a * b * c;
  }
  return multiply.apply(this, array.slice(-3));
}


module.exports = highestProduct;
