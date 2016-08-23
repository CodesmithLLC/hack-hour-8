/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, because zero might be in the array and you cannot divide by zero
 */

function rotateArr(array) {
  const multiplyArray = (a) => {
    let p = 1;
    let j;
    for (j = 0; j < a.length; j++) {
      p *= a[j];
    }
    return p;
  };
  let arr = array.slice();

  let i;
  let resArr = [];
  for (i = array.length; i > 0; i--) {
  const last = arr.splice(arr.length - 1, 1);
  resArr.push(multiplyArray(arr));
  arr.unshift(last);
  }

  return resArr;
}

module.exports = getAllProducts;
