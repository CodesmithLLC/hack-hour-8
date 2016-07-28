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

  const larger = Math.max(a, b);
  const smaller = Math.min(a, b);
  const isPrime = (x) => {
    let i;
    if (x === 2) return true;
    if (x < 2) return false;
    for (i = Math.floor(x / 2); i >= 2; i--) {
      if (x % i === 0) return false;
    }
    return true;
  };

  if (a === 0 && b === 0) return undefined;
  if (a === 0 || b === 0) return larger;
  if (a === b) return a;
  if ((a < 0 && b > 0) || (b < 0 && a > 0)) return 1;
  if (isPrime(larger)) return 1;

  const factors = [];
  let f;

  for (f = 1; f <= smaller; f++) {
    if (larger % f === 0 && smaller % f === 0) {
      factors.push(f);
    }
  }

  return factors[factors.length - 1];
}

module.exports = gcd;
