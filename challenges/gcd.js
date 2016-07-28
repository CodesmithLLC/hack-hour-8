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
  let s = a < b ? a : b;
  let l = a < b ? b : a;
  for (let i = s; i >= 1; i--) {
    if (s % i === 0 && l % i === 0) {
      return i;
    }
  }
}

module.exports = gcd;
