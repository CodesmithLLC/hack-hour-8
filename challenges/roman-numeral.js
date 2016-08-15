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

    var store = [1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L',
                    40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'];
    var value = '';
    
    // use idx += 2 to skip over letters
    for (var idx = 0; n > 0 && idx < store.length; idx += 2) {

        // keep checking adding values at a specific index
        while (n >= store[idx]) {

            // append the Roman Numeral and decrease n by that amount
            value += store[idx + 1];
            n -= store[idx];
        }
    }
    return value;
}

module.exports = romanNumeral;
