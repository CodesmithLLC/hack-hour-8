/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}


function stringRotation(s1, s2) {
	var sortStr1 = s1.split("").sort().join("");
	var sortStr2 = s2.split("").sort().join("");
	
	return (isSubstring(sortStr2, sortStr1));
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
