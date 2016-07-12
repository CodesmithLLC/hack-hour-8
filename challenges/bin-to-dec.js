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
	var binArr = binary.split('').reverse();
	console.log(binArr);
	return binArr.reduce(function(prev, curr, index){
		if(curr === '1') return prev += Math.pow(2, index);
		else return prev;
	},0)
}

function decToBin(dec){
	if (dec === 1) return '1';
	var bin = '';
	var binSpaces = Math.floor(Math.pow(dec));
	console.log(binSpaces);
	while(binSpaces>=0){
		if(dec >= Math.pow(2, binSpaces)){
			bin += '1';
			dec -= Math.pow(2,binSpaces)
		}
		else{
			bin+='0'
		}
		binSpaces--
	}
	return bin;
}

module.exports = binToDec;
