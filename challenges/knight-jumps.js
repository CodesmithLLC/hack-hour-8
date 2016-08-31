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
  let strArr = str.split(" ");
	let x = strArr[0];
	let y = strArr[1];

	let counter = 0;

	while (x < 8 && y < 8 && y > 0 && x > 0) {
		counter ++;
		x++;
		y+=2;
	}

	x = strArr[0];
	y = strArr[1];

	while (x < 8 && y < 8 && y > 0 && x > 0) {
		counter ++;
		x--;
		y+=2;
	}

	x = strArr[0];
	y = strArr[1];

	while (x < 8 && y < 8 && y > 0 && x > 0) {
		counter ++;
		x--;
		y-=2;
	}

	x = strArr[0];
	y = strArr[1];

	while (x < 8 && y < 8 && y > 0 && x > 0) {
		counter ++;
		x++;
		y-=2;
	}

	return counter;

}

module.exports = knightjumps;
