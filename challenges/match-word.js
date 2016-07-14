// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    /*APPROACH: remove symbols, trim string, reduce multiple interior whitespaces to single whitespace, handle non-strings and empty strings.  Check if first letter matches last letter in string.  If not, place first entire word with unmatched letter and following word in an empty array, check first letter in new array against last letter in new array (should tell us if the word with the unmatched letter is immediately followed by it's closing word).  But how to move past closing word in the original array if the pulled-out words do match?  THat's where I ran out of time... 
    */
    
    if (str === '') return true; 
    if (!(isNaN(str))) throw 'only letters please';
let newStr = str.replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g," ").trim().toLowerCase();
newStr = newStr.replace(/  +/g, ' '); 

let arr = newStr.split(''); 
let arrSpace = newStr.split(' '); 

console.log(newStr);
let newArr = [], k = 0
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]); 
    if (arr[i] === " ") k++; 
    if ((arr[i] !== arr[arr.length-(i+1)])){
        
        newArr.push(arrSpace[k], arrSpace[k+1]); 
        let troubleStr = newArr.join(); 
        let checkArr = troubleStr.split('')
        console.log('checkArr', checkArr);
        console.log('newArr', newArr)
        for (var j = 0; j < checkArr.length; j++){
            if (checkArr[j] !== checkArr[checkArr.length-(j+1)]){
                console.log('inner', checkArr[j], 'inner2', checkArr[checkArr.length-(j+1)])
                return false; 
            }
        } k += newArr.length, i += checkArr.length, checkArr = [], newArr = []; 
    }
}   
return true; 

}

module.exports = matchWord;
