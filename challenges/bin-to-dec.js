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
/* each 1 represents a power of two, string is zero indexed right to left
zero represnts zero.
sum of all 1's (post 2 to the nth) to return number converted
*/
  const results = [];
  for (let i = 0; i < binary.length; i++) {
    if (binary.charAt(i) === '1') {
      results.push(Math.pow(2, (binary.length - 1) - i));
    }
  }
  return results.reduce((a, b) => a + b);
}
console.log(binToDec('101'))
module.exports = binToDec;
