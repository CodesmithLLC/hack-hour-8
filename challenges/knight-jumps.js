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
Approach:
Parse string to extract x and y coordinates: helper function
Run a knight function to determine all coordinates moves
Count all coordinates within 1x1 to 8x8
Return number of moves
*/



function knightjumps(str) {
  var x = parseInt(str[1],10);
  var y = parseInt(str[3],10);
  var firstMove = [1,1,-1,-1,2,2,-2,-2];
  var secondMove = [2,-2,2,-2,1,-1,1,-1];
  var count = 0;
  for(var i = 0; i < 8; i++){
  	if(firstMove[i]+x < 9 && firstMove[i]+x >= 0) {
  	  if(secondMove[i]+y < 9 && secondMove[i]+y >= 0){
  	  	count++
  	  }
  	}
  }

  return count;
}


module.exports = knightjumps;
