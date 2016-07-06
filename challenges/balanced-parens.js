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

/*
Edge cases: check if input contains any parens/brackets/curly braces at all. If
not, return some sort of failure message or just false.

(1) convert input to a string with only parens characters (use regex to find and
replace all word characters and numbers with nothing) [this doesn't seem to be working...]
(2)

(1) check for an opening brace of a particular type.
  (2) if none found, return false.
  (3) If found, check for the next instance of the matching style of closing brace.
    (4)Then check if there are any characters in-between.
      (5) If there is nothing in-between, that counts as balanced; continue searching.
      (6) If there is something in-between:
        (7)check if the first character inbetween is an opening brace of some sort...
          (8) if it's a closing brace of some sort, return false.
          (9) If it is indeed another opening brace, pull that substring and run it against the recursive brace checker.
        [This may be a recursive call]
        [never mind, do the other idea]
        
Find the first instance of an opening parens.
Create a substring from the index of the opening parens to the first instance of a closing parens (that matches type).
With that substring,
*/

function balancedParens(input) {
  if (typeof input !== 'string') return false;
  //[need to determine base case]
  if (input.charAt(0) === '(' || input.charAt(0) === '{' || input.charAt(0) === '[') {
    input.substring(0, )
  }
}

module.exports = balancedParens;
