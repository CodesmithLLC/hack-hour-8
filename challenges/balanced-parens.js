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
  let ps = 0;
  let bs = 0;
  let cs = 0;
  // loop thru the array and everytime a ( is encountered put up a count
  // if the count isn't 0 then return false;
  const arr = input.split('');

  arr.forEach(function(element) {
    if (element == '(') {
      ps++;
    } else if (element == ')') {
      ps--;
    } else if (element == '[') {
      bs++;
    } else if (element == ']') {
      bs--;
    } else if (element == '{') {
      cs++;
    } else if (element == '}') {
      cs--;
    }
  });

  return ps === 0 && cs === 0 && bs === 0 ? true : false;

  // console.log(input);

}

console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))
// console.log(balancedParens('()'))
// console.log(balancedParens(')('))
// console.log(balancedParens('(())'))
// console.log(balancedParens('var hubble = function() { telescopes.awesome();'));
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));

module.exports = balancedParens;
