/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 */

function isSubstring(s1, s2) {
	return s1.indexOf(s2);
}

function stringRotation(s1, s2) {
	if (s1.length !== s2.length) return false;
	if (s1 === s2) return true;
	var startPhrase = s1.substring(0, 2);
	var startPlace = s2.indexOf(startPhrase);
	s2 = startPhrase + s2.slice(startPlace+2) + s2.slice(0, startPlace);
	if (s1 === s2) return true;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
