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

// numRows <= 0 return an empty array

function pascalTriangle(numRows) {
  const pascArr = [];
  let i;
  let j;

  for (i = 1; i <= numRows; ++i) {
    const row = [];
    for (j = 0; j < i; ++j) {
      row.push(j === 0 || j === i - 1 ? 1 : pascArr[i - 2][j - 1] + pascArr[i - 2][j]);
    }

    pascArr.push(row);
  }

  return pascArr;
}

module.exports = pascalTriangle;
