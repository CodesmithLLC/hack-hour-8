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

/*
approach:
split string into array and convert into numbers
run a loop summing the total. starting with 2 to the power length - 1  times index value and decrementing down.

*/

function binToDec(binary) {
	var strArr = binary.split('');
	var value = 0;
	for(var i = 0; i < strArr.length; i++) {
	 	value = value + (parseInt(strArr[i])*Math.pow(2, strArr.length-1-i));
	 }
	 
	return value;

}

module.exports = binToDec;
