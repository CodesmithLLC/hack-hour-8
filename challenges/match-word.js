/* Some languages have "if" statements that are closed by "fi" instead of curly
brackets. Or they close a "case" with "esac", i.e. the same keyword backwards.
 for this problem we'll check that all words in a string are "closed". Write a
 function that takes a string and returns true if every word is closed by its
 backwards counterpart. Words must be separated by space or punctuation.
 */

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
/* iterate through string and find words (aka separated by non alpha)
//possibility 1: one array ('A') to hold 'opening words', second array ('B') to hold
//closing words. First word from A should equal last word.reversed() of B.
//! needs to know logic of whether word is opening or not, poss fail.
//possibility 2: find any word in the string, hold it in a temp var.
//, check to see if temp var is indexOf in str.split.reverse.join. No regex, need the spaces.
modification, store all words in an array. check each word
*/

var wordsArr = [];
var temp ='';
  for(var i = 0; i<str.length; i++) {
    if(/^[a-z]+$/i.test(str[i])){
      temp += str[i];
    } else {
      //push word, clear temp variable, restart. but issue with massive array...
      wordsArr.push()
    }
  }
//console.log(temp.split('').reverse().join('') === temp);
}

module.exports = matchWord;


//matchWord('__END_DNE-----'); // -> true
//matchWord('__ENDDNE__'); // -> false    FAILS   (not separated by a space)
//matchWord('IF()()fi[]'); // -> true        (should be case-insensitive)
//matchWord('for__if__rof__fi'); // -> false     not properly closed. like ( [) ]
//matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'); // -> true
//matchWord('');  //-> true
