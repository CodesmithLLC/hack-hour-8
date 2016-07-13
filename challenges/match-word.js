// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

/*
if empty string return true
replace non-characters with space and lower case characters.
split string by spaces into array
if array length is 1 return false
take the first and last character string in the array and compare the reverse of last character string to first character string and return true if they match else return false
*/

function matchWord(str) {
  if(str === '') {
  	return true;
  }
  var arr = str.toLowerCase().replace(/[^a-z]/gi, ' ').split(' ');
  var container = [];
  
  arr.forEach(function(current){
  	if(current !== '') {
  		container.push(current);
  	}
  });
  
  if(container.length === 1) {
  	return false;
  } else {
  	return container[0] === container[container.length - 1].split('').reverse().join('');
    }
}


module.exports = matchWord;
