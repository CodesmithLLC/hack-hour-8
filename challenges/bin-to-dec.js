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
  let binStr = binary;
  let negative = false;

  if (binary.charAt(0) === '-') {
    binStr = binary.substring(1);
    negative = true;
  }

  const binArr = binStr.split('').reverse();
  const len = binStr.length;
  let res = 0;
  let i;

  for (i = 0; i < len; i++) {
    res += binArr[i] * Math.pow(2, i);
  }

  return negative ? res * (-1) : res;
}

module.exports = binToDec;
