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
/*
Approach: turn n into a string, split it by each digit, push into array,
iterate through array from the end, if last digit is a   
*/
var numerals = [  1000,'M', 900,'CM',500 ,'D',400,'CD', 100,'C',90,'XC',50,'L',40,'XL', 10,'X', 9,'IX', 5,'V',4,'IV',1, 'I'];
var res = '';

while (n >0){
    for (var i = 0; i < numerals.length; i+=2){
        if (numerals[i] <= n){
            res += numerals[i+1];
            n -= numerals[i]; 
            break; 
        }
            console.log('res', res, 'input', n);
    }

}
    return res; 

}
module.exports = romanNumeral;
