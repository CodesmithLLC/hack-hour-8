function numToWords(num) {
// create object, keys as number with value as string representation
// will need to account for unique naming (e.g. eleven)
// test for length to determine ultimate value (e.g. thousand, million)


var suffixObj = {
  'doubleSuffix': 'ty',
  'hundredSuffix': 'Hundred',
  'thousandSuffix': 'Thousand',
  'millionSuffix': 'Million',
  'billionSuffix': 'Billion'
}



let resultWordsArr = [];  //store conversion, building as we go
// iterate through num, from back to front.
// find length of num first, to determine Suffix (i.e. TwoHUNDRED, ThreeMILLION)
var numStr = num.toString()
var numLength = numStr.length;

if(num <= 12){
  resultWordsArr.push(singleDigit(num));
}

if(num >12 && num <= 19){
  resultWordsArr.push(teenNumber(numStr.charAt(1)));
}

if(num >= 20 && num < 100){
  resultWordsArr.push(doubleNumber(numStr.charAt(0)) + singleDigit(numStr.charAt(1)));
}

if(num >= 100 & num < 1000){
  if(numStr.charAt(1) === 0){resultWordsArr.push(singleDigit(numStr.charAt(0))+ doubleNumber(numStr.charAt(1))+singleDigit(numStr.charAt(2)))}
  else {resultWordsArr.push(singleDigit(numStr.charAt(0)) +"Hundred"+ doubleNumber(numStr.charAt(1))+singleDigit(numStr.charAt(2)));
}}

if(num >= 1000 & num < 10000){
  if(numStr.charAt(1) === 0) {resultWordsArr.push(singleDigit(numStr.charAt(0)) + "Thousand"+ numToWords(numStr.charAt(2) + numStr.charAt(3)))}
  else {resultWordsArr.push(singleDigit(numStr.charAt(0)) + "Thousand"+ singleDigit(numStr.charAt(1)) +"Hundred"+ numToWords(numStr.charAt(2)+numStr.charAt(3)));
}
}

function singleDigit(number){
  var singleNumWordObj = {
    0: '',
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
    12: 'Twelve'
  };
    return singleNumWordObj[number];
}

function teenNumber(number){
  var prefixObj = {
    0: '',
    3: 'Thirteen',
    4: 'Fourteen',
    5: 'Fifteen',
    6: 'Sixteen',
    7: 'Seventeen',
    8: 'Eightteen',
    9: 'Nineteen'
  };
  return prefixObj[number];
}

function doubleNumber(number){
    var prefixObj = {
      0: '',
      2: 'Twenty',
      3: 'Thirty',
      4: 'Fourty',
      5: 'Fifty',
      6: 'Sixty',
      7: 'Seventy',
      8: 'Eightty',
      9: 'Ninety'
    };
    return prefixObj[number]
  }

return resultWordsArr;
}
console.log(numToWords(9011))
module.exports = numToWords;
