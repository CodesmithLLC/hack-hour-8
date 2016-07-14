/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) throw new Error('Array must contain at least 3 integers');
  let biggest = array[0] * array[1] * array[2];
  for (let i = 0; i < array.length - 2; i++) {
    const test = array[i] * array[i + 1] * array[i + 2];
    if (test > biggest) {
      biggest = test;
    }
  }
  return biggest;
}

module.exports = highestProduct;
