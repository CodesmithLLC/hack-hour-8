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
// loop thru array, if i is in, push its closing paren on a stack
// if i is a closing paren, (check obj), pop stack and if !== it's not balanced
function balancedParens(input){
  var opens = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  var closeds = {
    '}': 1,
    ')': 1,
    ']': 1
  }

  var stack = []
  var key
  for (var i = 0; i < input.length; i++) {
    key = input[i]
    if (opens[key]) stack.push(opens[key])
    if (closeds[key]) stack.pop()
  }

  return stack.length === 0
}

module.exports = balancedParens;
