// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
// Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem
//we'll check that all words in a string are "closed". Write a function that takes a string
// and returns true if every word is closed by its backwards counterpart. Words must be
//separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	function notLetter(s){

		if (s === ''){return false}

		if (typeof s ==='string'){

			if(s.match(/[a-zA-Z]/g) ===null) {return false}
			return s.match(/[a-zA-Z]/g).length>0
		}
		return false;
	}

	for (let i = 0; i < str.length; i++){

		if (notLetter(str[i])){
			let strToFind = '';
			let revStr;

			if (notLetter(str[i])){
				for (let j = i; j<str.length; j++){

					if(notLetter(str[j])==false){
						 revStr= strToFind.split('').reverse().join('')

					}
					strToFind += str[j];

				}

			}


		}
	}


}

module.exports = matchWord;
