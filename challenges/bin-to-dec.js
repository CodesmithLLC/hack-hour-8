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
  const arr = binary.split('');
  let count = 1;
  let sum = parseInt(arr[arr.length - 1]);
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > 0) sum += Math.pow(2, count);
    count++;
  }
  return sum;
}

module.exports = binToDec;
