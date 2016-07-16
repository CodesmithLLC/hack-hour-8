// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // compares the reversed string with the last element in holdArr
  function strReverse(string) {
    string = string.split('');
    return string.reverse().join('');
  }

  // to get rid of all special characters
  var strArr = str.split(/[^a-zA-Z]/);
  var newArr = [];

  var holdArr = [];

  for (i = 0; i < newArr.length; i++) {
    if (!newArr[i].match(/[a-zA-Z])) continue;
    var len = holdArr.length - 1;
    var r = strReverse(newArr[i]);
    console.log(r);
    if (holdArr[len] == r) {
      holdArr.pop();
    } else {
      holdArr.push(newArr[i]);
    }
    console.log('holdarr ' + holdArr);
  }

  return holdArr.length === 0 ? true : false;
  // console.log(holdArr);
}

// doesnt work
// match words from the first and last one
// function matchWord2(str) {
//   str = str.toLowerCase();
//   // var strArr = str.split(/[^a-zA-Z]/);
//   var isSpace = false;
//   var isLetter = false;
//   // var half = str.length / 2;
//   for (var i = 0, j = str.length - 1; i <= j; null) {
//     console.log('i ' + i + ' ' + str[i]);
//     console.log('j ' + j + ' ' + str[j]);
//     if (!str[i].match(/[a-zA-Z]/)) {
//       if (isLetter === true) isSpace = true;
//       console.log('nomatch i');
//       i++;
//       continue;
//     }
//     if (!str[j].match(/[a-zA-Z]/)) {
//       if (isLetter === true) isSpace = true;
//       console.log('nomatch j');
//       j--;
//       continue;
//     }
//     isLetter = true;
//     console.log('i ' + i + ' ' + str[i]);
//     console.log('j ' + j + ' ' + str[j]);
//     if (str[i] !== str[j]) return false;
//
//     i++;
//     j--;
//   }
//   return isSpace ? true : false;
// }
// module.exports = matchWord;
// console.log(matchWord2('__END_DNE-----'))
// console.log(matchWord2('__ENDDNE__'))
// console.log(matchWord('IF()()fi[]'))
// console.log(matchWord2('for__if__rof__fi'))
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
// console.log(matchWord(''))
