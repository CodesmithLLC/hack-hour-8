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

function pascalTriangle(n) {
  if(typeof n !== 'number') return 'Input is not a number';
  if(n === 1) return [[1]];
  let pascal = [];
  pascal[0] = [1];
  for(let row = 1; row < n; row++){
    let pascalRow = [];
    for(let index = 0; index <= pascal[row-1].length; index++){
      let first = pascal[row-1][index-1] || 0;
      let second = pascal[row-1][index] || 0;
      pascalRow[index] = (first + second);
    }
    pascal[row] = (pascalRow);
  }
  return pascal;
}

module.exports = pascalTriangle;
