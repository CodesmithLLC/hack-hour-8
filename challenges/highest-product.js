/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function lol(input){
  console.log(input);
}

// function highestProduct(array) { 
  // var max = 0;

  // (function huntMax(arr){
    // if(arr.length < 3) return;
    // if(arr.length === 3){
      // var num = arr.reduce(function(p,c){
        // return p + c;
      // });

      // if(num > max ){
        // max = num;
      // }else{
        // return;
      // }
    // }
    // var newArr = arr.slice(1);
    // return huntMax(newArr) || huntMax(arr);
  // })(array);

 // return max; 
// }

function highestProduct(array){
  var cloneArr = array.slice();

  cloneArr.sort(function(a,b){
    return a - b;
  });

  var len = array.length;
  var firstProd = cloneArr[0] * cloneArr[1] * cloneArr[len - 1]
  var secondProd = cloneArr[len - 1] * cloneArr[len - 2] * cloneArr[len - 3];
  return Math.max(firstProd, secondProd);
}

// lol(highestProduct([-1, -5, -3, 6, 8, 20]))
module.exports = highestProduct;
