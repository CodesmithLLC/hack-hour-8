/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array = array.sort(function(a, b) {
    return b - a;
  });
 
  let highestIntegers = array.slice(0, 3);
  let lowestTwo = array.slice(array.length - 2, array.length).reverse();
  
  let opt1 = lowestTwo[0] * lowestTwo[1] * highestIntegers[0];
  let opt2 = highestIntegers[0] * highestIntegers[1] * highestIntegers[2];
  
  if(opt1 > opt2) {
    return opt1;
  } else {
    return opt2;
  }
}


module.exports = highestProduct;
