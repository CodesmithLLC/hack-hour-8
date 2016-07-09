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
Assumed upper limit of input: 4000, per Hamza.
(edge cases first)
(1) place digits from the input number into an array


nuts. Almost done. hackhour solutions talk is cutting into hackhour time.
 */

function romanNumeral(n) {
  const nArr = n.toString().split('').reverse();
  let i;
  let rockyVII = '';
  let ones = '';
  let tens = '';
  let hundreds = '';
  let thousands = '';

  if (typeof n !== 'number' || n < 0 || n > 4000) return false;
  if (n === 0) return 'nulla';

  for (i = 0; i < nArr.length; i++) {
    if (i === 0) {
      const xNum = parseInt(nArr[i], 10);
      switch (xNum) {
        case xNum === 1:
          ones = 'I';
          break;
        case xNum === 2:
          ones = 'II';
          break;
        case xNum === 3:
          ones = 'III';
          break;
        case xNum === 4:
          ones = 'IV';
          break;
        case xNum === 5:
          ones = 'V';
          break;
        case xNum === 6:
          ones = 'VI';
          break;
        case xNum === 7:
          ones = 'VII';
          break;
        case xNum === 8:
          ones = 'VIII';
          break;
        case xNum === 9:
          ones = 'IX';
          break;
        case xNum === 0:
          break;
        default:
          ones = '';
      }
    }

    if (i === 1) {
      const yNum = parseInt(nArr[i], 10);
      switch (yNum) {
        case yNum === 1:
          tens = 'X';
          break;
        case yNum === 2:
          tens = 'XX';
          break;
        case yNum === 3:
          tens = 'XXX';
          break;
        case yNum === 4:
          tens = 'XL';
          break;
        case yNum === 5:
          tens = 'L';
          break;
        case yNum === 6:
          tens = 'LX';
          break;
        case yNum === 7:
          tens = 'LXX';
          break;
        case yNum === 8:
          tens = 'LXXX';
          break;
        case yNum === 9:
          tens = 'XC';
          break;
        case yNum === 0:
          break;
        default:
          tens = '';
      }
    }

    if (i === 2) {
      const zNum = parseInt(nArr[i], 10);

      switch (zNum) {
        case zNum === 1:
          hundreds = 'C';
          break;
        case zNum === 2:
          hundreds = 'CC';
          break;
        case zNum === 3:
          hundreds = 'CCC';
          break;
        case zNum === 4:
          hundreds = 'CD';
          break;
        case zNum === 5:
          hundreds = 'D';
          break;
        case zNum === 6:
          hundreds = 'DC';
          break;
        case zNum === 7:
          hundreds = 'DCC';
          break;
        case zNum === 8:
          hundreds = 'DCCC';
          break;
        case zNum === 9:
          hundreds = 'CM';
          break;
        case zNum === 0:
          break;
        default:
          hundreds = '';
      }
    }

    if (i === 3) {
      const aNum = parseInt(nArr[i], 10);

      switch (aNum) {
        case aNum === 1:
          thousands = 'M';
          break;
        case aNum === 2:
          thousands = 'MM';
          break;
        case aNum === 3:
          thousands = 'MMM';
          break;
        case aNum === 4:
          thousands = 'MMMM';
          break;
        default:
          thousands = '';
      }
    }
  }

  rockyVII = thousands + hundreds + tens + ones;
  return rockyVII;
}

module.exports = romanNumeral;
