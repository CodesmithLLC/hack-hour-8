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

var digits = {1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten',11:'eleven',12:'twelve',13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventeen',18:'eighteen',19:'nineteen',20:'twenty',30:'thirty',40:'fourty',50:'fifty',60:'sixty',70:'seventy',80:'eighty',90:'ninety'};
var places = ['','','thousand','million','billion','trillion','quadrillion'];
function numToWords(num) {
	var master = '';
	var numString = num.toString();
	var numRString = numString.split('').reverse().join('');
	var stringArray = numRString.match(new RegExp('.{1,3}', 'g'));
	var stringRArray = stringArray.map(function(item){
		return item.split('').reverse().join('');
	})
	var numArray = stringRArray.map(function(item){
		return parseInt(item);
	})
	numArray=numArray.reverse();
	console.log(numArray);
	numArray.forEach(function(item,index){
		master += hundreds(item)+places[numArray.length-index];
		console.log([numArray.length-index])
	})
	return master;
}

function hundreds(set){
	var string = ' ';
	var hundreds = Math.floor(set/100);
	console.log("hundreds ",hundreds);
	console.log(string);
	if (hundreds>0) string += digits[hundreds]+'hundred';
	// console.log(string);
	var tens = set-hundreds*100;
	console.log("tens ", tens)
	if (tens > 20) string += digits[Math.floor(tens/10)*10];
	if (tens - Math.floor(tens/10)*10 !== 0){
		string += digits[(tens - Math.floor(tens/10)*10)];
	}
	console.log("string ",string);
	return string;
}

module.exports = numToWords;
