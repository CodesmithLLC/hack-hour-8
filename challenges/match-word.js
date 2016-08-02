// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true
function log(input) {
    console.log(input);
}

function matchWord(str) {
    if (!str.length) return true;

    var lowered = str.toLowerCase();
    var letterStr = lowered.replace(/[^a-z]/gi, ' ');
    var strArrayed = letterStr.trim().split(' ');

    if (strArrayed.length % 2 === 1) return false;
    var matchArr = [];

    strArrayed.forEach(function(ele, idx) {
        var revStr = ele.split('').reverse().join('');
        if ((matchArr.indexOf(ele) < 0) && (matchArr.indexOf(revStr) < 0)) {
            matchArr.push(ele);
        }
        if (matchArr.indexOf(revStr) > -1) {
            matchArr.splice(matchArr.indexOf(revStr), 1);
        }
    })

    return matchArr.length === 0;
}


// log(matchWord('__ENDDNE-----'));
module.exports = matchWord;
