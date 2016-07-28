/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  var min = (a <= b) ? a : b;
  for (var i = min; i >= 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}


console.log(gcd(10, 5));


module.exports = gcd;
