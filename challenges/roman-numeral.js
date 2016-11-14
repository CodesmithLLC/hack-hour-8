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
	1. Create an object with integer keys that correspond with roman numeral strings
	2. Create an algorithm that takes an integer that increments or decrements towards the closest whole integer divisible by roman numeral values. Must increment/decrement using only integer keys (using % remainder?)
	3. Track integer keys used and convert to roman numeral values via array
	4. Return roman numeral value


 */

function romanNumeral(n) {
	var output = [];
	var number = n;
	var numbers = [1000,900,500,400,100,90,50,40,10,9,8,7,6,5,4,3,2,1];
  var numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","VIII","VII","VI","V","IV","III","II","I"];
	
	if (numbers.indexOf(n) > -1) {
		return numerals[numbers.indexOf(n)];
	}	

	for (var i = 0; i < numbers.length; i++) {
		if (number >= numbers[i]) {
			output.push(numerals[i]);
			number = number - numbers[i];
			i--;
		} else if (number === 0) {
			return output.join('');
		}
	}
}


module.exports = romanNumeral;
