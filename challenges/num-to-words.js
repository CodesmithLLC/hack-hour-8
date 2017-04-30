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

function numToWords(num) {
  if (num === 0) {
    return 'Zero';
  }
  const numScaleArr = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
  const tensNamesArr = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const singleNamesArr = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const twoNamesArr = ['', '', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
  num = num.toString();
  num = num.split('');
  console.log(num);
  const word = [];

  var firstSet = num.length % 3;
  var set = num.length % 3; // set set as the first set
  if (firstSet === 0) {
    firstSet = 3;
    set = 3;
  }
  const numScale = Math.floor(num.length / 3);
  console.log(firstSet);
  console.log(numScale);

  var isTen = false;

  for (var i = 0; i < firstSet; i++) {
    var digit = num[i];
    if (set === 3) {
      word.push(singleNamesArr[digit]);
      word.push(numScaleArr[numScale]);
      set--;
    } else if (set === 2) {
      if (digit !== 0 && digit !== 1) {
        word.push(twoNamesArr[digit]);
      } else if (digit === 1) {
        word.push(tensNamesArr[digit]);
        isTen = true;
      }
      set--;
    } else if (set === 1) {
      if (isTen === true) {
        isTen = false;
      } else {
        word.push(singleNamesArr[digit]);
      }
      set = 3;
    } else {
      console.log('Bad firstset' + set);
    }
  }

  for (i = firstSet; i < num.length; i++) {

  }
}

console.log(numToWords(221999));
// console.log(numToWords(92120000000000000));

module.exports = numToWords;
