/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length === 1) return array[0];
  if (array.length >= 3) {
    const sortedArr = array.sort((a, b) => b - a);
    return sortedArr[0] * sortedArr[1] * sortedArr[2];
  }
  return array[0] * array[1];
}
module.exports = highestProduct;
