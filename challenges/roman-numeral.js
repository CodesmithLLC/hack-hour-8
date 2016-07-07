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
  console.log('');
  console.log(n);

  // count for I
  // condition for if count for I is 4 change to IV
    // if 5 add
  // count Is
  // if count for I is 4 change to IV
    // if there's a V change it to IX
  // if 2 V add X
  // if 4 X change X's to IV
  //

  var I = 0;
  var V = 0;
  var X = 0;
  var L = 0; // 50
  var C = 0; // 100
  var D = 0; // 500
  var M = 0; // 1000

  var arr = [];
  for (var j = 0; j < n; j++) {
    I++;
    arr.push('I');
    if (I === 4 && V === 0) {
      arr.pop();
      arr.pop();
      arr.pop();
      arr.pop();
      arr.push('I');
      arr.push('V');
    } else if (I === 4 && V === 1) {
      arr.pop();
      arr.pop();
      arr.pop();
      arr.pop();
      arr.pop();
      arr.push('I');
      arr.push('X');
    } else if (I === 5) {
      arr = [];
      I = 0;
      V++;
      arr.push('V');
      if (V === 2) {
        arr = [];
        V = 0;
        X++;
        arr.push('X');
        if (X === 4 && L === 0) {
          arr.pop();
          arr.pop();
          arr.pop();
          arr.pop();
          arr.push('X');
          arr.push('L');
        } else if (X ===4 && L === 1) {
          arr.pop();
          arr.pop();
          arr.pop();
          arr.pop();
          arr.pop();
          arr.push('X');
          arr.push('C');
        } else if (X === 5) {
          arr = [];
          X = 0;
          L++;
          arr.push('L');
          if (L === 2) {
            arr = [];
            L = 0;
            C++;
            arr.push('C');
            if (C === 4 && D === 0) {
              arr.pop();
              arr.pop();
              arr.pop();
              arr.pop();
              arr.push('C');
              arr.push('D');
            } else if (C === 4 && D === 1) {
              arr.pop();
              arr.pop();
              arr.pop();
              arr.pop();
              arr.pop();
              arr.push('C');
              arr.push('M');
            } else if (C === 5) {
              arr = [];
              C = 0;
              D++;
              arr.push('D');
              if (D === 2) {
                arr = [];
                D = 0;
                M++;
                arr.push('M');
              }
            }
          }
        }
      }
    }
  }

  // console.log('I ' + I);
  // console.log('V ' +V);
  // console.log('X ' +X);
  // console.log('L ' +L);
  // console.log('C ' +C);
  // console.log('D ' +D);
  // console.log('M ' +M);
  return arr.join('');

}

console.log(romanNumeral(1009));
console.log(romanNumeral(9));
// console.log(romanNumeral(5));
// console.log(romanNumeral(6));
// console.log(romanNumeral(10));
// // console.log(romanNumeral(40));
// // console.log(romanNumeral(50));
// // console.log(romanNumeral(90));
// // console.log(romanNumeral(100));
// console.log(romanNumeral(400));
// // console.log(romanNumeral(500));
// // console.log(romanNumeral(900));
// console.log(romanNumeral(1550));

//module.exports = romanNumeral;
