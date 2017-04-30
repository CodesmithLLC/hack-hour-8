// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2 999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2 483 579 411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92 120 000 000 000 000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

 // string it

 // ones function
 // teens function
 // 20-99 function

 // if length is one
 // 	if number is zero do zero
 // 	if number is greater, do ones

 // if length is Two
 // 	if number is 10-19, do teens
 // 	if number is 20-99 do tens

 // if length is three
 // 	run ones function, assign to first spot

 // if larger than three, split up into triplets
 // 	go through and run above functions on numbers, store them 
 // 	last step: assign hundredPlus to each triplet 


function numToWords(num) {
	var answer = [];

	var numArr = num.toString().split('');

	if (numArr.length === 1) {
		if (numArr[0] === '0') return 'zero';
		else ones(num); 
	}
	if 
	
	function ones(num) {
		return ones.num;
	}
	function teens(num) {
		return teens.num;
	}
	function tens(num) {
		return tens.num;
	}


	var ones = {

		1: 'One',
		2: 'Two',
		3: 'Three',
		4: 'Four',
		5: 'Five',
		6: 'Six',
		7: 'Seven',
		8: 'Eight',
		9: 'Nine',
		10: 'Ten'
	}
	var teens = {
		11: 'Eleven',
		12: 'Twelve',
		13: 'Thirteen',
		14: 'Tourteen',
		15: 'Fifteen',
		16: 'Sixteen',
		17: 'Seventeen',
		18: 'Eighteen',
		19: 'Nineteen'
	}
	var tens = {
		2: 'Twenty',
		3: 'Thirty',
		4: 'Forty',
		5: 'Fifty',
		6: 'Sixty',
		7: 'Seventy',
		8: 'Eighty',
		9: 'Ninety'
	}
	var hundredPlus = {
		1: 'Hundred',
		2: 'Thousand',
		3: 'Million',
		4: 'Billion',
		5: 'Trillion',
		6: 'Quadrillion',
		7: 'Quintillion'
	}

}

module.exports = numToWords;
