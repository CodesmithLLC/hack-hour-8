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
  if (numRows === 0) return [1];
  if (numRows === 0) return [[1], [1, 1]];

  const res = [[1], [1, 1]];
  let mold = [1, 1];

  for (let i = 0; i < numRows - 2; i++) {
    let lastElement = res[res.length - 1];
    for (let j = 0; j < lastElement.length - 1; j++) {
      let sum = lastElement[j] + lastElement[j + 1];
      mold.splice(mold.length - 1, 0, sum);
    }
    res.push(mold);
    mold = [1, 1];
  }

  return res;
}

module.exports = pascalTriangle;
