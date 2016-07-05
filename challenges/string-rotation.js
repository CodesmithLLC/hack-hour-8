/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 */

/*
Approach:
If length of the two strings do not match return false,
else return comparison of reordered string.
splice and put back together in order


*/


function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
	if (s1.length !== s2.length) {
		return false;
	} else {
		s2removed = s2.split('').splice(s2.indexOf(s1.charAt(0), s2.length-s2.indexOf(s1.charAt(0)))).join('')
		//s2Reordered = s2.split('').unshift(s2.split('').splice(s2.indexOf(s1.charAt(0)).join(''), s2.length-s2.indexOf(s1.charAt(0))).join(''));
		
		return 'removed '+s2removed
		return s1 === s2 || isSubstring(s1, s2.split('').reverse().join(''));
	}
}

//console.log(stringRotation("hello", "hello"));
//console.log(stringRotation("hello", "llohe"));
//console.log(stringRotation("hello", "he"));


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
