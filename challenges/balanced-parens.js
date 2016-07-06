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
  const closingObj = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  let openingBracketArr = []
  let closingBracketArr = []
//loop through input(type Str) to find opening bracket, push to brackArr
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === '(') {
      openingBracketArr.push(input.charAt(i));
    } else if (input.charAt(i) === ')') {
      closingBracketArr.push(input.charAt(i));
    } else if (input.charAt(i) === '{'){
      openingBracketArr.push(input.charAt(i));
    } else if (input.charAt(i) === '}'){
      closingBracketArr.push(input.charAt(i));
    } else if (input.charAt(i) === '['){
      openingBracketArr.push(input.charAt(i));
    } else if (input.charAt(i) === ']'){
      closingBracketArr.push(input.charAt(i));
    }
  }

var openingBracketArrLength = openingBracketArr.length

  //shift closingBracketArr should equal pop of openingBracketArr, if not, return false.
  //If both arrays empty at end, then return true, else return false
for (var j = 0; j < openingBracketArrLength; j++){
  //check to see if the opening and closing pairs match
  if(openingBracketArr[openingBracketArr.length-1] !== closingObj[closingBracketArr[0]]){
    return false;
  } else {
    openingBracketArr.pop();
    closingBracketArr.shift();
  }
}

if (openingBracketArr.length === 0 && closingBracketArr.length === 0){
  return true;
} else {
  return false;
}
}
));
module.exports = balancedParens;
