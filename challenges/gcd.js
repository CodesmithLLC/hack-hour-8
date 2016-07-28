/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */


function gcd(a, b) {
  if (!Number.isInteger(a)) return false;
  if (!Number.isInteger(b)) return false;
  if (a === 0 && b === 0) return undefined;
  if (a === 0) return b;
  if (b === 0) return a;
  const larger = Math.max(a, b);
  const smaller = Math.min(a, b);
  const factors = [];
  let i;

  for (i = 1; i < larger; i++) {
    if (larger % i === 0 && smaller % i === 0) {
      factors.push(i);
    }
  }

  return factors[factors.length - 1];
}

module.exports = gcd;
