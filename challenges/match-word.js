// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	let regexStr = str.replace(/[^A-Za-z0-9]/g, ' ').trim().toLowerCase();
	let splitStr = regexStr.split(' ');
	let lastStr = splitStr[splitStr.length - 1];
	let reverseLastStr = lastStr.split('').reverse().join('');
	
	if (splitStr[0] === reverseLastStr) {
		return true;
		// console.log(true);
	} else {
		return false;
		// console.log(false);
	}
}

module.exports = matchWord;
