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

function balancedParens(str) {
  var parentheses = "[]{}()";
  var stack = [];
  var parenPosition;
  for(let i = 0; i < str.length; i++) {
    parenPosition = parentheses.indexOf(str[i]);
    if(parenPosition === -1) {
      continue;
    }
    // if it's an opening paren
    if(parenPosition % 2 === 0) {
      stack.push(parenPosition + 1); // push next expected brace position
    // if it's a closing paren
    } else {
      if(stack.length === 0 || stack.pop() !== parenPosition) {
        return false;
      }
    }
  }
  // returns false if leftover odd parens in stack
  return stack.length === 0;
}

module.exports = balancedParens;
