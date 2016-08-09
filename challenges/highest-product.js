/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 'error: you need to supply atleast 3 numbers';
  array.sort((a, b) => b - a);
  let res1 = array[0] * array[1] * array[2];
  let res2 = array[0] * array[array.length - 1] * array[array.length - 2];

  return res1 > res2 ? res1 : res2;
}


module.exports = highestProduct;
