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
<<<<<<< HEAD
	var revStgArr = binary.split('').reverse();
	var num = 0;
	for(var i = 0; i < revStgArr.length; i++){
		num += (revStnArr[i] * Math.pow(2, i)); 
	}
	return num;
=======

>>>>>>> 17610421d8957ae9a071d5ef594cd4787b986595
}

module.exports = binToDec;
