'use strict';
/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {

  let result = [];

  for(let i = 1; i <= numRows; i++){
    let arr = new Array(i);
    arr[0] = 1;
    arr[arr.length - 1] = 1;
    if(i > 2){
      for(let j = 1; j < arr.length - 1; j++){
        arr[j] = result[i - 2][j] + result[i - 2][j - 1];
      }
    }
    result.push(arr);
  }

  return result;
}

// console.log(pascalTriangle(7));
module.exports = pascalTriangle;
