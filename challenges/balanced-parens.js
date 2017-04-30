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
	// Step 1
	// const parens = '()';
	// if (input.indexOf(parens) === -1) {
	// 	return false;
	// } else {
	// 	return true;
	// }
	
	// Step 2
	// const brackets = ['()', '{}', '[]'];
	
	// for (var i = 0; i < brackets.length; i++) {
	// 	if (input.indexOf(brackets[i]) === -1) {
	// 		return false;
	// 	} else {
	// 		return true;
	// 	}
	// }
	
	// Step 3
	// Using regex to find matching brackets
	// Unfinished

	const test = /[^\(]*(\(.*\))[^\)]*/;

	return input.search(test);
}

module.exports = balancedParens;
