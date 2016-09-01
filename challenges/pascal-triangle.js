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
  let answer = [[1]];
  function rowMaker (array){
    let row = [1];
    for (let i = 1; i < array.length; i++){
      row.push(array[i]+array[i-1]);
    }
    row.push(1);
    answer.push(row);
    return answer;
  }
  while (answer.length < numRows) {
    rowMaker(answer[answer.length-1]);
  }
  return answer;
}

module.exports = pascalTriangle;
