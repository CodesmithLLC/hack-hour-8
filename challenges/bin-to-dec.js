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
  if (binary==0){return 0};
	let newArr = [];
	let counter = binary.length;

	for (let i = 0; i<binary.length; i++){
		if (binary[i] == 1){
			newArr.push(Math.pow(2,counter-1));
		}
		counter--;
	}

	return newArr.reduce(function(accum,prev){ return accum+prev});
}

module.exports = binToDec;
