/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	if( a > b ) {
	while(b !== 0) {
	return gcd(b, a % b)
	}
	console.log('A', a)
	return a
	}
	else {
		while(a !== 0) {
			return gcd(a, b % a)
		}
	}
	console.log('B', b)
	return b
}
gcd(2890, 388)
//var counter for divisor tracker
//must be whole Number
//start testing 
//divide numbers by 2, if the result is odd
//euclids algorithm FTW

module.exports = gcd;