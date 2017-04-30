// Some languages have "if" statements that are closed by "fi" instead of curly
// brackets. Or they close a "case" with "esac", i.e. the same keyword backwards.
// for this problem we'll check that all words in a string are "closed". Write a
// function that takes a string and returns true if every word is closed by its
// backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

/*
if str is an empty string, return true
create an array from str (lowercase so that everything is case-insensitive)
shift and pop any non-word characters from beginning and end of array
with that processed strArr, compare strArr[i] and strArr[j] use i=0 and j=len-1, i++ and j--;
if [i] is a word character, compare it against the right-most word character
if [i] and [j] are both word match, remove them both and continue the loop
if [i] and [j] do not match, return false

to protect against enddne, each index-index comparison should also include && if i !== j
*/

function matchWord(str) {
  const strArr = str.toLowerCase().split('');
}

module.exports = matchWord;
