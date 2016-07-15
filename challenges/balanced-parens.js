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
Approach:
1. Split strings
2. Remove non-bracket characters
3. If bracket array is odd return false
4. Check for balanced parens by looping through and removing bracket pairs using replace
5. If unmatched brackets remain return false else return true

*/


function balancedParens(input){
	var container = []; 
	
	input.split('').forEach(function(current){
		if(current === '{' || current === '}' || current === '('|| current === ')'|| current === '['|| current === ']') container.push(current);
	})

	if (container.length % 2 > 0 ) {
		return false }

	//return JSON.stringify(container.join('')).replace(/[\[\]']+/g,'')	

}


module.exports = balancedParens;
