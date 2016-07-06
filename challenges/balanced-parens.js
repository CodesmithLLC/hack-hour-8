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
	var stripped = input.replace(/[^\(\)\{\}\[\]]+/gi,'');
	console.log(stripped);
	var count = 0;
	var parenType;
	for (var i = 0; i < stripped.length; i++){
		if (stripped.charAt(i) === '(' || stripped.charAt(i) === '[' || stripped.charAt(i) === '{'){
			count++;
			parenType = stripped.charAt(i);
			parenCount = i
		}
		else if ((stripped.charAt(i) === ')' || stripped.charAt(i) === ']' || stripped.charAt(i) === '}') && (stripped.charCodeAt(i) - parenType.charCodeAt() <= 2)){
			count--;
			parenType = stripped.charAt(parenCount-count+1);
			console.log("count "+count);
		}
	}
	return (count === 0) ? true : false;
}
console.log(balancedParens('[({})(){}[]]'));

module.exports = balancedParens;
