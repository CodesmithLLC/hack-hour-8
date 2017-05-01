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
var romansObj = {1:'I', 5:'V', 10:'X', 50:'L', 100:'C', 500:'D', 1000:'M'};
var romansArr = [1000, 500, 100, 50, 10, 5, 1];
var romanString = '';

function romanNumeral(n) {
	for (var i = 0; i < romansArr.length; i++){
		for(var j = i; j < romansArr.length; j++){
			if(n === 0) return romanString;
			if(n+romansArr[j] === romansArr[i]){
				romanString+= romansObj[romansArr[j]]+romansObj[romansArr[i]];
				n -= (romansArr[i] - romansArr[j]);
			}
			console.log("n: ",n, "i: ", i);
		}
		while(n >= romansArr[i]){
			console.log("n: ",n,romansArr[i], "i: ", i);
			romanString += romansObj[romansArr[i]];
			n -= romansArr[i];
		}
	}
	return romanString;
}

module.exports = romanNumeral;
