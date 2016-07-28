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
//if the string is an odd number return false 
var str = input;
var result = false;
if (str.length % 2 === 1) return false;
//if each of the brackets close right away return true
for (var i = 0; i < str.length; i + 2){
	if (str.charAt(i) === '(' && str.charAt( i + 1 ) === ')') {
		result = true;
	} 
	else if (str.charAt(i) === '(' && str.charAt( str.length - 1 - i ) === ')') {
		result = true;
	}
	else if (str.charAt(i) === '[' && str.charAt( i + 1 ) === ']'){
		result = true;
	} 
	else if (str.charAt(i) === '[' && str.charAt( str.length - 1 - i ) === ']') {
		result = true;
	}
	else if (str.charAt(i) === '{' && str.charAt( i + 1 ) === '}'){
		result = true;
	} 
	else if (str.charAt(i) === '{' && str.charAt( str.length - 1 - i ) === '}') {
		result = true;
	}
	else { 
		result = false; 
	}
	return result;
}
//split the string in half and compare each position for its closing bracket
}

module.exports = balancedParens;
