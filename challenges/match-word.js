// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
//Or they close a "case" with "esac", i.e. the same keyword backwards.
//For this problem we'll check that all words in a string are "closed".
//Write a function that takes a string and returns true if every word is closed by its backwards counterpart.
//Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str === '') return true;
  var newStr = str.replace(/[^a-z]/gi, ' ');

  var arr = newStr.split(' ');
  var otherArr = [];
  for (let i = 0; i < arr.length; i++) {
  	if (arr[i] != '') {
  		otherArr.push(arr[i].toLowerCase());
  	}
  }
  if (otherArr.length % 2 !== 0) return false;
  for (let i = 0; i < otherArr.length; i++) {
  	if (otherArr.indexOf(otherArr[i].split('').reverse().join('')) === -1) return false;
  	if ((otherArr.indexOf(otherArr[i].split('').reverse().join('')) - i) % 2 === 0) return false
  }
  return true
}
module.exports = matchWord;
