// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"
/*
6 6
6 4
2 6
2 4
7 3
7 5
3 3
3 5
*/

function knightjumps(str) {
  var positionArr = str.split(' ');
  const numMap = positionArr.map(x => x = parseInt(x))
  var possibileCount = 0;

  numMap[0] += 2
  if(numMap[0] < 9){
    if(numMap[1]++ < 8) possibileCount++
    if(numMap[1] - 2 > 0) possibileCount++
  }
  numMap[0] -= 4
  if(numMap[0] > 0){
    if(numMap[1]++ < 8) possibileCount++
    if(numMap[1] - 2 > 0) possibileCount++
  }
  numMap[1] += 2
  if(numMap[1] > 0){
    if(numMap[0]++ < 8) possibileCount++
    if(numMap[0] - 2 > 0) possibileCount++
  }
  numMap[1] -= 4
  if(numMap[1] > 0){
    if(numMap[0]++ < 8) possibileCount++
    if(numMap[0] - 2 > 0) possibileCount++
  }

 return possibileCount
}

module.exports = knightjumps;

console.log(knightjumps('4 5'));
