/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  let perms = array[0];
  let temp = [];
  function findPerms () {
    for (var i = 1; i < array.length; i++){
      for (var y = 0; y < perms.length; y++){
        temp.push(array.splice(y, 0, array[i]));
        temp.push(array.splice(y+1, 0, array[i]));
      }
    }
  }
}

module.exports = getAllProducts;
