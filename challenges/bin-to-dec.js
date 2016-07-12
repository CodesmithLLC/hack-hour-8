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
"use strict";
function binToDec(binary) {
  binary = binary.split("");
  let negative = false;
  if (binary[0] == '-') {
    negative = true;
    binary.shift();
  }
  let sum = 0;
  for (let i = 0, j = binary.length - 1; i < binary.length; i++, j--) {
    if (binary[i] == '1') {
      sum = sum + Math.pow(2, j);
      console.log('sum iter ' + sum);
    }
  }
  return negative ? sum * -1 : sum;
}

// function decToBin(num) {
//   const binary = [];
//   let j = 0;
//   while (Math.pow(2, j) < num) {
//
//     if (Math.pow(2, j)
//      == num) {
//       binary.unshift(1);
//     } else {
//       binary.unshift(0);
//     }
//     j++;
//     // console.log(binary.join(''));
//
//   }
//   return binary.join('');
// }
module.exports = binToDec;

// console.log(binToDec('0'));
// console.log(binToDec('11'));
// console.log(binToDec('100'));
console.log(binToDec('101'));
console.log(binToDec('-100101'));
// console.log(decToBin(16));
