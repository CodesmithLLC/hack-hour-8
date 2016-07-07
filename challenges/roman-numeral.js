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


//delayed by wifi issues...

function romanNumeral(n) {
  const RmnNum = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

var RmnConversion = [];
var numToString = n.toString();
//iterate through, check if single digit, or digit with 0's (e.g. 1 vs. 100), then push
for(let i=0; i<numToString.length; i++){
  if (numToString.charAt(i) === '1' ) {
    if(numToString.charAt(i) === '1' && numToString.charAt(i + 1) === '0' && numToString.charAt(i + 2) === '0'  && typeof numToString.charAt(i + 3) === 'string'){
      RmnConversion.push('M');
      RmnConversion.push(RmnNum[numToString.charAt(i + 3)]);
      i = i+3;
    } else if (numToString.charAt(i) == 1 && numToString.charAt(i + 1) === '0' && typeof numToString.charAt(i + 2) === 'string') {
      RmnConversion.push('C');
      RmnConversion.push(RmnNum[numToString.charAt(i + 2)]);
      i = i+2;
    } else if (numToString.charAt(i) == 1 && typeof numToString.charAt(i + 2) === 'string') {
      RmnConversion.push('X');
      RmnConversion.push(RmnNum[numToString.charAt(i + 1)]);
      i = i+1;
    }else if (numToString.charAt(i) == 1){
      RmnConversion.push('I');
    }
  }

}
return RmnConversion.join('');
}

console.log(romanNumeral(102));
module.exports = romanNumeral;
