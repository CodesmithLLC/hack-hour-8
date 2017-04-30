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
  const bin = binary.split('').reverse().join('');
  let res = 0;
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') res = res + Math.pow(2, i);
  }
  return res;
}

module.exports = binToDec;
