/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 'error: you need to supply atleast 3 numbers';
  array.sort((a, b) => b - a);
  let res1 = 1;
  let res2 = 1;

  

  return res;
}


module.exports = highestProduct;
