/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return false;

  const sortArr = array.sort((a, b) => a - b);
  const len = array.length;

  let firstThreeMax = sortArr[0] * sortArr[1] * sortArr[2];
  const lastThreeMax = sortArr[len - 1] * sortArr[len - 2] * sortArr[len - 3];

  if (sortArr[0] < 0 && sortArr[1] < 0 && sortArr[2] < 0) {
    firstThreeMax = sortArr[0] * sortArr[1] * sortArr[len - 1];
  }

  return Math.max(firstThreeMax, lastThreeMax);
}

module.exports = highestProduct;
