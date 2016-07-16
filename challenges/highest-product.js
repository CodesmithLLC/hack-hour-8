/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

const negativesCount = (arr) => arr.reduce(
    (ct, next) => next < 0
    ? ct++
    : ct
    )



function highestProduct(array) {
  // sort by absolute val
  var absValueSort = array.sort((a, b) => Math.abs(b) - Math.abs(a))

  return negativesCount(absValueSort.slice(0, 3)) == 2
    ? 'something'
    : 'another thing'
}


module.exports = highestProduct;
