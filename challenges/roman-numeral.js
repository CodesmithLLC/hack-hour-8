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
        ['1000']: 'M',
        ['900']: 'CM',
        ['500']: 'D',
        ['400']: 'CD',
        ['100']: 'C',
        ['90']: 'XC',
        ['50']: 'L',
        ['40']: 'XL',
        ['10']: 'X',
        ['9']: 'IX',
        ['5']: 'V',
        ['4']: 'IV',
        ['1']: 'I'
    }

    var result = [];
    var nums = Object.keys(romans);
    // console.log(nums);
    var i;
    var len = nums.length - 1;
    var k = n;
    var high, mid, low;
    if (k > 100) {
        high = Math.floor(k / 100) * 100;
        mid = Math.floor((k % 100) / 10) * 10;
        low = (k % 100) % 10;
    }

    function romanChunks() {
        var factors = [];
        for (i = len; i >= 0; i--) {
            if (k === 0) break;
            if (k % nums[i] === 0) {
                factors.unshift(romans[nums[i]]);
                k = k - nums[i];
                i = len;
            }
        }
        return factors.join('');
    }
    return romanChunks(high) + romanChunks(mid) + romanChunks(low);
}


console.log(romanNumeral(873));



// module.exports = romanNumeral;
