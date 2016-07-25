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
  let copy = input.slice();
  copy = copy.split("");
  let openCount = 0
  let openIdx;

 for(let i = 0; i < copy.length; i++) {
  if(openParents(input[i])) {
    
  }
 }

function openParents(input) {
  return input === "(";
}

function openArr(input) {
  return input === "["
}

function openObj(input) {
  return input === "{"
}


}

module.exports = balancedParens;
