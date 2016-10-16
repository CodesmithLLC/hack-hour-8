/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  if (!array) return [0];
  if (!array.length) return [0];
  return array.map((el, id) => {
    return array.slice(0, id).concat(array.slice(id + 1)).reduce((prev, curr) => {
      return prev * curr;
    }, 1);
  });
}

// let arr = [1, 7, 3, 4]
// console.log(getAllProducts(arr));
// console.log(getAllProducts([1]));
module.exports = getAllProducts;
