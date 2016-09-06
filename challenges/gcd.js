/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// iterative:

// function gcd(a, b) {
//   if (a < 0) a = -a;
//   if (b < 0) b = -b;
//   if (a === 0) return b;
//
//   while (b !== 0) {
//     if (a > b) {
//       a = a - b;
//     } else {
//       b = b - a;
//     }
//   }
//
//   return a;
// }

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

module.exports = gcd;
