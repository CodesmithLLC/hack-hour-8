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
 	function getBracs(str) {
 		var res = [];
 		for (var i = 0; i < str.length; i++) {
 			if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === ')' || str[i] === ']' || str[i] === '}') res.push(str[i]);
 		}
 		return res;
 	}
 	var bracs = getBracs(str);
 	var stack = [];
 	for (var i in bracs) {
 		var brac = brac[i]
 		if (brac == '(' || brac == '[' || brac == '{') {
 			stack.push(brac)
 		} else {
 			if (!stack.length) return false;
 			if (!bracMatch(stack.pop(), brac)) return false;
 		}
 	}
 	return !stack.length;
 }

 // define bracMatch

module.exports = balancedParens;
