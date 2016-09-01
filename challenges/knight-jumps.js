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
	if(str.length > 5) return 'Invalid coordinates';
	let xCoord = parseInt(str[1]);
	let yCoord = parseInt(str[3]);
	if( (xCoord < 1 && xCoord < 8) || (yCoord < 1 && yCoord < 8)) return false;
	let xLevel, yLevel;
	switch (xCoord){
		case 1:
		case 8:
			xLevel = 0;
			break;
		case 2:
		case 7:
			xLevel = 1;
			break;
		default:
			xLevel = 2;
	}
	switch (yCoord){
		case 1:
		case 8:
			yLevel = 0;
			break;
		case 2:
		case 7:
			yLevel = 1;
			break;
		default:
			yLevel = 2;
	}
	if( xLevel === 2 && yLevel === 2 ) return 8;
	else if( xLevel === 2){
		if( yLevel === 1) return 6;
		if( yLevel === 0) return 4;
	}
	else if( yLevel === 2){
		if( xLevel === 1) return 6;
		if( xLevel === 0) return 4;
	}
	else if( xLevel === 1 && yLevel === 1 ) return 4;
	else if( (xLevel === 1 && yLevel === 0) || (xLevel === 0 && yLevel === 1) ) return 3;
	else if( xLevel === 0 && yLevel === 0 ) return 2;
}

module.exports = knightjumps;
