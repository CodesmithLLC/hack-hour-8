/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
	let decimal = 0;
		
	for (let i = 0; i < binary.length; i++) {
		decimal += binary[i] * Math.pow(2, (binary.length - (i+1)));
	}

	return decimal;
}

// //Unfinished
// function decToBin(dec) {
// 	// base case
// 	if (dec > 0) {
// 		return false;
// 	}

// 	// Find the largest power of two
// 	// Subtract from given number
// 	// Repeat step 1 and subtract from leftover number
// }

module.exports = binToDec;
