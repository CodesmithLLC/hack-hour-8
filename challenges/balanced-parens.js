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
	let counterObj = {
		openParen: input.match(/[(]/gi),
		closedParen: input.match(/[)]/gi),
		openBrack: input.match(/[[]/gi),
		closedBrack: input.match(/[\]]/gi),
		openCurl: input.match(/[{]/gi),
		closedCurl: input.match(/[}]/gi)
		};

	for (var key in counterObj) {
		if (counterObj[key] === null) counterObj[key] = 0;
		else counterObj[key] = counterObj[key].length;
	}

	if (counterObj.openParen === counterObj.closedParen && counterObj.openBrack === counterObj.closedBrack && counterObj.openCurl === counterObj.closedCurl) {
		return true;
	} else {
		return false;
	}
}

module.exports = balancedParens;
