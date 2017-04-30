// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
// Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem
// we'll check that all words in a string are "closed". Write a function that takes a
// string and returns true if every word is closed by its backwards counterpart. Words
// must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  function isLetter(char) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) return true;
    return false;
  }

  function checkPit(word, pit) {
    const lastIndex = pit.length - 1;
    const reversed = word.split('').reverse().join('');
    if (pit[lastIndex] !== word) {
      if (pit[lastIndex] === reversed) pit.pop();
      else {
        pit.push(word);
      }
    }
    else {
      pit.push(word);
    }
  }

  if (str === '') return true;
  const input = str.toLowerCase();
  const pit = [];
  let word = '';

  for (let i = 0; i < input.length; i++) {
    if (isLetter(input[i])) {
      if (i === input.length - 1 || isLetter(input[i + 1])) {
        word = word + input[i];
      } else {
        word = word + input[i];
        checkPit(word, pit);
        word = '';
      }
    }
  }

  checkPit(word, pit);
  if (pit.length) return false;
  return true;
}

module.exports = matchWord;
