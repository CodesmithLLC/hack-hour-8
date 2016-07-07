/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

 /*
Approach:
	1. Create an object with integer keys of 1, 5, 10, 50, 100, 500, 1000 that corresponse to string "I", "V", "X", "L", "C", "D", "M"
	2. Create an algorithm that takes an integer that increments or decrements towards the closest whole integer divisible by roman numeral values. Must increment/decrement using only integer keys (using % remainder?)
	3. Track integer keys used and convert to roman numeral values via array
	4. Return roman numeral value


 */

function romanNumeral(n) {
	var container = [];
	const romanObj = {
		1: "I",
		5: "V",
		10: "X",
		50: "L",
		100: "C",
		500: "D",
		1000: "M"
	}

	if (romanObj[n]) {
		console.log('triggered');
		return romanObj[n];
	}

	for (var k in romanObj) {
		/*if (k > n) {
			return console.log(k % n);
		}*/
		console.log(k % n);
	}


}

romanNumeral(400);

module.exports = romanNumeral;
