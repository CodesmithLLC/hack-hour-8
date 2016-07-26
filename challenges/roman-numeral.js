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
   var res = "";
   var mNum = n / 1000;

   if (n.toString().length === 4) {
     for (var i = 0; i < Math.floor(mNum); i++) res = res + 'M';
     n = n.toString().split("");
     n.shift()
     n = n.join("");

     if (n.toString().split("")[0] === '0') {
 	    n = n.toString().split("");
 	    n.shift()
 	    n = n.join("");
     }

   } if (n.toString().length === 3) {
     if (parseInt(n) >= 900) {
       res = res + "CM";
       n = n.toString().split("");
       n.shift()
       n = n.join("");
     }
     else if (parseInt(n) >= 500) {
       res = res + "D";
       n = n - 500;
     }
     else if (parseInt(n) >= 400) {
       res = res + "CD";
       n = n.toString().split("");
       n.shift()
       n = n.join("");
     }
     if (parseInt(n) >= 100) {
       var cNum = Math.floor(n / 100);
       for (var i = 0; i < cNum; i++) res = res + "C";
       n = n.toString().split("");
       n.shift()
       n = n.join("");
     }
     if (n.toString().split("")[0] === '0') {
 	    n = n.toString().split("");
 	    n.shift()
 	    n = n.join("");
     }

   } if (n.toString().length === 2) {
     if (parseInt(n) >= 90) {
       res = res + "XC";
       n = n.toString().split("");
       n.shift()
       n = n.join("");
     }
     else if (parseInt(n) >= 50) {
       res = res + "L";
       n = n - 50;
     }
     else if (parseInt(n) >= 40) {
       res = res + "XL";
       n = n.toString().split("");
       n.shift()
       n = n.join("");
     }
     if (parseInt(n) >= 10) {
       var xNum = Math.floor(n / 10);
       for (var i = 0; i < xNum; i++) res = res + "X";
       n = n.toString().split("");
       n.shift()
       n = n.join("");
     }
     if (n.toString().split("")[0] === '0') {
 	    n = n.toString().split("");
 	    n.shift()
 	    n = n.join("");
     }

   } if (n.toString().length === 1) {
     if (parseInt(n) >= 5) {
       res = res + "V";
       n = n - 5;
     }
     else if (parseInt(n) >= 4) {
       res = res + "IV";
       n = n.toString().split("");
       n.shift()
       n = n.join("");
     }
     if (parseInt(n) >= 1) {
       var iNum = Math.floor(n);
       for (var i = 0; i < iNum; i++) res = res + "I";
       n = n.toString().split("");
       n.shift()
       n = n.join("");
     }
   }
   return res;
 }

module.exports = romanNumeral;
