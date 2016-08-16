/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(input) {
    var permArr = [],
        usedChars = [];
        input = input.split("")
    return (function main() {
        for (var i = 0; i < input.length; i++) {
            var ch = input.splice(i, 1)[0];
            console.log('CH', ch)
            usedChars.push(ch);
            console.log('USEDCHARS', usedChars)
            if (input.length == 0) {
                permArr.push(usedChars.slice());
                console.log('PERM ARR', permArr)
            }
            main();
            input.splice(i, 0, ch);
            console.log('POP', usedChars.pop())
            usedChars.pop();
            
            console.log('PERM ARRrrrr 2', permArr)
        }
        return permArr;
    })();
}

module.exports = anagrams;
