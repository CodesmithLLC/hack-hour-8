/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a === b) return a;
  if (a > b) {
    if ((a % b) === 0) return b;
    else return gcd((a % b), b);
  } else {
    if ((b % a) === 0) return a;
    else return gcd((b % a), a);
  }
}

module.exports = gcd;
