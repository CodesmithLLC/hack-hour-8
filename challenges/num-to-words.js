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


//DOESNT WORK
function numToWords(num) {
	num = num.toString();
	if (num == 0) return 'zero';
	var zeros = ['','thousand', 'million', 'trillion', 'quadrillion'];
	// var nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var finalString = '';
	var tempString = '';
	var totalCount = Math.ceil(num.length / 3)
	// var firstNum;
	//split into sets of 3
	//start at the end and add word for every set of three and then call numToHundreds
	for(var i = 0; i<totalCount ; i++){
		tempString = num.substring(num.length-3 - 3*i, num.length-3*i)
		console.log(tempString)
		// firstNum = parseInt(tempString[0])
		// nums[firstNum-1] +
		finalString =  numToHundreds(tempString) + zeros[i]+ finalString;
	}

	return finalString;
}


//WORKS
function numToHundreds(numString){
	var numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var finalString = '';
	if (numString.length === 1) return finalString = numbers[parseInt(numString[0])];
	if (numString.length === 2) return finalString = tens[parseInt(numString[0])-1] + numbers[parseInt(numString[1])];
	if (numString.length === 3) return finalString = numbers[parseInt(numString[0])] + 'hundred' + tens[parseInt(numString[1])] + numbers[parseInt(numString[2])];
}

module.exports = numToWords;
