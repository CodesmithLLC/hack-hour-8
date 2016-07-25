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

let arr = num.toString().split(''), res = ''; 
console.log(arr); 
if (arr.length === 5 || arr.length === 4){
    console.log('in start'); 
    let start = [ 9 ,'Nine', 8, 'Eight', 7,'Seven',6,'Six', 5, 'Five', 4,'Four', 3,'Three', 2,'Two', 1, 'One'];
    for (var j = 0; j < start.length; j+=2){
        console.log(arr[0], start[j]); 
        if (parseInt(arr[0]) === start[j]){
            console.log('match', start[j]);
            res+= start[j+1] + 'Thousand'; 
            num -= (start[j] * 1000); 
            console.log('num', num)
        }
    }
}
let numWords = [ 300, 'ThreeHundred', 200, 'TwoHundred', 100, 'OneHundred', 90, 'ninety',80,'eighty', 70, 'seventy',60,'sixty', 50, 'fifty', 40,'forty', 30, '30', 20,'twenty', 19,'nineteen', 18,'eighteen',17,'seventeen', 16,'sixteen', 15,'fifteen', 14,'fourteen', 13,'thirteen', 12,'twelve', 11,'eleven', 10, 'ten', 9 ,'nine', 8, 'eight', 7,'seven',6,'six', 5, 'five', 4,'four', 3,'three', 2,'two', 1, 'one'];

while (num > 0){
    for (var i = 0; i < numWords.length; i +=2){
    if (numWords[i]<= num ){
        
        res += (numWords[i+1]); 
        num -=numWords[i]; 
        break; 
    }
    }
} console.log('num',num);
console.log(res)

return res; 

}
module.exports = numToWords;
