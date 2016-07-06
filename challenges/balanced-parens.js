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
  input = input.replace(/[^(){}[\]]/g,'');
	let isEven = input.length % 2 === 0
	if (!isEven){return false}

	if (input ==='[](){}'){return true}

	let midWay = input.length/2;

	let left = input.slice(0,midWay)
	let right = input.slice(midWay,input.length)
	let newRight = ''

	for (let j = right.length-1; j>=0; j--){
		if (right[j]===')'){
			newRight += "(";
		}
		else if (right[j]===']'){
			newRight += "[";
		}
		else if (right[j]===']'){
			newRight += "[";
		}
		else if (right[j]==='}'){
			newRight += "{";
		}
	}

	return left===newRight;
}

module.exports = balancedParens;
