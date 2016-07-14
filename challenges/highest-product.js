/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  function sortNumber(a, b) {
    return a - b;
  }

  const sortedArray = array.sort(sortNumber);
  const lastIndex = array.length - 1;
  let res = 1;

  for (let i = lastIndex; i > lastIndex - 3; i--) {
    res = res * sortedArray[i];
  }

  return res;
}


module.exports = highestProduct;
