// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	// remove punctuation and extra spaces
	var stripped = str.toLowerCase().replace(/[^a-zA-Z]+|\s{2,}/gi,' ').replace(/^\s+|\s+$/g,'');
	// split stripped string into an array of all words
	var strippedArr = stripped.split(' ');
	// check empty case
	if (strippedArr[0] === '') return true;
	// set array to hold forward words and populate with first word in string
	var wordsArr = [];
	wordsArr[0] = strippedArr[0];
	// keep track of last opened word
	count = 0;
	// loop through rest of words in string
	for (var i = 1; i < strippedArr.length; i++){
		// if reverse word matches and won't leave an earlier word unclosed, remove original word from container
		if (wordsArr.indexOf(strippedArr[i].split('').reverse().join('')) >= count){
			wordEl = wordsArr.indexOf(strippedArr[i].split('').reverse().join(''));
			if(wordsArr.length === 1) wordsArr = [];
			else wordsArr.splice(wordEl,1);
		}
		// if word is not reverse of most recently opened word, add to array
		else (wordsArr.push(strippedArr[i]));
		count++;
	}
	// check if all words have been closed properly
	if (wordsArr.length === 0) return true
	return false;
}

module.exports = matchWord;
