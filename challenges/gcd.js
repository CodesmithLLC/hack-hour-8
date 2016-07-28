/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

 /*
Edge cases to consider:
  Negative numbers.
  Two Zeros.
  One Zero.
 */

function gcd(a, b) {
  if(a === 0 && b ===0) return undefined;
  if(a === 0 || b=== 0) return Math.max(Math.abs(a),Math.abs(b));
  var absoluteMaxSquare = Math.floor(Math.sqrt(Math.max(Math.abs(a),Math.abs(b))));
  for (var i = absoluteMaxSquare; i>0; i--) {
  	if(a % i === 0 && b % i === 0 ) return i;
  }

}


module.exports = gcd;