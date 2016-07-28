/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
		var divisors = [];
	for (var i = 0; i <= a; i++) {
		if (a % i === 0) divisors.push(i);
	}
	for (var y = 0; y <= b; y++) {
		if (b % y === 0) divisors.push(y);
	}
	divisors.sort(function(c,d){
		return c < d;
	});
	console.log(divisors);
	for (var z = 0; z < divisors.length; z++){
		if (divisors[z] === divisors[z+1]) {
			return divisors[z];
		}
	}
}

module.exports = gcd;