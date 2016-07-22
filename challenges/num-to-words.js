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
 	var options = ['','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', 'Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
 	if (num <= 20) return options[num];
 	else {
 		var str = num.toString();
 		var counter = 0;
 		var len = str.length;
 		var res = [];
 		var bigCounter = 1;

 		while (counter < len) {
 			var ones = options[str[str.length - 1]];
 			if (ones !== 'zero') {
 				res.unshift(ones);
 				counter++;
 			}

 			if (counter < len) {
 				var tens = options[18 + parseInt(str[str.length - 2])]
 				res.unshift(tens);
 				counter++;

 			}
 			if (counter < len) {
 				res.unshift('Hundred');
 				res.unshift(options[str[str.length - 3]])
 				counter++;
 			}
 			if (counter < len) {
 				switch(bigCounter) {
 					case 1: res.unshift('Thousand');
 					bigCounter++;
 					break;
 					case 2: res.unshift('Million');
 					bigCounter++;
 					break
 					case 3: res.unshift('Billion');
 					bigCounter++;
 					break;
 					case 4: res.unshift('Trillion')
 					bigCounter++;
 					break;
 					case 5: res.unshift('Quadrillion')
 					bigCounter++;
 					break;
 				}

 			str = str.slice(0, str.length - 3)
 			};

 		}
 		return res.join('');
 	}
 }


module.exports = numToWords;
