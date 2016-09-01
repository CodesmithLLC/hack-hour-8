// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  const position = str.match(/\d/g);
  const x = parseInt(position[0]);
  const y = parseInt(position[1]);
  const numOfSpaces = 0;

  function insideBoard(x, y) {
    return x >= 1 && x <=8 && y >=1 && y <= 8;
  }

  if (insideBoard(x - 1, y + 2)) numOfSpaces++;
  if (insideBoard(x + 1, y + 2)) numOfSpaces++;
  if (insideBoard(x + 2, y + 1)) numOfSpaces++;
  if (insideBoard(x + 2, y - 1)) numOfSpaces++;
  if (insideBoard(x + 1, y - 2)) numOfSpaces++;
  if (insideBoard(x - 1, y - 2)) numOfSpaces++;
  if (insideBoard(x - 2, y - 1)) numOfSpaces++;
  if (insideBoard(x - 2, y - 1)) numOfSpaces++;

  return numOfSpaces;
}

module.exports = knightjumps;
