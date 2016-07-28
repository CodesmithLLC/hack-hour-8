/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

  let n = Math.min(a, b);

	function helper (a, b, n) {

		if (a % n === 0 && b % n === 0) {
			return n;
		}
		else {
			return helper (a, b, n-1);
		}

	}
  	return helper(a, b, n);
}

module.exports = gcd;
