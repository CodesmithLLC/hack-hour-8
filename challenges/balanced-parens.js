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
	var bracketObj = {
		'[' : ']',
		'(' : ')',
		'{' : '}'
	},
	open = [], 
	close = [],
	count = 0; 
	
	input.split('').forEach(function(current){
		if (current === '{' || current === '('|| current === '[') {
			open.push(bracketObj[current]);
			count++;
		} else if (current === '}' || current === ')' || current === ']') {
			close.push(open.splice(open.length-1,1)[0] === current ? true : false);
			count++;
		} 
	});

	if ( count % 2 > 0 ) {
		return false; 
	}

	return close.indexOf(false) > -1 ? false : true;

}


module.exports = balancedParens;
