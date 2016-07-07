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

function romanNumeral(n) {
	var checkLength = n.toString().split("");
	var length = checkLength.length;
	var res = '';
	var ones = checkLength[length - 1];
	var tens = checkLength[length - 2];
	var hundreds = checkLength[length - 3];
	var thousands = checkLength[length - 4];
	console.log(thousands, hundreds, tens, ones);
	if (thousands !== undefined) {
		var thou = '';
		if (thousands < 4)
		for (let i = 1; i <= thousands; i++) {
			thou += 'M';
		}
	} res += thou;
	if (hundreds !== undefined) {
		var hund = '';
		if (hundreds <= 3) {
			for (let i = 1; i <= hundreds; i++) {
				hund += 'C';
			}
		}
		else if (hundreds == 4) {
			hund += "CD"
		}
		else if (hundreds == 5) {
			hund += 'D';
		}
		
		else if (hundreds > 5 && hundreds < 9) {
			hund += 'D';
			for (let i = 6; i < 9; i++) {
				hund += 'C';
			}
		}
		else hund += 'CM';
		res += hund;
	}
		if (tens !== undefined) {
		var ten = '';
		if (tens < 4) {
			for (let i = 1; i <= tens; i++) {
				ten += 'X';
			}
		}
		else if (tens == 4) {
			ten += "XL"
		}
		else if (tens == 5) {
			ten += 'L';
		}
		
		else if (tens > 5 && tens < 9) {
			ten += 'L';
			for (let i = 6; i < 9; i++) {
				ten += 'X';
			}
		}
		else ten += 'XC';
		res += ten;
	}
	
			if (ones !== undefined) {
		var uno = '';
		if (ones < 4) {
			for (let i = 1; i <= ones; i++) {
				uno += 'I';
			}
		}
		else if (ones == 4) {
			uno += "IV"
		}
		else if (ones == 5) {
			uno += 'V';
		}
		
		else if (ones > 5 && ones < 9) {
			uno += 'V';
			for (let i = 6; i < 9; i++) {
				uno += 'I';
			}
		}
		else uno += 'IX';
		res += uno;
	}
	return res;
}

module.exports = romanNumeral;
