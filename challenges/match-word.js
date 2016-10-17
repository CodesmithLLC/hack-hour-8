// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true
// function log(input) {
// console.log(input);
// }

function matchWord(str) {
  if (!str.length) return true;

  const filtered = str.toLowerCase()
    .replace(/[^a-z]/gi, ' ')
    .split(' ')
    .filter((ele) => {
      return ele !== '';
    });

  function reduction(array) {
    if (array.length === 1) return false;
    if (array.length === 0) return true;
    if (array[0] === revStr(array[array.length - 1])) {
      array.shift();
      array.pop();
      return reduction(array);
    }
    if (array[0] === revStr(array[1])) {
      array.shift();
      array.shift();
      return reduction(array);
    }
    return false;
  }

  function revStr(string) {
    return string.split('').reverse().join('');
  }

  return reduction(filtered);
}


// log(matchWord('for__if__rof__fi')); //  -> false     not properly closed. like ( [) ]
// log(matchWord('IF()()fi[]')); //  -> true        (should be case-insensitive)
// log(matchWord('__ENDDNE-----'));
// log(matchWord('__END_DNE-----')); //  -> true
// log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
module.exports = matchWord;
