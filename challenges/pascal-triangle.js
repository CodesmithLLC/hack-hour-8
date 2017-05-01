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
  /*
  Approach: each number is the sum of the two numbers directly above it, so we'll need to
  iterate through the previous row, add up the numbers 'above'  
  */

  if ( numRows < 1) return [];

    var res = [[1]];
    var row;

    for (var j = 0; j < numRows-1; j++) {
      row = [1];

      for (var k = 1; k < res[j].length; k++) {
        row[k] = res[j][k] + res[j][k-1];
      }
      // push the trailing 1 to complete the row
      row.push(1);
      res.push(row);
    }

    return res;
}

module.exports = pascalTriangle;
