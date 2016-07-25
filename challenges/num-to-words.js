// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').

/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNinetyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) ->
 *'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NinetyTwoQuadrillionOneHundredTwentyTrillion'
 */

// This solution accounts for numbers into the quadrillions, as instructed.

function numToWords(num) {
  const numArr = num.toString('');
 }

const wordArr = [
    { 1000000000000000000000: 'Sextillion' },
    { 1000000000000000000: 'Quintillion' },
    { 1000000000000000: 'Quadrillion' },
    { 1000000000000: 'Trillion' },
    { 1000000000: 'Billion' },
    { 1000000: 'Million' },
    { 1000: 'Thousand' },
    { 100: 'Hundred' },
    { 90: 'Ninety' },
    { 80: 'Eighty' },
    { 70: 'Seventy' },
    { 60: 'Sixty' },
    { 50: 'Fifty' },
    { 40: 'Forty' },
    { 30: 'Thirty' },
    { 20: 'Twenty' },
    { 19: 'Nineteen' },
    { 18: 'Eighteen' },
    { 17: 'Seventeen' },
    { 16: 'Sixteen' },
    { 15: 'Fifteen' },
    { 14: 'Fourteen' },
    { 13: 'Thirteen' },
    { 12: 'Twelve' },
    { 11: 'Eleven' },
    { 10: 'Ten' },
    { 9: 'Nine' },
    { 8: 'Eight' },
    { 7: 'Seven' },
    { 6: 'Six' },
    { 5: 'Five' },
    { 4: 'Four' },
    { 3: 'Three' },
    { 2: 'Two' },
    { 1: 'One' },
];

const convObj = [
  { 1: 'One' },
  { 2: 'Two' },
  { 3: 'Three' },
  { 4: 'Four' },
  { 5: 'Five' },
  { 6: 'Six' },
  { 7: 'Seven' },
  { 8: 'Eight' },
  { 9: 'Nine' },
  { 10: 'Ten' },
  { 11: 'Eleven' },
  { 12: 'Twelve' },
  { 13: 'Thirteen' },
  { 14: 'Fourteen' },
  { 15: 'Fifteen' },
  { 16: 'Sixteen' },
  { 17: 'Seventeen' },
  { 18: 'Eighteen' },
  { 19: 'Nineteen' },
  { 20: 'Twenty' },
  { 30: 'Thirty' },
  { 40: 'Forty' },
  { 50: 'Fifty' },
  { 60: 'Sixty' },
  { 70: 'Seventy' },
  { 80: 'Eighty' },
  { 90: 'Ninety' },
  { 100: 'Hundred' },
  { 1000: 'Thousand' },
  { 1000000: 'Million' },
  { 1000000000: 'Billion' },
  { 1000000000000: 'Trillion' },
  { 1000000000000000: 'Quadrillion' },
  { 1000000000000000000: 'Quintillion' },
  { 1000000000000000000000: 'Sextillion' },
];

module.exports = numToWords;
