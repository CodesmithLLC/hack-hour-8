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
    var romans = {
        ['1']: 'I',
        ['5']: 'V',
        ['9']: 'IX',
        ['10']: 'X',
        ['40']: 'XL',
        ['50']: 'L',
        ['90']: 'XC',
        ['100']: 'C',
        ['400']: 'CD', 
        ['500']: 'D',
        ['900']: 'CM',
        ['1000']: 'M'
    }

    var odd = {
        ['4']: 'IV'
    }

    var factors = [];
    var nums = Object.keys(romans);

    var i;
    var len = nums.length - 1;

    for (i = len; i >= 0; i--) {
        if (n == 1) {
            factors.push(romans[0]);
            break;
        }
        if (n % i == 0) {
            factors.push(romans[i]);
            n = n - i;
            i++;
        }

    }

    return factors.join('');

}


// console.log(romanNumeral(999));



module.exports = romanNumeral;
