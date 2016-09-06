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

  let triangle = [
    [1]
  ],
  tier;

  for (let j = 0; j < numTiers-1; j++) {
    tier = [1];

    for (let k = 1; k < triangle[j].length; k++) {
      console.log(triangle[j][k],triangle[j][k-1])
      tier[k] = triangle[j][k] + triangle[j][k-1];
    }
    tier.push(1);
    triangle.push(tier);
  }

  return triangle;

}

module.exports = pascalTriangle;
