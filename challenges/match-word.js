// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
// Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem 
//we'll check that all words in a string are "closed". Write a function that takes a 
//string and returns true if every word is closed by its backwards counterpart. Words 
//must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	//if there are no letters in str return false
	if (!str.match(/[a-z]/gi)) return false;
	
	str = str.toLowerCase();
	console.log(str);
	var words = str.match(/[a-z]+\b|\b[a-z]+|(?:\b|_)[a-z]+(?=\b|_)/gi).map(function(item){
		return item.replace(/_/gi, '');
	});
	console.log(words);
	checker = '';
	var open = [];

	//if there's only one word in the string return false
	if (words.length < 2) return false;
	
	console.log(words);
	

	for (var i = 0; i < words.length; i++){
		reverse = words[i].split('').reverse().join('');
		checker += reverse; //checker to see if reverse has already been found, to find midpoint
		indx = str.indexOf(words[i]);
		open.push(words[i]);
		
		console.log(words[i])
		console.log(reverse)
		console.log(indx)
		console.log(checker)
		
		//if item is found in checker, midpoint has not been hit and logic will never be hit and loop will start again
		//if item is NOT found in checker, go into logic
		console.log(checker.indexOf(words[i]) === -1)
		if (checker.indexOf(words[i]) === -1) {
			//if reverse is NOT in the rest of the string, return false
			//if reverse IS in the rest of the string, nothing happens and loop starts again
			console.log(str.indexOf(reverse, indx) === -1+"********")
			if (str.indexOf(reverse, indx) === -1) return false;
			else {
				open = open.filter(function(item){
						return (item !== reverse);
						})
			}
		}
	}
	return true;
}

module.exports = matchWord;
