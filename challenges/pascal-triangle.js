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

// start and end is a '1'

function pascalTriangle(numRows) {
  let pTriangle = [[1]];
  if(numRows === 1) return pTriangle;
  let tempTriangle = [];
// 1 is set for beggining
  tempTriangle.push(1);

  for(var j = 1; j < numRows.length - 2; j++){
    for(var i = 1; i < pTriangle[j].length; i++){
      tempTriangle.push(pTriangle[j][i] + pTriangle[j][i+1])
      console.log(pTriangle[j][i])
    }
  }
  // 1 is set for the end
  tempTriangle.push(1)

  pTriangle.push(tempTriangle);
  return pTriangle;

}

module.exports = pascalTriangle;

console.log(pascalTriangle(3));
