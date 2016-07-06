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
    let closedCharacters = [')', '}', ']'];
    let pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    let openCharacters = ['(', '[', '{'];
    let closedObj = {')': 1, '}': 1, ']': 1}
    let empty = []; //maybe this should be a stack?
    if (closedCharacters.indexOf(input[0]) === -1) return false
        //if first character is closed return false
    if(input.length === 0) return console.error('no input provided');
        //if input doesnt exist return false;
    if(typeof input !== 'string') return false
        //if input isn't a string, return false

        //iterate through string. if open char, push to empty. if closed, pop off last character and compare using pairs object
    for(var i = 0; i < input.length; i++) {
      if(openCharacters.indexOf(input[i]) !== -1) {
        var current = input[i]
        empty.push(current)
      } else if (openCharacters.indexOf(current) === -1) {
        if(pairs[empty.pop()] !== current) return false //if they aren't pairs return false
      }
    }
    return true;
}
//start checking after ''
//if first character after '' is a closed paren, return false
//create and object with open characters and an object with closed characters
//or create one object of pairs
//create empty array or stack for storing characters as you loop through

module.exports = balancedParens;
