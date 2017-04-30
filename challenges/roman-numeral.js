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
  var romanCharArray = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
  var NumsArray = [1,4,5,9,10,40,50,90,100,400,500,900,100]
    // var RomanNums = {
    //     1: 'I',
    //     4: 'IV',
    //     5: 'V',
    //     9: 'IX',
    //     10: 'X',
    //     40: 'XL',
    //     50: 'L',
    //     90: 'XC',
    //     100: 'C',
    //     400: 'CD',
    //     500: 'D',
    //     900: 'CM',
    //     1000: 'M'
    //   };
    var RomanLetters ="";
    var remainder = 0;
    var input = n;

    while(input > 0) {

    for(var i = 0; i< NumsArray.length; i++) {

      if(NumsArray[i] <= input && NumsArray[i+1] > input) {     //if you're at the highest num index without going over

        RomanLetters += romanCharArray[i];

        console.log(input, RomanLetters);
        //add the letter at that index to RomanLetters
        input -= NumsArray[i];                      //reduce that amount from input, loop again
        console.log('input', + input)             // loop stoping. add while loop?
        }
      }
  }
    return RomanLetters;
}
//find closest equivalent of n without going over (44 would go to 40);
//then deal with remainder. 62 would go to 50, have remainder of 12.
//with remainder, repeat process, scanning for highest number equivalent, without going over
//12 would go to 10
//remainder of 2, both go to 1.
//each iteration, populating RomanLetters "" with proper key




module.exports = romanNumeral;
