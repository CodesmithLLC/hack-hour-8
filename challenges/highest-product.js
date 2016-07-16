/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length === 1) return array[0];
  if (array.length >= 3) {
    const negArr = [];
    const posArr = [];

    for(let i = 0; i<array.length; i++){
      if(array[i] < 0) negArr.push(array[i])
      else posArr.push(array[i]);
    }
    negArr.sort()
    posArr.sort((a, b) => b - a)
    console.log(negArr);
    console.log(posArr);


      // catch for zero and double negatives


    //return sortedArr[0] * sortedArr[1] * sortedArr[2];
  }
  return array[0] * array[1];
}
console.log(highestProduct([-100,-4,-5, 0, 5, 4, 100]))
module.exports = highestProduct;
