// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

 /*
Approach:
1. Given length of string, should be able to categorize number (i.e. quadrillion, trillion, billion, million, thousand)
	a. Identify categories. 
2. Have a phrase for single digits.
3. Have a phrase for 
4. Have a phrase for double digits
5. Handle edge cases for numbers greater than quadrillions, when non-numbers are inputed, and 0.

 */

function numToWords(num) {
  if(typeof num !== 'number') return 'Error: Must be string!';
  if(num >= 1000000000000000000) return 'Value is too large to evaluate!';
  if(num === 0) return 'Zero';
  var output = '';
  var number = num;

  var numberKey = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
    // 100: 'Hundred',
    // 1000: 'Thousand',
    // 1000000: 'Million',
    // 1000000000: 'Billion',
    // 1000000000000: 'Trillion',
    // 1000000000000000: 'Quadrillion'
  }

  var categoryNumber = [1000000000000000, 1000000000000, 1000000000, 1000000, 1000, 100]
  var categoryWord = ['Quadrillion', 'Trillion', 'Billion', 'Million', 'Thousand', 'Hundred']

  for(var i =0 ; i < categoryNumber.length; i++) {
    console.log(categoryNumber[i].length);
  }

}


  var categoryNumber = [1000000000000000, 1000000000000, 1000000000, 1000000, 1000, 100]
  var categoryWord = ['Quadrillion', 'Trillion', 'Billion', 'Million', 'Thousand', 'Hundred']

  for(var i =0 ; i < categoryNumber.length; i++) {

    console.log(categoryNumber[i].toString().length);
  }
//1,200,300
//92,120,000,000,000,000
//100,000,000,000,000,000
//1,000,000,000,000,000,000
//Quintillion, Quadrillion, Trillion, Billion, Million, Thousand, Hundred

//console.log(numToWords(100000000000000000));
// console.log('100')

module.exports = numToWords;
