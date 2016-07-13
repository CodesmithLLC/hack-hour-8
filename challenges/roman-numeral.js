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
	var num = n.toString().split('').reverse().map(function(item){
		return parseInt(item);
	});
	console.log(num)
	var numHolder = [];

var funcs = [
	function ones (n) {
		var str = "";
		if (n < 4) {
			str = "";
			for (var i = 0; i < n; i++) {
				str += "I";
				}
		}
		if (n === 4) str = "IV";
		if (n > 4 && n < 9) {
			str = "V";
			for (var y = 0; y < n-5; y++) {
				str += "I";
				}
			}
		if (n === 9) str = "IX";
		return str;
	},	
		
		function tens (n) {
	var str = "";
	if (n < 4) {
		str = "";
		for (var i = 0; i < n; i++) {
			str += "X";
			}
	}
	if (n === 4) str = "XL";
	if (n > 4 && n < 9) {
		str = "L";
		for (var y = 0; y < n-5; y++) {
			str += "X";
			}
		}
	if (n === 9) str = "XC";
	return str;
},


	function hundreds (n) {
	var str = "";
	if (n < 4) {
		str = "";
		for (var i = 0; i < n; i++) {
			str += "C";
			}
	}
	if (n === 4) str = "CD";
	if (n > 4 && n < 9) {
		str = "D";
		for (var y = 0; y < n-5; y++) {
			str += "C";
			}
		}
	if (n === 9) str = "DM";
	return str;
},

	function thousands (n) {
	var str = "";
	if (n < 4) {
		str = "";
		for (var i = 0; i < n; i++) {
			str += "M";
			}
	}
	return str;
}
]

for (var i = 0; i < num.length; i++ ){
	numHolder.push(funcs[i](num[i]))
}
return numHolder.reverse().join('');
}

module.exports = romanNumeral;
