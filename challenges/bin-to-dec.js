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
	var exponent = 0;
	var total = 0;
	
	for(var i = binary.length -1; i >= 0; i--) {
		if(binary[i] == 0) exponent++	//if zero, skip number, increment var properly
		if(binary[i] == 1) {
			total += Math.pow(2, exponent)
			exponent++
			//if 1, multiply 2 by exponent and add to total
		} 
	}
	return total
}

//figure out how the hell binary values work
//need a exponent variable that will increase as we reverse down the 'binrary' variable
//zeros do nothing
//have a total variable that will increase or remain the same on each iteration
//

module.exports = binToDec;
