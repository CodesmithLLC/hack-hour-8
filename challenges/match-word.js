// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". 
//Write a function that takes a string and returns true if every word is closed by its backwards counterpart. 
//Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	
	var reg = /^[a-z]+$/i; //test for english letters, case-insensitive.
	var words = [];
	//var newString = str.replace(/\W+/g,' ');

	console.log(str.split("\\P{Alpha}+"))
	//pushes all letters to array.
	for(var i = 0; i < str.length; i++) {
		if(str[i].match(reg)){ words.push(str[i])}
	
	}
	
	return words;
	
}
//matchWord('for_-)(if__rof__fi');
//only cares about letters - regex
//push words into array, designate each word by a non letter before/after
//compare each word to all other words in array, forwards and backwards, no matter the case
//change every word to either upper or lower case, then compare

//with all letters in array, compare total count of each letter? if all are the same, it COULD be closed(not the best way, we need to keep the words together with Regex);


module.exports = matchWord;
