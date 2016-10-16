/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
    //doesn't accommodate for asymmetrical inputs :(
    var strless = input.replace(/[^\[^\]^\{^\}^\(^\)]/gi, '');

    var beginParens = {
        ['(']: 0,
        ['{']: 0,
        ['[']: 0
    }
    var endParens = {
        [')']: '(',
        ['}']: '{',
        [']']: '['
    }

    var parenArr = [];
    for (var i = 0; i < strless.length; i++) {
        if (strless[i] in beginParens) {
            parenArr.push(strless[i]);
        } else {
            endParens[strless[i]] === parenArr[parenArr.length - 1] ? parenArr.pop() : null;
        }
    }
    return !parenArr.length
}

// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
module.exports = balancedParens;
