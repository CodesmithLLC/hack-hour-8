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

function balancedParens(input){
  if (input.length % 2 !== 0) return false;
  // for (let i = 0, j = input.length - 1; i < input.length / 2; i++, j--) {
  //   if (input.charAt(i) + input.charAt(j) !== '()') return false;
  // }
  // return true;

  const arr = [];

  if (isOpeningBracket(input.charAt(0))) arr.push(input.charAt(0));
  else return false;

  for (let i = 1; i < input.length; i++) {
    const char = input.charAt(i);
    if (isOpeningBracket(char)) {
      arr.push(char);
      break;
    } else if (isMatched(arr[arr.length-1], char)) {
      arr.pop();
      break;
    } else return false;
  }

  function isMatched(open, close) {
    switch (open + close) {
      case '()':
      case '[]':
      case '{}':
        return true;
      default:
        return false;
    }
  }

  function isOpeningBracket(char) {
    switch (char) {
      case '(':
      case '[':
      case '{':
        return true;
      default:
        return false;
    }
  }
  function isClosingBracket(char) {
    switch (char) {
      case ')':
      case ']':
      case '}':
        return true;
      default:
        return false;
    }
  }
}

module.exports = balancedParens;
